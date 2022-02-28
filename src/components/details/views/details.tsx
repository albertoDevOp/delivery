import React, { useCallback } from 'react';
import { useAppDispatch } from 'hooks/store';
import { activate } from 'store/reducers/deliveries';
import { Delivery, Status } from 'models/delivery'
import { CustomerView } from './customer';
import { useNavigate } from 'react-router-dom';
import './details.css';

interface ViewProps {
    delivery: Delivery,
    loading: boolean,
    selectedId: string | null,
    sendRequest: any,
}

export function Details({ delivery, loading, selectedId, sendRequest }: ViewProps) {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(`/`, { replace: true }), [navigate]);

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
                {
                    delivery.delivery.status === Status.idle ?
                        (<div className="block-actions">
                            {!selectedId &&
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => dispatch(activate({ delivery: delivery }))}>
                                    Activate
                                </button>
                            }
                            {isSelected
                                && <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => sendRequest(Status.delivered)}>
                                    deliver
                                </button>}
                            {isSelected
                                && <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => sendRequest(Status.undelivered)}>
                                    cancel
                                </button>}
                        </div>) : <div className="block-actions">This item has been delivered or cancelled</div>
                }
            </div>
            <div>
                <button
                    className="bloack-navigation_button"
                    type="button"
                    onClick={handleOnClick}>
                    Index
                </button>
            </div>
        </div>
    );
}
