import Layouts from "./Layouts";
import ProductList from "../components/ProductList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
const Product = () => {
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
      <ProductList />
    </Layouts>
  );
};

export default Product;
