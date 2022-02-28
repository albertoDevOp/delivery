import React from 'react';
import { useAppDispatch } from 'hooks/store';
import { activate, Delivery, Status } from 'store/reducers/deliveries';
import { CustomerView } from './customer';
import './details.css';

interface ViewProps {
    delivery: Delivery,
    selectedId: string | null,
    sendRequest: any
}

export function View({ delivery, selectedId, sendRequest }: ViewProps) {

    const dispatch = useAppDispatch()

    const isSelected = selectedId && selectedId == delivery.id

    return (
        <div className="delivery">
            <header>
                <h1>Deliver {delivery?.id}</h1>
                <h2>{delivery?.client}</h2>
                {isSelected
                    && <p>
                        <span></span>
                        <span className="mark">Next Deliver</span>
                    </p>
                }
            </header>
            <div className="container">
                <CustomerView customer={delivery.customer} />
                <div className="block-actions">
                    {!selectedId &&
                        <button
                            type="button"
                            onClick={() => dispatch(activate({ delivery: delivery }))}>
                            Activate
                        </button>
                    }
                    {isSelected
                        && <button
                            type="button"
                            onClick={() => sendRequest(Status.delivered)}>
                            deliver
                        </button>}
                    {isSelected
                        && <button
                            type="button"
                            onClick={() => sendRequest(Status.undelivered)}>
                            cancel
                        </button>}
                </div>
            </div>
        </div>
    );
}
