import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/AuthSlice";
import Layouts from "./Layouts";
import FormAddUser from "../components/FormAddUser";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { isError, user } = useSelector((state) => state.auth);
  const distpatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    distpatch(getMe());
  }, [distpatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
      // jika ada data user,dan data user role bukan sebagai admin
      // jika yang login bukan admin,maka dia akan kembali ke dashboard atau tidak bisa mengakses data user
    }
  }, [isError, navigate]);
  return (
    <Layouts>
      <FormAddUser />
    </Layouts>
  );
};

export default AddUser;
