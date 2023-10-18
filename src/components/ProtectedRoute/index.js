import { Route, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  let navigate = useNavigate();
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    navigate("/login");
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
