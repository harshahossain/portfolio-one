import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import gitHub from "../assets/github.png";
import mongo from "../assets/mongoBG.png";
import reactJs from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";

export default function Experience() {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javaScript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactJs, title: "React", style: "shadow-blue-700" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: nodejs, title: "NodeJS", style: "shadow-green-300" },
    { id: 7, src: gitHub, title: "GitHub", style: "shadow-gray-400" },
    { id: 8, src: mongo, title: "MongoDB", style: "shadow-green-500" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-700 to-black w-full h-screen"
    >
      <section className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-2 p-2 inline border-gray-500">
            Experience
          </p>
          <p className="py-6 text-gray-200">
            These are the technologies I've worked with
          </p>
        </div>
        {/* card sectin */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {/* loopign here↓↓↓ after grid↑↑↑*/}
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
