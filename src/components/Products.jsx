import React from "react";
import { Link } from "react-router-dom";

const Products = ({ updates }) => {
  return (
    <div className="dec">
      {updates.map((product, id) => (
        <div className="decs" key={id}>
          <img src={product.image} className="product--image" />
          <p className="">{product.name}</p>
          <p>
            <s>#{product.oldprice}</s>
          </p>
          <p>#{product.newprice}</p>
          <Link to={`/products/${product.id}`}>
            <p className="links">See more</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
