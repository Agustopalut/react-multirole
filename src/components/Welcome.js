import React from "react";
import { useSelector } from "react-redux";
const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h2>DASHBOARD</h2>
      <h5>
        Welcome back <strong>{user && user.name}</strong>
      </h5>
    </div>
  );
};

export default Welcome;
