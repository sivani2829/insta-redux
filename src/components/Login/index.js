import React, { useEffect, useState } from "react";
import { LoginUserApi } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let stateData = useSelector((state) => state);
  console.log("state-data", stateData);

  const navigateThrough = () => {
    if (stateData.jwtToken !== undefined) {
      return navigate("/home");
    }
  };
  useEffect(() => {
    navigateThrough();
  }, [username]);

  const dataSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUserApi({ username: username, password: password }));
    if (stateData.jwtToken !== undefined) {
      Cookies.set("jwt_token", stateData.jwtToken, {
        expires: 30,
        path: "/",
      });
      // history.replace("/");
      // return <Navigate to="/" />;
      navigate("/home");
    }
  };

  return (
    <div className="d-flex  flex-column justify-content-center align-items-center p-5 mt-5">
      <div className="d-flex justify-content-center">
        <img
          src="https://res.cloudinary.com/dmdr9a99a/image/upload/v1684764945/Layer_2_jvmufv.png"
          alt="website login"
          className="w-50 m-1"
        />
        <div className="d-flex justify-content-center flex-column align-items-center shadow bg-light rounded  p-4 m-2 ml-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://res.cloudinary.com/dmdr9a99a/image/upload/v1684765366/Standard_Collection_8_pzz6kt.png"
              className="w-50"
              alt="website logo"
            />
            <h1 className="text-dark">Insta Share</h1>
          </div>
          <form onSubmit={dataSubmit} className="d-flex flex-column">
            <label htmlFor="user" className="text-secondary m-1">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              className="form-control m-1"
              required
            />
            <label htmlFor="password" className="text-secondary m-1">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control m-1"
              required
            />
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
            {stateData.errorMsg && (
              <p className="text-danger p-2">{stateData.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
