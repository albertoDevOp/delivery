import { useAppSelector } from 'hooks/store';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { findSelected } from 'store/reducers/deliveries';
import { Delivery } from 'models/delivery'
import './element.css'

interface ElementProps {
    delivery: Delivery
}

export function Element({ delivery }: ElementProps) {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(`/delivery/${delivery.id}`, { replace: true }), [navigate]);

    const selectedId = useAppSelector(state => findSelected(state))

    return (
        <div className="block-matrix_element" onClick={handleOnClick}>
            <p>Delivery {delivery.id}
                {selectedId === delivery.id
                    && <span className='block-matrix_element-selected'></span>
                }
            </p>
        </div>
    );
}
