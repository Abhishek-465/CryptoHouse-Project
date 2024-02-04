import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/mainlogo-removebg-preview.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg  lg:flex items-center hidden 
     "
    >
      <img className="w-[80px] mr-1" src={logoSvg} alt="CryptoBucks" />
      <span className="">CryptoHouse</span>
    </Link>
  );
};

export default Logo;
