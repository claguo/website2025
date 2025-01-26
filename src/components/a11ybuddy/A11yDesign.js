import React from "react";
import Section from "../general/Section";
import Carousel from "../general/Carousel";
import HorizontalSection from "../general/HorizontalSection";

import carousel1 from "../../assets/imgs/a11ybuddy/carousel 1.png";
import carousel2 from "../../assets/imgs/a11ybuddy/carousel 2.png";
import carousel3 from "../../assets/imgs/a11ybuddy/carousel 3.png";
import carousel4 from "../../assets/imgs/a11ybuddy/carousel 4.png";
import carousel5 from "../../assets/imgs/a11ybuddy/carousel 5.png";
import feature1 from "../../assets/imgs/a11ybuddy/feature1.png";
import feature2 from "../../assets/imgs/a11ybuddy/feature2.png";
import feature3 from "../../assets/imgs/a11ybuddy/feature3.png";
import feature4 from "../../assets/imgs/a11ybuddy/feature4.png";

import demo from "../../assets/imgs/a11ybuddy/demo.gif";

function A11ySolution() {
  const carouselItems = [
    {
      src: carousel1,
      alt: "A11y buddy in egg state",
      description:
        "After installing the extension, open an HTML file to begin.",
    },
    {
      src: carousel2,
      alt: "A11y buddy egg at 60% progress",
      description:
        "While there are no accessibility errors in your file, your egg will begin to hatch.",
    },
    {
      src: carousel3,
      alt: "A11y buddy egg with progress paused due to alt text error",
      description:
        "If an accessibility error is detected, your buddy will stop growing. The line with the error will be highlighted.",
    },
    {
      src: carousel4,
      alt: "Error fixed, and progress at 90%",
      description: "Fix the accessibility error to continue hatching your egg.",
    },
    {
      src: carousel5,
      alt: "Pink Mist Bear A11y buddy hatched",
      description:
        "After enough time has passed, your egg will hatch into a randomly colored bear, fish, cat, duck, or dog.",
    },
  ];

  return (
    <Section tagText="Design" project="a11y">
      <img
        src={demo}
        alt="Demo gif. Add alt text to img tag, save file, see egg hatch, then press 'get new egg'"
        className="rounded-[12px] lg:rounded-[16px]"
      />
      <p className="text-md text-center mx-xs lg:mx-2xl">
        A11y Buddy is a pet-raising simulation built as a{" "}
        <span className="font-medium text-text-a11y">VSCode extension</span>{" "}
        that makes implementing web accessibility{" "}
        <span className="font-medium text-text-a11y">
          engaging and rewarding
        </span>
        .
      </p>

      <div className="flex flex-col gap-2xl lg:gap-4xl">
        <Carousel title="How it works" items={carouselItems} />

        <HorizontalSection
          src={feature1}
          alt="Wild lime rabbit, bleached apricot fish, butterscotch bear, love potion dog, ashes of roses duck, fragrant lilac cat, hyacinth bear, aqua sea dog, jade cream fish"
          title="Collectible buddies"
          description="A11y Buddies grown are colored and named from a list 2,310 Pantone color names. Collect them all! These are some of my favorites."
        />
        <HorizontalSection
          src={feature2}
          alt="Egg SVG has alt text: 'Your egg, getting ready to hatch from inside its cozy egg!'"
          title="Narrative alt text"
          description="We've included exciting alt text for all images and SVGs in our extension. This ensures that A11y Buddy itself is fully accessible."
        />
        <HorizontalSection
          src={feature3}
          alt="Mockup of form label error."
          title="Coming soon:"
          description="More accessibility tests!"
        />
        <HorizontalSection
          src={feature4}
          alt="Mockup of list of all collected buddies."
          title="Coming soon:"
          description="A buddy archive to store and collect grown A11y Buddies."
        />
      </div>
    </Section>
  );
}

export default A11ySolution;
