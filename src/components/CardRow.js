import React from "react";

// **pass in cardData array in parent component:
//<CardRow cards={cardData} />
//
// const cardData = [
//   {
//     title: "Incentivize",
//     content: "the implementation of web accessibility by transforming it from a chore to a fun and engaging experience."
//   },
//   {
//     title: "Enable",
//     content: "web developers to implement web accessibility."
//   },
// ];

function CardRow({ cards }) {
  return (
    <div className="flex justify-between w-full gap-[1rem]">
      {cards.map((card, index) => (
        <div key={index} className="bg-bg-body flex-1 p-[1rem] lg:p-[1.5rem] rounded-[0.5rem]">
          <h3 className="font-bold">{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CardRow;