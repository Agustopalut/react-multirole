import React, { useState, useEffect } from "react";
import cartoon from "../assets/cartoon.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../features/AuthSlice.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }

    distpatch(reset()); //mereset state nya
  }, [user, isSuccess, distpatch, navigate]);

  const auth = async (e) => {
    e.preventDefault();
    distpatch(loginUser({ email, password }));
  };

  return (
    <div className="box-container">
      <div className="box">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-none d-lg-block d-md-block col-0">
            <img src={cartoon} className="w-100" />
          </div>
          <div className="col-lg-6 align-items-center form col-md-6 col-12">
            <form onSubmit={auth}>
              {isError && <p>{message}</p>}
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-warning">
                {isLoading ? (
                  <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
