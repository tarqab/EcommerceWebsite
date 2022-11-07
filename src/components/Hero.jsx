import React, { useState } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { AiFillCar, AiFillHome, AiFillGift, AiFillHeart } from "react-icons/ai";
import {
  MdOutlineToys,
  MdFastfood,
  MdOutlineLocalDrink,
  MdTravelExplore,
} from "react-icons/md";
import { GiDelicatePerfume } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import ImagesSlider from "./ImagesSlider";
import slideData from "../slideData";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="sidebar">
          <ul>
            <li>
              <GrPersonalComputer size="25px" />
              <span>Electronic</span>
            </li>
            <li>
              <AiFillCar size="23px" />
              <span>Cars</span>
            </li>
            <li>
              <AiFillHome size="25px" />
              <span>Home & Garden</span>
            </li>
            <li>
              <AiFillGift size="25px" />
              <span>Gifts</span>
            </li>
            <li>
              <AiFillHeart size="25px" />
              <span>Health & Beauty</span>
            </li>
            <li>
              <MdOutlineToys size="25px" />
              <span>Baby Toys</span>
            </li>
            <li>
              <GiDelicatePerfume size="25px" />
              <span>perfumes</span>
            </li>
            <li>
              <ImBooks size="25px" />
              <span>Books</span>
            </li>
            <li>
              <MdFastfood size="25px" />
              <span>Food</span>
            </li>
            <li>
              <MdOutlineLocalDrink size="25px" />
              <span>Drinks</span>
            </li>
            <li>
              <MdTravelExplore size="25px" />
              <span>Travels</span>
            </li>
          </ul>
        </div>

        <div className="slide-sales">
          <div className="bg-slide">
            <ImagesSlider slides={slideData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
