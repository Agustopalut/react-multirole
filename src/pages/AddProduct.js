import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/AuthSlice";
import Layouts from "./Layouts";
import FormAddProduct from "../components/FormAddProduct";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { isError } = useSelector((state) => state.auth);
  const distpatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    distpatch(getMe());
  }, [distpatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layouts>
      <FormAddProduct />
    </Layouts>
  );
};

export default AddProduct;
