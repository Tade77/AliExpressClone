import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <aside className="info">
        <div>
          <h1>This is an Official customer Page of AliExpress</h1>

          <p>
            You are receiving this mail because you have recently order for a
            product. Please click the button below:
          </p>
        </div>
        <div>
          <Link to="/products">
            <button className="link">Go to products</button>
          </Link>
        </div>
      </aside>
    </div>
  );
};
export default HomePage;
