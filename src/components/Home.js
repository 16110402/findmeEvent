import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="w3-sidebar w3-dark-grey w3-bar-block"
        style={{ width: "25%" }}
      >
        <h3 className="w3-bar-item"><button type="button" style={{width:"300px"}} className="btn btn-danger btn-lg my-5 mx-5">Dashboard</button></h3>
      </div>
      <div style={{ marginLeft: "25%" }}>
        <div className="w3-container">
            <div style={{ marginLeft: "100px",marginTop: "100px"}}>
          <h1>Welcome Ravi</h1>
          <p>Lorem Ipsum is simply dummy text</p>
          </div>
        <div className="w3-container" style={{ marginLeft: "80px",marginTop: "100px"}}>
        <Link to="/event">
        <div style={{width:"180px", height:"130px"}} className="w3-card text-center border border-dark">
         
        <div className="container">
          <p><i style={{fontSize:"40px"}} className="bi bi-plus-circle"></i></p>
        <p style={{fontSize:"25px"}}>Add Event</p>
        </div>
        </div>
        </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
