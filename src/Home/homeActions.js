import { ADD_MOVIES_TO_REDUX_STORE } from './homeConstants'
import getRequestPromise from '../api/services'

export const addMoviesToReduxStore = async (url) => {
  return {
    type: ADD_MOVIES_TO_REDUX_STORE,
    url,
    value: await getRequestPromise(url)
  }
}