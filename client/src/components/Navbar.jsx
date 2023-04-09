import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo-test.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=cat1">
            <h6>CAT1</h6>
          </Link>
          <Link className="link" to="/?cat=cat2">
            <h6>CAT2</h6>
          </Link>
          <Link className="link" to="/?cat=cat3">
            <h6>CAT3</h6>
          </Link>
          <Link className="link" to="/?cat=cat4">
            <h6>CAT4</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser?.username ? (
            <span onClick={logout}>Logout</span>
            // <span onClick={() => {
            //   logout()
            //   location.href = '/login'
            // }}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar