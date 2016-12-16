import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import getRequestPromise from '../api/services'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      items: {
        results: []
      }
    }
  }

  componentWillMount () {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=1'
    getRequestPromise(url).then((value) => {
        this.setState({ items: value })
      }
    )
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
        <div>
          {this.state.items.results.map((el) => {
              let url = 'https://www.themoviedb.org/movie/'+el.id
              return (
                <div key={el.id}>
                  <a href={url}> {el.title} </a>
                  <br/>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }

}

export default Home