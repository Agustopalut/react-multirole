import React from "react";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";

const Layouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row no-suggest" style={{ minHeight: "100vh" }}>
        <div className="col-lg-2 col-0 d-none d-lg-block d-md-none  col-md-0 bg-dark p-4">
          {<Sidebar />}
        </div>
        <div className="col-lg-10 main-content col-md-12 col-12">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layouts;
