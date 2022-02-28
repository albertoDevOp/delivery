import React from 'react';

import { selectAllDeliveries, selectError, selectStatus, Delivery } from 'store/reducers/deliveries'
import { useAppSelector } from 'hooks';
import { DeliveryComponent } from './Delivery';
import { LoaderComponent } from './Loader';

export function ListDeliveries(props: any) {

    const deliveries = useAppSelector(selectAllDeliveries)
    const loading = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)

    let content

    if (error) {
        content = <div>{error}</div>
    } else if (loading) {
        content = <LoaderComponent />
    } else {
        content = deliveries.map((delivery: Delivery) => <DeliveryComponent delivery={delivery} key={delivery.id} />)
    }

    return (
        <div className="App">
            {content}
        </div>
    );
}
