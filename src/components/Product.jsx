import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavbarAndHead from "./NavbarAndHead";

const Product = () => {
  const [counter, setCounter] = useState(0);
  const productCounter = () => {
    setCounter((count) => count + 1);
    return counter;
  };
  console.log(counter);

  const location = useLocation();
  return (
    <div className="product-main-main">
      <NavbarAndHead count={counter} />
      <div className="product-main">
        <div className="card-product">
          <img
            className="photo-product"
            src={location.state.img}
            alt="product"
          ></img>
          <button className="add-to-cart" onClick={productCounter}>
            {" "}
            Add to cart
          </button>

          <p className="tittle-product">{location.state.tittle}</p>
          <span className="disc"> Discription : </span>
          <label>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            animi cum quisquam at placeat earum voluptatem dolorum quam iure
            perspiciatis adipisci quod amet, dolor quo vel! Amet provident
            soluta doloribus.
          </label>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
