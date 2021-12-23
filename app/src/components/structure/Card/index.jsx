import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card text-white bg-dark mb-3">
      <Link to={`/view/${props.id}`} className="col">
        <img src={props.cover} class="card-img-top" alt={props.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Title:</h5>
        <p className="card-text">{props.title}</p>
        <h5 className="card-title">
          Prioridade:{" "}
          <span className="badge bg-primary">{props.genres[0]}</span>
          <span className="badge bg-primary">{props.genres[1]}</span>
        </h5>
      </div>
    </div>
  );
}
