import React from "react";
import Section from "../general/Section";

function ETODesign() {
  return (
    <Section tagText="Research" project="eto">
      <div className="bg-bg-gray border-[1px] border-border-default rounded-md px-lg py-md lg:px-4xl lg:py-xl w-full flex justify-center">
        <img
          src="https://images.claireguo.com/eto/demo.gif"
          alt=""
          className="max-w-[280px] border-[1px] border-border-default rounded-[32px]"
        />
      </div>

      <p className="text-md text-center">
        Eat the Ocean is a recipe app designed to reduce bycatch waste by{" "}
        <span className="font-medium text-text-eto">
          diversifying consumer diet
        </span>
        , creating new demand for underappreciated seafood.
      </p>

      <div className="flex flex-col lg:flex-row gap-xs lg:gap-md items-center">
        <p className="text-center lg:text-left">
          Eat the Ocean seeks to create a world in which fish are consumed{" "}
          <span className="font-medium text-text-eto">in proportion</span> to
          their natural stocks.
        </p>
        <img
          src="https://images.claireguo.com/eto/feature_fish.gif"
          alt="Gif of ETO's Fish page. A list of fish images. Tapping on a fish takes you to a page with more information about the fish."
          className="max-w-[280px] border-[1px] border-border-default rounded-[24px] mx-sm"
        />
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-sm lg:gap-md items-center">
        <p className="text-center lg:text-left">
          Eating underutilized bycatch{" "}
          <span className="font-medium text-text-eto">relieves pressure</span>{" "}
          on more popular, overfished species.
        </p>
        <img
          src="https://images.claireguo.com/eto/feature_eat.png"
          alt="Screenshot of Eat the Ocean's recipe page. A recipe for a Tamari Marinated Butterfish Over Tangy Noodles."
          className="max-w-[280px] border-[1px] border-border-default rounded-[24px] mx-sm"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-xs lg:gap-md items-center">
        <p className="text-center lg:text-left">
          Eat the ocean gives consumers the{" "}
          <span className="font-medium text-text-eto">resources</span> to do so.
        </p>
        <img
          src="https://images.claireguo.com/eto/feature_resource.png"
          alt="Screenshot of Eat the Ocean's recipe page, scrolled down a little. Shows list of ingredients and instructions for recipe."
          className="max-w-[280px] border-[1px] border-border-default rounded-[24px] mx-sm"
        />
      </div>
    </Section>
  );
}

export default ETODesign;
