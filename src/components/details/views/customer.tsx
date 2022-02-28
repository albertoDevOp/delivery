import React from 'react';
import { Customer } from 'models/delivery'
import './customer.css'

interface ViewProps {
    customer: Customer
}

export function CustomerView({ customer }: ViewProps) {
    const { name, address, city, zipCode } = customer
    return (
        <section className="block-customer">
            <h3 className="block-customer_header3">Customer details</h3>
            <ul className="block-customer_list">
                <li>
                    <p><span className="block-customer_list_title">Name</span> <span>{name}</span></p>
                </li>
                <li>
                    <p><span className="block-customer_list_title">Address</span> <span>{address}</span></p>
                </li>
                <li>
                    <p><span className="block-customer_list_title">Postal Code</span> <span>{zipCode}</span></p>
                </li>
                <li>
                    <p><span className="block-customer_list_title">City</span> <span>{city}</span></p>
                </li>
            </ul>
        </section>
    );
}
