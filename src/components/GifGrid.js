import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>loading...</p>}

      <div className="gifs-container">
        {data.map((item) => {
          return <GifGridItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
