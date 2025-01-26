import React from "react";
import LoveCard from "./LoveCard";
import cereal from "../../assets/imgs/love/lovecereal.png";
import marina from "../../assets/imgs/love/lovemarina.webp";
import grass from "../../assets/imgs/love/lovegrass.jpeg";
import out from "../../assets/imgs/love/loveout.webp";
import debussy from "../../assets/imgs/love/lovedebussy.jpg";
import val from "../../assets/imgs/love/loveval.PNG";
import snow from "../../assets/imgs/love/lovesnow.JPG";

function LoveCards() {
  return (
    <div className="flex flex-col">
      <LoveCard src={grass} text="Sitting in the grass" />
      <LoveCard src={val} text="Trying to hit diamond in Valorant" />
      <LoveCard src={cereal} text="Eating cereal" />
      <LoveCard src={debussy} text="Learning Debussy's Arabesques" />
      <LoveCard src={marina} text="Looking for Marina in Animal Crossing" />
      <LoveCard src={snow} text="Waiting for it to snow" />
      <LoveCard src={out} text="Reading OUT by Natsuo Kirino" />
    </div>
  );
}

export default LoveCards;
