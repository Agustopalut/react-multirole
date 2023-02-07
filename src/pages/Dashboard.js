import React, { useEffect } from "react";
import Layouts from "./Layouts";
import Welcome from "../components/Welcome";
import { getMe } from "../features/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { isError } = useSelector((state) => state.auth);
  const distpatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    distpatch(getMe());
  }, [distpatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
      //ini artiya dia belum login makanya error,dan dikembalikanke halaman login
    }
  }, [isError, navigate]);

  // alasan ada 2 useEffect adalah,function getme dijalankan dulu,baru divalidasi.
  return (
    <Layouts>
      <Welcome />
    </Layouts>
  );
};

export default Dashboard;
