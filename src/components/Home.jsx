import React from "react";
import heroImg from "../assets/heroImageBGBLUE.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Home.css";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  via-black to-gray-700"
    >
      <main className="max-w-screen-lg mx-auto flex flex-col gap-28 items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center sm:w-4/5 sm:h-[90] md:h-full md:w-full">
          {/*↑↑↑ or h-[90%] optimal mobile  w-[80] gives me optimal for mobile not for desktop*/}
          {/*flex flex-col justify-center h-full" gap add korte hobe*/}

          <h2 className="text-4xl sm:text-7xl font-bold text-white py-2">
            I'm a Web Developer & Designer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love building and designning softwares and web solutions.
            Currently, I love to work on web applications using technologies
            like React, Javascript and Tailwind.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 
              flex items-center rounded-md bg-gradient-to-r 
              from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="Developer's Profile"
            className="rounded-full mx-auto w-2/3 md:w-full img object-contain"
          />
        </div>
      </main>
    </div>
  );
}
