import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PageInitial from "../PageInitial"

export default function View() {
  const id = useParams().id;
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [resume, setResume] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  
  const watched = async (event) => {
    if (event.target.checked) {
      await axios
        .patch(`/user/addList/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => alert("movie marked as watched successfully"));
    } else {
      await axios
        .patch(`/user/addList/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) =>
          alert("movie removed from as successfully watched")
        );
    }
  };

  const getMovie = async () => {
    return (
      await axios.get(`/movie/findUnique/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
    ).data;
  };

  useEffect(() => {
    getMovie().then((response) => {
      const movie = response;
      setCover(movie.cover);
      setTitle(movie.title);
      setGenres(movie.genres);
      setResume(movie.resume);
      setYear(movie.year);
      setCast(movie.cast);
    });
  }, []);

  if (!localStorage.getItem("token")) {
    return <PageInitial />;
  }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="card text-white bg-dark mb-3">
            <img src={cover} class="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">Title:</h5>
              <p className="card-text">{title}</p>
              <h5 className="card-title">Genres:</h5>
              {genres.map((item) => {
                return <span className="badge bg-primary">{item}</span>;
              })}
              <h5 className="card-title">Resume:</h5>
              <p className="card-text">{resume}</p>
              <h5 className="card-title">Year:</h5>
              <p className="card-text">{year}</p>
              <h5 className="card-title">Cast:</h5>
              {cast.map((item) => {
                return <p className="card-text">{item}</p>;
              })}
              <h5 className="card-title">
                Watched: <input onChange={watched} type="checkbox" />{" "}
              </h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
