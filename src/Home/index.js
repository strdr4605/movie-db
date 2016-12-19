import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import getRequestPromise from '../api/services'
import{ Movie } from './components/movie'
import './home.css'
import { addMoviesToReduxStore } from './homeActions'
import { connect } from 'react-redux'

class Home extends Component {

  constructor (props) {
    super(props)
    // this.state = {
    //   items: {
    //     results: []
    //   }
    // };
    this.page = 1
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  componentWillMount () {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=' + this.page
    // getRequestPromise(url).then((value) => {
    //     this.setState({ items: value })
    //   }
    // )
    this.props.addMoviesToReduxStoreDispatch(url)
  }

  nextPage () {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=' + ++this.page
    this.props.addMoviesToReduxStoreDispatch(url)
  }

  prevPage () {
    if(this.page > 1) {
      let url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=' + --this.page
      this.props.addMoviesToReduxStoreDispatch(url)
    }
  }
  render () {
    return (
      <div>
        <div className="head">
          <h1>Home</h1>
          <button onClick={this.prevPage}>
            Prev Page
          </button>
          <button onClick={this.nextPage}>
            Next Page
          </button>
        </div>
        <div className="content">
          {this.props.items.map((el) => {
              let url = el.id
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
      getRequestPromise(url).then((value) => {
        dispatch(addMoviesToReduxStore(value.results))
        }
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)