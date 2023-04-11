import Link from "next/link";
import React, { useRef } from "react";
import {TomatoesMeter} from "./TomatoesMeter"

interface IMovies {
  key: number;
  item: IMovie;
}
export interface IMovie {
  _id: string;
  title: string;
  poster: string;
  plot: string;
  tomatoes: any
}

const MoviesCard = ({ item, key }: IMovies): JSX.Element => {
  return (
    <div key={key} className="group relative">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <a href={item.title}></a>
        <p className="text-sm font-medium text-gray-900">{item.title}</p>
        <TomatoesMeter
            criticMeter={item.tomatoes?.critic?.meter}
            viewerMeter={item.tomatoes?.viewer?.meter}
          />
      </div>
    </div>
  );
};

export default MoviesCard;
