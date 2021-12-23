import React, { useState } from "react";
import axios from "axios";
import Card from "../../components/structure/Card";
import PageInitial from "../PageInitial";

export default function Profile() {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState("");
  if (!localStorage.getItem("token")) {
    return <PageInitial />;
  }
  const getUser = async () => {
    const user = await axios.get("/auth/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUser(user.data);
  };
  const getMoviesWatched = async () => {
    const movies = await axios.get("/user/seeList", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setMovies(movies.data);
  };
  if (user == []) {
    getUser();
    getMoviesWatched();
  }
  return (
    <>
      <main>
        <h1>Hello {user.name}</h1>
        <h2>Movies Watched:</h2>
        <div className="cards">
          {movies.map((film) => {
            return (
              <Card
                id={film.id}
                title={film.title}
                cover={film.cover}
                genres={film.genres}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
