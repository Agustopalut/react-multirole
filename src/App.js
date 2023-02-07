import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import User from "./pages/User";
import Product from "./pages/Product";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Product />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:uuid" element={<EditUser />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:uuid" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
