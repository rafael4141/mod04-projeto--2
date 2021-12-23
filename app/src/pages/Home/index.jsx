import React, { useState } from "react";
import Card from "../../components/structure/Card";
import axios from "axios";
import "./style.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const movies = await axios.get("/movie/findMany");
    console.log(movies.data);
    setMovies(movies.data);
  };
  getMovies();
  return (
    <>
      <main className="container-fluid">
        <div className="cards">
          {movies.map((film) => {
            return (
              <Card
                id={film.id}
                title={film.title}
                year={film.year}
                cover={film.cover}
                resume={film.resume}
                cast={film.cast}
                genres={film.genres}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
