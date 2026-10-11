"use client";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[250px] bg-white justify-around shadow-md px-4 text-black border border-r border-gray-300 pb-[20vh]">
      <div className="mb-4 flex flex-col justify-center items-center ">
        <img
          src="../images/logo.png"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="mt-3 text-2xl font-bold">Own Your Tune</p>
      </div>

      <div className="flex flex-col gap-[10px] ">
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/compass.png"
          text="Explore"
          navtext="explore"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/buy.png"
          text="Purchased Songs"
          navtext="purchases"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/plus.png"
          text="WishList"
          navtext="wishlist"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Published Songs"
          navtext="publishes"
        />
      </div>

      <div className="flex justify-center gap-5 ">
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/like.png"
          trailingMenu={true}
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/download.png"
          trailingMenu={true}
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/time.png"
          trailingMenu={true}
        />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, navtext, trailingMenu }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Link
      to={`/${navtext}`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div
        className={`flex items-center gap-[15px] menu-item px-5 py-3 rounded-md cursor-pointer shadow-sm border-gray-300 border ${
          onHover ? "border-gray-500 translate-y-[-5px] duration-100 " : ""
        } 
        ${trailingMenu ? "px-3 py-3" : ""}
        `}
      >
        <img src={icon} alt={text} className="w-[17px] h-[17px]" />
        {!trailingMenu && <p className="text-base">{text}</p>}
      </div>
    </Link>
  );
};

export default Navbar;
