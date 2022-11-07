import React from "react";
import Products from "./Products";
import productData from "../productData";
const Body = () => {
  const products = productData.map((item) => {
    return <Products id={item.id} tittle={item.tittle} img={item.img} />;
  });

  return (
    <div className="body-main">
      <div className="sec-subtittle">
        <div className="subtittle">
          <h1 className="subtittle-tittle"> Our Products </h1>
          <img
            className="subtittle-img"
            src={require("../assets/box.png")}
            alt="box"
          ></img>
        </div>
      </div>
      <div className="product-container">{products}</div>
      <div className="sec-subtittle">
        <div className="subtittle">
          <h1 className="subtittle-tittle"> Our Services </h1>
          <img
            className="subtittle-img"
            src={require("../assets/customer.png")}
            alt="box"
          ></img>
        </div>
      </div>
      <div className="services-container">
        <ul>
          <div className="blabla">
            <li>
              Delivery{" "}
              <img
                src={require("../assets/delivery-truck.png")}
                alt="delivery"
                style={{ width: "45px" }}
              ></img>
            </li>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              natus, autem debitis quia laborum asperiores libero fugiat ipsam
              distinctio eos iste obcaecati in perspiciatis et at, quam qui
              voluptate enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maiores, natus, autem debitis quia laborum asperiores libero
              fugiat ipsam distinctio eos iste obcaecati in perspiciatis et at,
              quam qui voluptate enim.
            </p>
          </div>
          <div className="blabla">
            <li>
              Refund{" "}
              <img
                src={require("../assets/refund.png")}
                alt="Refund"
                style={{ width: "45px"  }}
              ></img>
            </li>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              natus, autem debitis quia laborum asperiores libero fugiat ipsam
              distinctio eos iste obcaecati in perspiciatis et at, quam qui
              voluptate enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maiores, natus, autem debitis quia laborum asperiores libero
              fugiat ipsam distinctio eos iste obcaecati in perspiciatis et at,
              quam qui voluptate enim.
            </p>
          </div>
          <div className="blabla">
            <li>
              Tracking{" "}
              <img
                src={require("../assets/tracking.png")}
                alt="tracking"
                style={{ width: "43px" }}
              ></img>
            </li>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              natus, autem debitis quia laborum asperiores libero fugiat ipsam
              distinctio eos iste obcaecati in perspiciatis et at, quam qui
              voluptate enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maiores, natus, autem debitis quia laborum asperiores libero
              fugiat ipsam distinctio eos iste obcaecati in perspiciatis et at,
              quam qui voluptate enim.
            </p>
          </div>
          <div className="blabla">
            <li>
              Jobs{" "}
              <img
                src={require("../assets/job-search.png")}
                alt="Jobs"
                style={{ width: "43px" }}
              ></img>
            </li>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              natus, autem debitis quia laborum asperiores libero fugiat ipsam
              distinctio eos iste obcaecati in perspiciatis et at, quam qui
              voluptate enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maiores, natus, autem debitis quia laborum asperiores libero
              fugiat ipsam distinctio eos iste obcaecati in perspiciatis et at,
              quam qui voluptate enim.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Body;
