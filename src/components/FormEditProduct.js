import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const { uuid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${uuid}`
        );
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, []);

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${uuid}`, {
        name,
        price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h2>Product</h2>
      <p>UPDATE PRODUCT</p>
      <div className="bg-light w-100 h-auto p-3">
        <form onSubmit={editProduct}>
          <p>{msg}</p>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEditProduct;
