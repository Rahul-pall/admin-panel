import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
const Product = () => {
  return (
    <div className="product-box">
      <div className="first-box">
        <div className="name">Product sell</div>
        <div className="right-side">
          <div className="input">
          
         <input type="text" placeholder="search" />
          </div>
          <div className="select">
            <span className="light-text">last 30 days</span>{" "}
            <select name="" id=""></select>
          </div>
        </div>
      </div>
      <div className="second-box">
        <div className="light-text">
          <div className="light-text">Product name</div>
        </div>
        <div className="second-right">
          <div className="light-text">stock</div>
          <div className="light-text">Price</div>
          <div className="light-text">Total Sales</div>
        </div>
      </div>
    <hr />
      <div className="third-box">
        <div className="img-hading">
          <div className="image">
            <img src="https://picsum.photos/id/237/80/50" alt="" />
          </div>
          <div className="third-hading"><p>Abstract 3d</p>
          <p className="light-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="third-right">
          <div className="light-text">32 in stock</div>
          <div className="light-text">$ 45.99</div>
          <div className="light-text">20 thousand</div>
        </div>
      </div>
      <div className="third-box">
        <div className="img-hading">
          <div className="image">
            <img src="https://picsum.photos/id/238/80/50" alt="" />
          </div>
          <div className="third-hading"><p>Sarphens illustration</p>
          <p className="light-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="third-right">
          <div className="light-text">32 in stock</div>
          <div className="light-text">$ 45.99</div>
          <div className="light-text">20 thousand</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
