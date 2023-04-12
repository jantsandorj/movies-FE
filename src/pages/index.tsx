

import React from "react";
import ImageGallery from "react-image-gallery";
import { IMovie } from "../components/moviesCard";
import Link from "next/link";
import axios from "axios"
import { log } from "console";

interface movieProps {
  movies: Array<IMovie>;
  totalRows?: number;
  pageSize?: number
}

interface IProps {
  messsage: string;
  result: any;
}

export default function Home(props:IProps): JSX.Element {
  console.log(props.result);
  
  let images = props.result.map((item:any, index: number) => {
    if (index <= 7) {
      const obj = {
        original: item.poster,
        originalTitle: item._id,
        description: item.plot,
      };
      return obj;
    } else return [];
  });

  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto"></div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Welcome to WatchMe
      </h1>
      <div className="flex flex-row">
        <div className=" w-2/3">
          <ImageGallery
            showBullets={true}
            showPlayButton={false}
            showThumbnails={false}
            showFullscreenButton={false}
            onErrorImageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Graukarte.svg/1200px-Graukarte.svg.png"
            items={images}
            renderItem={(item) => {
              console.log(item);

              return (
                <div>
                  <div
                    aria-label="Go to Slide 1"
                    tabIndex={-1}
                    className="image-gallery-slide center "
                    role="button"
                  >
                    <img
                      className="image-gallery-image"
                      src={item.original}
                      title="573a1391f29313caabcd73f4"
                      loading="eager"
                    />
                    <Link href={`/movie/${item.originalTitle}`}>
                      <span className="image-gallery-description">
                        {item.description}
                      </span>
                    </Link>
                  </div>
                </div>
              );
            }}
          />
        </div>
        <div className=" w-1/3">03</div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.post("http://localhost:9000/api/movies", { pageSize: 1, limit: 30 })
  console.log(res.data)

  return {
    props: {
      message: "success",
      result: res.data.result
    }
  }
}