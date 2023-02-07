import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getproducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Product List</h2>
      <p>List of Product</p>
      <Link to="/products/add" className="btn btn-warning mb-3">
        Add new product
      </Link>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>no</th>
            <th>product name</th>
            <th>price</th>
            <th>created by</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="btn btn-success"
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger "
                  onClick={() => deleteProduct(product.uuid)}
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

export default ProductList;
