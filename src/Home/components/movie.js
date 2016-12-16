import React from 'react'
import '../home.css'

export const Movie = (props) => {

  return (
    <div className="movie">
      <img src={props.imageUrl} alt=""/>
      <h4><a href={props.url}> {props.title} </a></h4>
    </div>
  )
}