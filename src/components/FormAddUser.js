import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmpassword, setConfirm] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
        confirmpassword,
        role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h2>Product</h2>
      <p>ADD NEW USERS</p>
      <div className="bg-light w-100 h-auto p-3">
        <form onSubmit={addUser}>
          <p>{msg}</p>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="email address"
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
              placeholder="******"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="******"
              value={confirmpassword}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <label for="exampleInputPassword1" className="form-label">
            Role
          </label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option aria-readonly>Pilih Role : </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn btn-warning mt-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddUser;
