import { Status } from 'models/delivery';
import deliveriesReducer, { activate, changeStatus, DeliveriesState } from 'store/reducers/deliveries'

describe('Deliveries Reducer', () => {

    const mockDelivery = {
        id: '1',
        client: 'aa-bb',
        customer:
        {
            address: '',
            city: '',
            latitude: null,
            longitude: null,
            name: '',
            zipCode: ''
        },
        delivery: { latitude: null, longitude: null, status: Status.idle }
    }

    const initialState: DeliveriesState = {
        list: [mockDelivery],
        error: null,
        loading: false,
        selected: null
    };

    it('should handle initial state', () => {
        expect(deliveriesReducer(initialState, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle increment', () => {
        const currentStatus = deliveriesReducer(initialState, activate({ delivery: initialState.list[0] }));
        expect(currentStatus.selected).toEqual(initialState.list[0].id)
    });

    it('should change statust to delivered', () => {
        const shipment = { status: Status.delivered, latitude: 1, longitude: 1 }
        const currentStatus = deliveriesReducer(initialState, changeStatus({ data: { id: initialState.list[0].id, shipment } }));
        expect(currentStatus.list[0].delivery).toEqual(shipment)
    });

})