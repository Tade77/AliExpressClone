import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    axios("http://localhost:3001/products")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setUpdates(data);
      });
  }, []);
  return (
    <div className="dec">
      {updates.map((product) => (
        <div className="decs">
          <img src={product.image} className="product--image" />
          <p className="">{product.name}</p>
          <p>
            <s>#{product.oldprice}</s>
          </p>
          <p>#{product.newprice}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
