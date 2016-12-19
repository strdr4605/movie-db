import { ADD_MOVIES_TO_REDUX_STORE } from './homeConstants'
import getRequestPromise from '../api/services'

export const addMoviesToReduxStore = (results) => {
  // getRequestPromise(url).then((value) => {
    return {
      type: ADD_MOVIES_TO_REDUX_STORE,
      results
    }
  // })
}