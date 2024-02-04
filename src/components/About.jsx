import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-8 sm:pb-0">
          <p className="text-4xl font-bold inline border-b-2 pb-1 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl text-gray-200 mt-10">
          {/*mt-20  */}
          Hello, I'm Harsha short for Harshapratham. Back in 2022, after
          graduating, I made the decision to develop software and experiment
          with it, which sent me down a rabbit hole into web development and
          coding. I currently enjoy creating and designing web products that
          make ideas come reality.
        </p>
        <br />
        <p className="text-xl text-gray-200">
          My main focus these days is building products and undertaking project
          for new & old businesses alike. Building software that is both
          aesthetically pleasing and well-engineered on the inside is what I
          enjoy doing the most. <br />
          Currently, I love working on web applications using technologiers like
          React, Javascript & Tailwind.
        </p>
        <br />
        <p className="text-xl text-gray-200">
          In my spare time, I like researching new technologies and applying
          them to my side projects. When I'm not using a computer, I enjoy
          hanging out with friends, playing video games, reading, playing the
          guitar, and spending time with my cat.
        </p>
      </div>
    </div>
  );
}
