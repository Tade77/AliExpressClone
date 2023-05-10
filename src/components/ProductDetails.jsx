import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ updates }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { productsId } = useParams();

  useEffect(() => {
    const singleDetails = updates.find(
      (product) => product.id === parseInt(productsId)
    );
    setName(singleDetails.name);
    setDescription(singleDetails.description);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <span>{description}</span>
    </div>
  );
};

export default ProductDetails;
