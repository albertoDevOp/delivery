import { fetch as f } from "setup";
import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { PayloadAction } from "store";

export const getMiddleware =
  (api: any) => (next: any) => async (action:any) => {
        // if (action.type === "SEARCH") {

        //   const res = await fetch("https://621b616ffaa12ee4500c81af.mockapi.io/deliveries")
        //   const result = await res.json();
        //   console.log("aa", result)

        //   const b =  (  () => {

        //         api.dispatch({
        //           type: 'deliveries/search-results',
        //           payload: {
        //             loading: true,
        //             data: { a:1 },
        //             error: null
        //           },
        //         })
                
        //         // fetch("https://621b616ffaa12ee4500c81af.mockapi.io/deliveries").then(b => console.log(b), err => console.log(err))

        //         api.dispatch({
        //           type: 'deliveries/decrement-results',
        //           payload: {
        //             loading: false,
        //             data: null,
        //             error: null
        //           }
        //         })
        //     })
        //     try{
        //       b()
        //     } catch(err) {
        //       console.log(err)
        //     }
        //   }
        
        return next(action);
      };