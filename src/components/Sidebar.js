import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const Logout = () => {
    distpatch(logout());
    distpatch(reset());
    navigate("/");
  };

  return (
    <ul className="nav sidebar text-light flex-column">
      <p className="fw-bold">GENERAL</p>
      <li className="nav-item">
        <a className="nav-link">
          <h5
            className="text-light fs-5"
            onClick={() => navigate("/dashboard")}
          >
            <AiOutlineDashboard /> Dashboard
          </h5>
          <hr className="bg-light" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <h5 className="text-light fs-5" onClick={() => navigate("/products")}>
            <ImPriceTags /> Products
          </h5>
          <hr className="bg-light" />
        </a>
      </li>
      {user && user.role === "admin" ? (
        <div>
          <p className="fw-bold">ADMIN</p>
          <li className="nav-item">
            <a className="nav-link">
              <h5
                className="text-light fs-5"
                onClick={() => navigate("/users")}
              >
                <FiUsers /> Users
              </h5>
              <hr className="bg-light" />
            </a>
          </li>
        </div>
      ) : (
        ""
      )}
      <p className="fw-bold">Action</p>
      <li className="nav-item">
        <button onClick={Logout} className="btn btn-warning">
          Log out
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
