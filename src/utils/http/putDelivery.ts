import { Delivery, Shipment, Status } from "store/reducers/deliveries";
import { put } from "./request";

export function putDelivery(delivery: Delivery, status: Status) {
    return put(`/deliveries/${delivery.id}`, delivery.delivery)
}