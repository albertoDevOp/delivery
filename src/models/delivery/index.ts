export interface Customer {
    name: string,
    address: string,
    city: string,
    zipCode: string,
    latitude: number | null,
    longitude: number | null
}

export enum Status {
    delivered = "delivered",
    undelivered = "undelivered",
    idle = "idle"
}

export interface Shipment {
    status: Status,
    latitude: number | null,
    longitude: number | null
}

export interface Delivery {
    id: string,
    client: string,
    customer: Customer,
    delivery: Shipment
}