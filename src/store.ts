import { Action, configureStore } from '@reduxjs/toolkit'

import { deliveriesReducer } from 'store/reducers'

export const store = configureStore({ 
    reducer: { deliveries: deliveriesReducer } 
})

type HashMap<K extends keyof any, T> = {
    [P in K]: T
}

export interface PayloadAction extends Action {
    payload: HashMap<string, any>
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch