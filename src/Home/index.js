import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import getRequestPromise from '../api/services'
import{ Movie } from './components/movie'
import './home.css'
import { addMoviesToReduxStore } from './homeActions'
import { connect } from 'react-redux'

class Home extends Component {

  constructor () {
    super()
  }

  componentWillMount () {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=1'
    // getRequestPromise(url).then((value) => {
    //     this.setState({ items: value })
    //   }
    // )
    this.props.addMoviesToReduxStoreDispatch(url)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <h1>Home</h1>
        <div className="content">
          {this.props.items.results.map((el) => {
              let url = 'https://www.themoviedb.org/movie/'+el.id
              let imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+el.poster_path
              return (
                <Movie key={el.id} imageUrl={imageUrl} url={url} title={el.title} ></Movie>
              )
            }
          )}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMoviesToReduxStoreDispatch: (url) => {
      dispatch(addMoviesToReduxStore(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)