import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import lock from "../../assets/lock.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/bx-window-close.svg";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const handleClick = () => settoggle(!toggle);

  return (
    <div className="w-full h-{80px} bg-white border-b">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto w-full h-full flex justify-between items-center ">
        <img src={logo} alt="logo" className="h-20 mr-3 " />
        <div className="hidden md:flex items-center  ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#9A092B] text-white font-bold">
            Sign up for free
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : menu} alt="" />
        </div>
      </div>

      <div className={toggle? "absolute z-10 p-4 bg-white w-full px-8 md:hidden": 'hidden'}>
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">Services</li>
          <li className="p-4 hover:bg-gray-100">About us</li>
          <li className="p-4 hover:bg-gray-100">Career</li>
          <div className="flex flex-col my-4 gap-4">
          <button className=" border border-[#9A092B]  flex justify-center items-center bg-transparent px-6 gap-2 py-4">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="px-8 py-5 rounded-md bg-[#9A092B] text-white font-bold">
            Sign up for free
          </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
