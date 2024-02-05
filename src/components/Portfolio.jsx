import React from "react";
import slickDress from "../assets/portfolio/slickDress.png";
import newsPortal from "../assets/portfolio/newsPortal.png";
import dadJokes from "../assets/portfolio/dadJokes.png";
import getCard from "../assets/portfolio/getACard.png";
import ticTac from "../assets/portfolio/ticTac.png";

export default function Portfolio() {
  return (
    <div>
      <main>
        <div>
          <p>Portfolio</p>
          <p>Check out some of work here.</p>
        </div>
        {/* ↓↓↓ cards  */}
        <section>
          <div>
            <img src={slickDress} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
