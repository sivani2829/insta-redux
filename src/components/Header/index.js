import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav className="header-nav-container d-flex justify-content-between">
        <Link to="/home" className="w-50  ml-5 ">
          <div className="d-flex ml-5">
            <img
              className="header-logo-image mt-2 ml-5"
              src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1662634898/InstaShare/Insta_share_logo_pm2btx.png"
              alt="website logo"
            />
            <p className="header-title text-dark font-weight-bold mt-3 ml-3">
              Insta Share
            </p>
          </div>
        </Link>

        <ul className="nav-items-large-display d-flex justify-content-center list-unstyled p-3 mr-5">
          <li className="search-input-and-button-container d-flex m-2">
            <input
              className="search-input-field-header form-control"
              type="search"
              placeholder="Search Caption"
            />
            <button
              className="search-button-header-large border border-secondary rounded bg-light"
              type="button"
            >
              <FaSearch />
            </button>
          </li>
          <li className="m-2">
            <Link to="/home" className="options-header-large">
              <p className="text-dark font-weight-bold">Home</p>
            </Link>
          </li>
          <li className="m-2">
            <Link to="/my-profile" className="options-header-large">
              <p className="text-dark font-weight-bold">Profile</p>
            </Link>
          </li>
          <li className="m-1">
            <button
              type="button"
              className="logout-button-large-header btn btn-primary  "
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
