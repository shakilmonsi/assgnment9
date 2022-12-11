import React from "react";
import "./HomePart.css";

const HomePart = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.reachcambridge.com/wp-content/uploads/2019/11/coding.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            very very important Quiz -- When to use iterative developments? You
            should use iterative can do this in any type of interview,......
          </h1>
          <p className="mb-5"></p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePart;
