"use client";
import React from "react";

const NavbarComponent = () => {
  const items = Array.from({ length: 10 }); // Adjust the length based on your content and screen size

  return (
    <div
      className="overflow-hidden sticky top-0 md:h-screen bg-aquagreen"
      style={{ height: "100vh" }}
    >
      <div
        className="flex flex-col gap-1 justify-center items-center"
        style={{
          animation: "smoothScroll 10s linear infinite",
          height: "200%", // Double the container height for a seamless loop
        }}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="border bg-black bg-opacity-80 text-aquagreen text-5xl h-1/5 w-5/6 m-3 flex text-center justify-center items-center border-black"
          >
            NFT
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes smoothScroll {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default NavbarComponent;
