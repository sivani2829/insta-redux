import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
