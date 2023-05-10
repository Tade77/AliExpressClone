import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = ({ setOpenModal, openModal }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          color: "tomato",
          marginLeft: "30px",
          paddingTop: "20px",
        }}
      >
        Sign Up
      </h1>
      <div className="form">
        <label>
          Full Name:
          <input type="text" name="" id="inputs" />
        </label>
        <label>
          Email:
          <input type="text" name="" id="inputs" />
        </label>
        <label>
          Phone Number:
          <input type="text" name="" id="inputs" />
        </label>
        <label>
          Password:
          <input type="text" name="" id="inputs" />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="" id="inputs" />
        </label>
      </div>
      <div className="btns">
        <button onClick={() => setOpenModal(false)} className="cancel">
          Cancel
        </button>
        <button className="submit">Submit</button>
      </div>
      <div style={{ fontSize: "15px", margin: "5px 30px" }}>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/sign-in")}
            style={{ fontSize: "15px", color: "blue", cursor: "pointer" }}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
