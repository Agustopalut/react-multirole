import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const addproduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name,
        price,
      });
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Product</h2>
      <p>ADD NEW PRODUCT</p>
      <div className="bg-light w-100 h-auto p-3">
        <form onSubmit={addproduct}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="product name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning mt-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddProduct;
