import { createAction, createReducer } from '@reduxjs/toolkit'

export interface DeliveriesState {
    data: number,
    error: boolean,
    loading: boolean
}

export const search_results = createAction('deliveries/search-results')
export const decrement = createAction('deliveries/decrement')
export const incrementByAmount = createAction<number>('deliveries/incrementByAmount')

const initialState = { data: 0, error: false, loading: false } as DeliveriesState

const deliveriesReducer = createReducer(initialState, (builder) => {
    console.log("reducer")
    builder
        .addCase(search_results, (state, action) => {
            console.log(action)
            state.error = true
        })
        .addCase(decrement, (state, action) => {
            console.log(action)
            state.data--
        })
        .addCase(incrementByAmount, (state, action) => {
            state.data += action.payload
        })
})

export default deliveriesReducer