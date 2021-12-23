import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, birthdate, password, passwordConfirmation, imageUrl } =
      event.target;
    const data = {
      name: name.value,
      email: email.value,
      birthdate: birthdate.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
      imageUrl: imageUrl.value,
    };
    if (password.value !== passwordConfirmation.value) {
      alert("As senhas não são iguais.");
    } else {
      await axios.post("user/create", data).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <>
      <main className="container-fluid">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              minlength="3"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">
              Birth Date:
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Your password"
              minlength="8"
              maxlength="30"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordConfirmation" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              className="form-control"
              placeholder="Password Confirmation"
              minlength="8"
              maxlength="30"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Image URL:
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="form-control"
              placeholder="Your Image"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
