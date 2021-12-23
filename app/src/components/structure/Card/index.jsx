import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

export default function Card(props) {
  const watched = async (event) => {
    if (event.target.checked) {
      await axios.patch(`/user/addList/${props.id}`, {
        body: {id: props.id},
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((response) => alert("movie marked as watched successfully"))
    } else {
      await axios.patch(`/user/addList/${props.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((response) => alert("movie removed from as successfully watched"))
    }
  };
  return (
    <div className="card text-white bg-dark mb-3">
      <Link to={`/view/${props.id}`} className="col">
        <img src={props.cover} class="card-img-top" alt={props.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Title:</h5>
        <p className="card-text">{props.title}</p>
        <h5 className="card-title">
          Genres: <span className="badge bg-primary">{props.genres[0]}</span>
          <span className="badge bg-primary">{props.genres[1]}</span>
        </h5>
        <h5 className="card-title">
          Watched: <input onChange={watched} type="checkbox" />{" "}
        </h5>
      </div>
    </div>
  );
}
