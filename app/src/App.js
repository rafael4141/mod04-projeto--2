import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import View from "./pages/View";
import PageInitial from "./pages/PageInitial";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/film/:id" element={<View />} />
        <Route path="/" element={<PageInitial />} />
      </Routes>
    </BrowserRouter>
  );
}
