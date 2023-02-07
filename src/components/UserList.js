import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const deleteUser = async (uuid) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${uuid}`
      );
      getUsers();
      setMsg(response.data.msg);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h2>Users</h2>
      <p>List of users</p>
      <Link to={"/users/add"} className="btn btn-warning mb-3">
        Add new User
      </Link>
      <p className="mb-3 mt-3">{msg}</p>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>no</th>
            <th>nama</th>
            <th>email</th>
            <th>role</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="btn btn-success"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
