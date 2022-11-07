import React from "react";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const navigate = useNavigate();
  // const data = props;
  const toProduct = () => {
    navigate("/product", { state: { tittle: props.tittle, img: props.img } });
  };

  return (
    <div className="card-products">
      <img
        onClick={() => {
          toProduct();
        }}
        className="photo-products"
        src={props.img}
        alt="product"
      ></img>
      <p className="tittle-products">{props.tittle}</p>
    </div>
  );
};

export default Products;
