import { Delivery } from "models/delivery";
import { put } from "./request";

export function putDelivery(delivery: Delivery) {
    return put(`/deliveries/${delivery.id}`, delivery.delivery)
}