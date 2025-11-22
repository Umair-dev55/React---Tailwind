import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-pink-500">
        <ul className=" text-white flex justify-center  p-4 *:p-4 *:hover:bg-pink-400">
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
