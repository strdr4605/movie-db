import { combineReducers } from 'redux'
import movies from './Home/homeReducers'
import movieInfo from './Movie/reducers'
const moviesDB = combineReducers({
  movies,
  movieInfo
})

export default moviesDB