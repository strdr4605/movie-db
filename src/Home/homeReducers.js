import { ADD_MOVIES_TO_REDUX_STORE } from './homeConstants'

const movies = (state = [], action) => {
  switch (action.type){
    case ADD_MOVIES_TO_REDUX_STORE:
      return [
        ...action.results
      ]
    default:
      return state
  }
}

export default movies