import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'utils/http/setup'
import type { RootState } from 'store'
import { Delivery } from 'models/delivery'


interface Deliveries extends Array<Delivery> {}

export interface DeliveriesState {
    list: Deliveries,
    error: string | null,
    loading: boolean,
    selected: string | null
}

const initialState: DeliveriesState = { list: new Array<Delivery>(), error: null, loading: false, selected: null }

const deliveriesSlice = createSlice({
    name: 'list', 
    initialState, 
    reducers: {
        activate(state, action) {
            state.selected = action.payload.delivery.id
        },
        changeStatus(state, action) {
            const deliver = state.list.find(d => d.id === action.payload.data.id)
            deliver!.delivery = { ...action.payload.delivery }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchDeliveries.pending, (state, action) => {
            return {...state, error: null, loading: true}
        })
        .addCase(fetchDeliveries.fulfilled, (state, action) => {
            return {...state, list: [...state.list, ...action.payload], loading: false}
        })
        .addCase(fetchDeliveries.rejected, (state, action) => {
            return {...state, error: action.error.message || "", loading: false}
        })
    }
})

export const fetchDeliveries = createAsyncThunk('deliveries/search-results', async () => {
    const result = await request.get("/deliveries")
    return result.data
})

export const { activate, changeStatus } = deliveriesSlice.actions

export const selectAllDeliveries = (state: RootState) => state.deliveries.list
export const selectStatus = (state: RootState) => state.deliveries.loading
export const selectError = (state: RootState) => state.deliveries.error

export const findById = (state: RootState, id: string) => state.deliveries.list.find(delivery => delivery.id === id)
export const findSelected = (state: RootState) => state.deliveries.selected

export default deliveriesSlice.reducer
