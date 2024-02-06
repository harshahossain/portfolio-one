import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  function onHambarger() {
    setNav((prevState) => !prevState);
  }

  return (
    <div className="flex justify-between px-4 items-center bg-black w-full h-20 text-white fixed">
      <div>
        <h1 className="text-5xl select-none font-signature ml-2">Harsha</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium select-none text-gray-500 hover:scale-105 hover:text-gray-300 duration-200"
          >
            <Link to={link.link} smooth={true} duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>

      {/* config mobile ↓↓↓ */}
      <div
        onClick={onHambarger}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
      >
        {/* hambarger menu config ↓↓↓ */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* the actual list of nav elements ↓↓↓ */}
      {nav && (
        <ul
          className="flex flex-col justify-center absolute items-center  top-0 left-0 w-full h-screen
          bg-gradient-to-b from-black to-gray-700 text-gray-500"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="select-none px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={onHambarger}
                to={link.link}
                smooth={true}
                duration={500}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
