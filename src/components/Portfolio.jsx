import React from "react";
import slickDress from "../assets/portfolio/slickDress.png";
import newsPortal from "../assets/portfolio/newsPortal.png";
import dadJokes from "../assets/portfolio/dadJokes.png";
import getCard from "../assets/portfolio/getACard.png";
import ticTac from "../assets/portfolio/ticTac.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: slickDress,
      alt: "Clothing Brand Website",
      demo: "https://slickdress.netlify.app",
      code: "https://github.com/harshahossain/slick-dress.git",
    },
    {
      id: 2,
      src: newsPortal,
      alt: "News Portal Website",
      demo: "",
      code: "https://github.com/harshahossain/news-portal.git",
    },
    {
      id: 3,
      src: dadJokes,
      alt: "Dad Jokes Website",
      demo: "https://harshahossain.github.io/Dad-Jokes/",
      code: "https://github.com/harshahossain/Dad-Jokes.git",
    },
    {
      id: 4,
      src: getCard,
      alt: "Deck of Cards",
      demo: "https://harshahossain.github.io/deck-of-cards/",
      code: "https://github.com/harshahossain/deck-of-cards.git",
    },
    {
      id: 5,
      src: ticTac,
      alt: "Tic Tac Toe Game",
      demo: "",
      code: "https://github.com/harshahossain/tic-tac-toe.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-700
    w-full text-white md:h-screen"
    >
      <main
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-2
          border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6 text-gray-200">Check out some of my work here.</p>
        </div>
        {/* ↓↓↓ cards  */}

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md hover:scale-105
             duration-200"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 pl-16 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
