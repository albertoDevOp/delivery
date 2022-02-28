import { Shipment } from "models/delivery";
import { put } from "./request";

export function putDelivery(id: string, delivery: Shipment) {
    return put(`/deliveries/${id}`, delivery)
}