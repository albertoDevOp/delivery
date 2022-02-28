import { useGeolocation } from 'hooks/geolocation';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { changeStatus, Delivery, findById, findSelected, Status } from 'store/reducers/deliveries';
import { putDelivery } from 'utils/http/putDelivery';
import { View } from './views/details';

export function Container(props: any) {

    const [load, setLoad] = useState(false)

    const { delivery_id } = useParams()
    console.log(delivery_id)

    const delivery = useAppSelector(state => findById(state, delivery_id!))
    console.log(delivery)

    const selectedId = useAppSelector(state => findSelected(state))

    const coordinates = useGeolocation()

    const dispatch = useAppDispatch()

    const sendRequest = (status: Status) => { 
        setLoad(true)
        const { latitude, longitude } = coordinates
        const shipment = { ...delivery!.delivery, ...{ latitude: latitude, longitude: longitude}}
        let deliver = {...delivery, ...{ delivery: shipment } } as Delivery
        putDelivery(delivery!, status).then(data => dispatch(changeStatus({ delivery: deliver }))).finally(() => setLoad(false))
    }

    return <View selectedId={selectedId} delivery={delivery!} sendRequest={sendRequest} />
}
