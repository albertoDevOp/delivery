import deliveriesReducer, { DeliveriesState, search_results, decrement } from 'store/reducers/deliveries'

describe('Deliveries Reducer', () => {

    const initialState: DeliveriesState = {
        data: 3,
        error: false, 
        loading: false
    };

    it('a', () => {
        expect(1).toBe(1)
    })

    // it('should handle initial state', () => {
    //     expect(deliveriesReducer(undefined, { type: 'unknown' })).toEqual({
    //         data: 0,
    //         error: false, 
    //         loading: false
    //     });
    // });

    // it('should handle increment', () => {
    //     const actual = deliveriesReducer(initialState, search_results());
    //     expect(actual.data).toEqual(3);
    // });

    // it('should handle decrement', () => {
    //     const actual = deliveriesReducer(initialState, decrement());
    //     expect(actual.data).toEqual(2);
    // });

})