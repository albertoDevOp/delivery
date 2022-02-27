import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import { store } from 'store';
import { getMiddleware } from 'store/middlewares';
import { fetch as f } from "setup";
import { useDispatch } from 'react-redux';


export const fetchPosts = createAsyncThunk('deliveries/search-results', async () => {
    const result = await fetch("https://621b616ffaa12ee4500c81af.mockapi.io/deliveries")
    return await result.json()
  })
  
describe('Middleware Testing', () => {

    const doDispatch: Dispatch = ((action: AnyAction) => action) as Dispatch
    const doGetState = () => 42
    
    const nextHandler = getMiddleware({
        dispatch: doDispatch,
        getState: doGetState
    })

    it('should handle middleware', async () => {
     const c = fetchPosts()
        // console.log('a', c)
        // store.dispatch(c)
        const dispatch = useDispatch()
        dispatch({type: 'deliveries/search-results', payload: {loading: c, data: null, error: null}})
        expect(nextHandler).toBeInstanceOf(Function)
        expect(nextHandler.length).toBe(1)
    })

    // it('must return a function to handle action', () => {
    //     // @ts-ignore
    //     const actionHandler = nextHandler()

    //     expect(actionHandler).toBeInstanceOf(Function)
    //     expect(actionHandler.length).toBe(1)
    // })

    // it('must pass action to next if not a function', done => {
    //     const actionObj = { type: 'search', payload: {} }

    //     // @ts-ignore
    //     const actionHandler = nextHandler(action => {
    //         expect(action).toBe(actionObj)
    //         done()
    //     })

    //     actionHandler(actionObj)
    // })

    // it('must return the return value of next if not a function', () => {
    //     const actionObj = { type: 'search', payload: {} }

    //     const expected = 'redux'
    //     // @ts-ignore
    //     const actionHandler = nextHandler(() => expected)

    //     // @ts-ignore
    //     const outcome = actionHandler(actionObj)
    //     expect(outcome).toBe(expected)
    // })

})