import { fetch as f } from "setup";
import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { PayloadAction } from "store";

export const getMiddleware: Middleware =
  ((api: MiddlewareAPI<Dispatch, PayloadAction>) =>
    (next: Dispatch<PayloadAction>) =>
      <A extends PayloadAction>(action: A): A => {
        if (action.type === "SEARCH") {
          const terms = action.payload
          console.log('actionactionaction')
          console.log(action)

          if (terms) {
            (async () => {

              try {
                console.log('2')

                api.dispatch({
                  type: 'deliveries/search-results',
                  payload: {
                    loading: true,
                    data: null,
                    error: null
                  }
                })
                console.log('3')
                console.log(api.getState())

                const response = await f("https://621b616ffaa12ee4500c81af.mockapi.io/deliveries")
                console.log('4')

                console.log(response)

                api.dispatch({
                  type: 'deliveries/search-results',
                  payload: {
                    loading: false,
                    data: await response.data,
                    error: null
                  }
                })

                console.log(action)
                console.log(action)
                console.log(action)

              } catch (err) {

                console.log('err')
                console.log(err)

                api.dispatch({
                  type: 'deliveries/search-results',
                  payload: {
                    loading: false,
                    data: null,
                    error: err
                  }
                })

              }

            })()
          }
        }
        return next(action);
      }) as Middleware;