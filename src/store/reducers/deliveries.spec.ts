import { Status } from 'models/delivery';
import deliveriesReducer, { activate, changeStatus, DeliveriesState } from 'store/reducers/deliveries'

describe('Deliveries Reducer', () => {

    const initialState: DeliveriesState = {
        list: [{id: '1', client: 'aa-bb', customer: { address: '', city: '', latitude: null, longitude: null, name: '', zipCode: ''}, delivery: {latitude: null, longitude: null, status: Status.idle}}],
        error: null, 
        loading: false,
        selected: null
    };

    // it('a', () => {
    //     jest.mock('hooks/geolocation', () => ({
    //         useGeolocation: () => { 
    //             return { Latitude: 1, Longitude: 1}
    //         }
    //     }))
    //     expect(1).toBe(1)
    // })

    it('should handle initial state', () => {
        expect(deliveriesReducer(initialState, { type: 'unknown' })).toEqual({
            list: [{id: '1', client: 'aa-bb', customer: { address: '', city: '', latitude: null, longitude: null, name: '', zipCode: ''}, delivery: {latitude: null, longitude: null, status: Status.idle}}],
            error: null, 
            loading: false,
            selected: null
        });
    });

    it('should handle increment', () => {
        const actual = deliveriesReducer(initialState, activate({id: 1}));
        expect(actual.selected).toEqual({
            list: [{id: '1', client: 'aa-bb', customer: { address: '', city: '', latitude: null, longitude: null, name: '', zipCode: ''}, delivery: {latitude: null, longitude: null, status: Status.idle}}],
            error: null, 
            loading: false,
            selected: null
        });
    });

    // it('should handle decrement', () => {
    //     const actual = deliveriesReducer(initialState, changeStatus());
    //     expect(actual.data).toEqual(2);
    // });

})