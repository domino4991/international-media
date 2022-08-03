import React from "react";
import "../Modal/modal.css";
import Logo1 from "../Image/logo1.png";

function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex__flex">
        <div className="div__div__img">
          <img src={Logo1} alt="" className="img__img" />
        </div>
        <div className="div__div">
          <p className="p__p">
            leave a request and we will definitely contact you
          </p>
          <div className="div__label__item">
<form action="">
            <div className="div__label">
              <h1 className="label">Name</h1>
              <input type="text" placeholder="Enter your name" className="input"/>
            </div>
            <div className="div__label">
              <h1 className="label">Enter your e-mail</h1>
              <input type="text" placeholder="Enter e-mail adress" className="input"/>
            </div>
</form>
          </div>
        </div>
        <div className="btn__blue__flex">
        <button className="btn__blue">leave a request</button></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
