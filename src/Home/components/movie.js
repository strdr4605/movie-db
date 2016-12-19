import React from 'react'
import '../home.css'
import { Link } from 'react-router'


export const Movie = (props) => {
  let link = '/movie/'+props.url
  return (
    <div className="movie">
      <Link to={link}>
        <img src={props.imageUrl} alt=""/>
      </Link>
      <h4><Link to={link}> {props.title} </Link></h4>
    </div>
  )
}