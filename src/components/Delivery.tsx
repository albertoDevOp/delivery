import React, { useEffect } from 'react';
import { Delivery } from 'store/reducers/deliveries';

interface DeliveryProps {
    delivery: Delivery
}

export function DeliveryComponent({ delivery }: DeliveryProps) {

    return (
        <div className="delivery">
            { delivery.client }
        </div>
    );
}
