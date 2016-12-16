import { ADD_MOVIES_TO_REDUX_STORE } from './homeConstants'

const movies = (state = [], action) => {
  switch (action.type){
    case ADD_MOVIES_TO_REDUX_STORE:
      console.log(action)
      return [
        ...state,
        action.value
      ]
    default:
      return state
  }
}

export default movies