import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning text-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WELCOME | <b>INSTIKI BALI </b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav text-dark d-lg-none flex-column">
            <p className="fw-bold">GENERAL</p>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5 className="text-dark fs-5">
                  <AiOutlineDashboard /> Dashboard
                </h5>
                <hr className="bg-secondary" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5 className="text-dark fs-5">
                  <ImPriceTags /> Products
                </h5>
                <hr className="bg-light" />
              </a>
            </li>
            <p className="fw-bold">ADMIN</p>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5 className="text-dark fs-5">
                  <FiUsers /> Users
                </h5>
                <hr className="bg-light" />
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark w-100">Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
