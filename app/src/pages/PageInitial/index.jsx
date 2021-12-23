import React from "react";
import { Link } from "react-router-dom";

export default function PageInitial() {
  return (
    <main>
      <h1>
        If <Link to="/register">registered</Link>, <Link to="login">login</Link>{" "}
        to have access to all our content
      </h1>
    </main>
  );
}
