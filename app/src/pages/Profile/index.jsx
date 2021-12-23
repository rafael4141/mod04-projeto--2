import React, { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState("");
  const getUser = async () => {
    const user = await axios.get("/auth/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUser(user.data);
  };
  const getMoviesWatched = async () => {

  }
  if (user == []) {
    getUser();
    getMoviesWatched();
  }
  return (
    <>
      <main>
        <h1>Hello {user.name}</h1>
        <h2>Movies Watched:</h2>
      </main>
    </>
  );
}
