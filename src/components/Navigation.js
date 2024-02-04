import React from "react";
import { NavLink } from "react-router-dom";
import { FaBitcoin, FaArrowUp, FaRegNewspaper, FaComments, FaBookmark } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Navigation = () => {
  const iconSize = "2.5rem"; // Set the desired icon size

  return (
    <nav className="w-full lg:w-[50%] mt-16 flex justify-around items-center lg:border lg:border-pink rounded-lg">
      <NavLink
        to="/"
        className={({ isActive }) => `w-[60px] h-[60px] flex items-center justify-center text-gray-100 m-2.5
          ${
            isActive
              ? " text-white lg:text-gray-300 rounded-full hover:rounded-full hover:text-gray-100 lg:hover:text-white"
              : "lg:bg-gray-200 lg:text-gray-100 text-white hover:text-gray-100  rounded-full"
          }
          border-0 cursor-pointer`
        }
      >
        <div className="w-[50px] h-[50px] text-gray-100 rounded-full flex justify-center hover:text-white bg-gray-200 overflow-hidden">
          <BsCurrencyBitcoin size={"2.7rem"} />
        </div>
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => `w-[60px] h-[60px] flex items-center justify-center text-gray-100 m-2.5
          ${
            isActive
              ? "lg:bg-pink text-white lg:text-gray-300 rounded-full hover:rounded-full hover:text-gray-100 lg:hover:text-white"
              : "lg:bg-gray-200 lg:text-gray-100 text-white hover:text-gray-100 hover:rounded-full active:bg-cyan active:text-gray-300 rounded-full"
          }
          border-0 cursor-pointer`
        }
      >
        <div className="w-[50px] h-[50px] rounded-full flex justify-center bg-gray-200 overflow-hidden  hover:text-white">
          <FaArrowUp size={iconSize} />
        </div>
      </NavLink>

      <NavLink
        to="/article"
        className={({ isActive }) => `w-[60px] h-[60px] flex items-center justify-center text-gray-100 m-2.5
          ${
            isActive
              ? "lg:bg-pink text-white lg:text-gray-300 rounded-full hover:rounded-full hover:text-gray-100 lg:hover:text-white"
              : "lg:bg-gray-200 lg:text-gray-100 text-white hover:text-gray-100 hover:rounded-full active:bg-cyan active:text-gray-300 rounded-full"
          }
          border-0 cursor-pointer`
        }
      >
        <div className="w-[50px] h-[50px] rounded-full flex justify-center bg-gray-200 overflow-hidden  hover:text-white">
          <FaRegNewspaper size={iconSize} />
        </div>
      </NavLink>

      <NavLink
        to="/forum"
        className={({ isActive }) => `w-[60px] h-[60px] flex items-center justify-center text-gray-100 m-2.5
          ${
            isActive
              ? "lg:bg-pink text-white lg:text-gray-300 rounded-full hover:rounded-full hover:text-gray-100 lg:hover:text-white"
              : "lg:bg-gray-200 lg:text-gray-100 text-white hover:text-gray-100 hover:rounded-full active:bg-cyan active:text-gray-300 rounded-full"
          }
          border-0 cursor-pointer`
        }
      >
        <div className="w-[50px] h-[50px] rounded-full flex justify-center bg-gray-200 overflow-hidden  hover:text-white">
          <FaComments size={iconSize} />
        </div>
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => `w-[60px] h-[60px] flex items-center justify-center text-gray-100 m-2.5 hover:text-white
          ${
            isActive
              ? "lg:bg-pink text-white lg:text-gray-300 rounded-full hover:rounded-full hover:text-gray-100 "
              : "lg:bg-gray-200 lg:text-gray-100 text-white hover:text-gray-100 hover:rounded-full active:bg-cyan active:text-gray-300 rounded-full"
          }
          border-0 cursor-pointer`
        }
      >
        <div className="w-[50px] h-[50px] rounded-full flex justify-center bg-gray-200 overflow-hidden">
          <FaBookmark size={iconSize} />
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;

