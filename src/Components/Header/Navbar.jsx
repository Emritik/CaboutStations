/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth } from "../../AuthContext";
import logo from "./taxi-logo2.png";
const Header = ({ id }) => {
  const { user } = useAuth();

  let Links = [
    { name: "About", link: "#aboutus" },
    { name: "Contact", link: "#footer" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div id={id} className="z-30 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="flex items-center">
          <img src={logo} className=" ml-2 h-12 w-auto" alt="Yash Taxi Service Logo" />
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold hover:text-yellow-400 duration-500 ">
            Welcome {user ? user.name : "Guest"}
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-gray-800 hover:text-yellow-400 duration-500">
            <Link to="/">Home</Link>
          </li>
          
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-yellow-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          <li className="md:ml-8 md:my-0 my-7 font-semibold hover:text-yellow-400 duration-500">
            <LoginButton />
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold hover:text-yellow-400 duration-500">
            <LogoutButton />
          </li>
        </ul>

        {/* Welcome user in the middle on desktop */}
        {/* <div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-semibold text-gray-800 hover:text-yellow-400 duration-500">
          Welcome {user ? user.name : "Guest"}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
