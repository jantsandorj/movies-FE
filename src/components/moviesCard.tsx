import Link from 'next/link';
import React from 'react'

interface IMovies {
    key: number;
    item: IMovie;
}
export interface IMovie {
    _id: string;
    title: string;
    poster: string;
    plot : string;
}

const MoviesCard = ({item, key}:IMovies):JSX.Element => {
  return (
    <div className='w-1/5'>
      <img src={item.poster} alt={item.title} width={"400px"} height={"500px"}/>
      <Link href={`/movies/_id`}>
      {item.title}
      </Link>
    </div>
  )
}

export default MoviesCard
