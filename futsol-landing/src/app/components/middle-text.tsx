"use client";
import React from "react";

const MiddleText = () => {
  return (
    <h1
      className="text-[#160023]   cursor-default flex flex-col text-center pt-16 text-4xl md:text-6xl z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transition: "0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.textShadow =
          "0 0 8px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.8), 0 0 14px rgba(255,255,255,0.8)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.textShadow = "";
      }}
    >
      We will be here{" "}
      <span
        className="uppercase text-5xl md:text-7xl"
        style={{ transition: "transform 0.3s ease-in-out" }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        soon
      </span>
    </h1>
  );
};

export default MiddleText;
