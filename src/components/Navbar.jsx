import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";

const Navbar = ({ countCart }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <h1 className="shop-tittle">Tareq Shop</h1>
        <div className="navbar-search">
          <>
            <AiOutlineSearch size="32px" cursor="pointer" />
          </>
          <input className="search-field" placeholder="here type..."></input>
          <p>All Category</p>
        </div>
        <div className="icons-container">
          <span className="icons-navbar">
            {" "}
            <BsFillPersonFill size="23px" cursor="pointer" />
          </span>
          <span className="icons-cart">
            <AiOutlineShoppingCart size="23px" cursor="pointer" />
            <span className="icon-count">{countCart}</span>
          </span>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="categories-list">
          <span className="categories-logo">
            <BiCategoryAlt size="20px" />
            <p>Categories</p>
            <h2>{">"}</h2>
          </span>
        </div>
        <div>
          <ul className="navbar-list">
            <li>Home</li>
            <li>Pages</li>
            <li>User Account</li>
            <li>Track My Order</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
