import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const head = () => {
  return (
    <>
      <section>
        <div className="container-head">
          <div className="left-row">
            <h3 className="telefone">
                <AiOutlinePhone size="25px" />
              <span className="tel-numb">+49 56565 65656</span>
            </h3>
            <p className="email-hardcode">
              <span className="email-logo">
                {" "}
                <AiOutlineMail color="white" size="22px" />
              </span>
              <span>tereq@test.com</span>
            </p>
          </div>
          <div className="right-row">
            <label className="label-right-row">FAQ</label>
            <label className="label-right-row">Support</label>
            <label className="label-right-row"> Language</label>
            <label className="label-right-row">Euro</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default head;
