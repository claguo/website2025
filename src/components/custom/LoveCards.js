import React from "react";
import LoveCard from "./LoveCard";

function LoveCards() {
  return (
    <div className="flex lg:flex-col flex items-center gap-xs lg:gap-0 overflow-x-scroll scrollbar-hide">
      <LoveCard
        src="https://images.claireguo.com/about/benny.png"
        text="Hanging out with Benny"
      />
      <LoveCard
        src="https://images.claireguo.com/about/grass.jpeg"
        text="Sitting in the grass"
      />
      <LoveCard
        src="https://images.claireguo.com/about/valorant.png"
        text="Trying to hit diamond in Valorant"
        imgClassName="max-w-[200px]"
      />
      <LoveCard
        src="https://images.claireguo.com/about/cereal.png"
        text="Eating cereal"
      />
      <LoveCard
        src="https://images.claireguo.com/about/debussy.jpg"
        text="Learning Debussy's Arabesques"
      />
      <LoveCard
        src="https://images.claireguo.com/about/marina.webp"
        text="Looking for Marina in Animal Crossing"
        imgClassName="max-w-[150px]"
      />
      <LoveCard
        src="https://images.claireguo.com/about/snow.jpg"
        text="Waiting for it to snow"
      />
      <LoveCard
        src="https://images.claireguo.com/about/out.webp"
        text="Reading OUT by Natsuo Kirino"
        imgClassName="max-w-[200px]"
      />
    </div>
  );
}

export default LoveCards;
