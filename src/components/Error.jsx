import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "64px" }}>404 | Error</h1>
      <p style={{ fontSize: "18px" }}>Ooops, an error occurred</p>
      <Link to={"/"}>
        <button
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "5px 20px",
          }}
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
