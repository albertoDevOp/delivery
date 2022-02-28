import React, { useEffect } from 'react';
import { Delivery } from 'models/delivery';
import { Element } from 'components/list/views/element';
import './view.css'

interface ElementProps {
    deliveries: Array<Delivery>
}

export function View({ deliveries }: ElementProps) {

    const content = deliveries.map((delivery: Delivery) => <Element delivery={delivery} key={delivery.id} />)

    return (
        <div className="block-matrix">
            { content }
        </div>
    );
}
