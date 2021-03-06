import { Loader } from 'components/common/loader';
import { useGeolocation } from 'hooks/geolocation';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { changeStatus, findById, findSelected } from 'store/reducers/deliveries';
import { Delivery, Shipment, Status } from 'models/delivery'
import { putDelivery } from 'utils/http/putDelivery';
import { Details } from './views/details';

export function Container(props: any) {

    const { delivery_id } = useParams<string>()
    
    const delivery = useAppSelector(state => findById(state, delivery_id!))
    
    const [loading, setLoading] = useState(false)

    const selectedId = useAppSelector(state => findSelected(state))
    
    const { latitude, longitude } = useGeolocation()
    
    const dispatch = useAppDispatch()
    
    if(!delivery) {
        return <Loader />
    }

    const sendRequest = (status: Status) => { 
        setLoading(true)
        const shipment: Shipment =  { ...delivery.delivery, status, latitude, longitude }
        putDelivery(delivery_id!, shipment)
            .then(() => dispatch(changeStatus({ data: { id: delivery_id, shipment }})))
            .finally(() => setLoading(false))
    }

    return <Details selectedId={selectedId} delivery={delivery!} sendRequest={sendRequest} loading={loading} />
}
