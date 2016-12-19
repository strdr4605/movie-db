import React, { Component } from 'react'
import getRequestPromise from '../api/services'

class Movie extends Component {

  constructor () {
    super()
    this.state = {
      item: {
      }
    }
  }

  componentWillMount () {
    let url = `https://api.themoviedb.org/3/movie/${this.props.params.movieId}?api_key=bb8b6060d4fa202c8ba6301231747852&language=en-US&page=1`
    getRequestPromise(url).then((value) => {
        this.setState({ item: value })
      }
    )
  }

  returnBudget () {
  console.log('budget', this.state.item.budget)
  if(this.state.item.budget > 0)
    return (
      <p>
        Budget: {this.state.item.budget}
      </p>
    )
}

  imageUrl = ''

  render () {
    // console.log('Movie Component State', this.state.item)
    this.imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+this.state.item.poster_path
    return (
      <div>
        <img src={this.imageUrl} alt=""/>
        {this.returnBudget()}
      </div>
    )
  }

}



export default Movie