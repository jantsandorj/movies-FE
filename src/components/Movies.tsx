import React from 'react'
import MoviesCard from './moviesCard'
import axios from "axios"
import { IMovie } from './moviesCard'

const Movies = ({movies}: {movies:Array<IMovie>}): JSX.Element => {
  return (
    <>
      <p>Movies</p>
      <div className='flex'>
      {movies.map((item: IMovie, index: number)=>{
          return (
          <MoviesCard key={index} item={item}/>)
      })}
      </div>
    </>
  )
}

export default Movies
