import React, { useContext } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile">My Profile</Link>
        </li>,
        <li>
          <i
            className="material-icons" style={{ color: "white" }}
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              navigate("/signin");
            }}
          >
            power_settings_new
          </i>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/signin">Login</Link>
        </li>,
        <li>
          <Link to="/signup">Signup</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={state ? "/" : "signin"} className="brand-logo left">
        User Management
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}