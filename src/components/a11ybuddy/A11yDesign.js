import React from "react";
import Section from "../general/Section";
import Carousel from "../general/Carousel";
import HorizontalSection from "../general/HorizontalSection";

function A11ySolution() {
  const carouselItems = [
    {
      src: "https://images.claireguo.com/a11y/carousel_1.png",
      alt: "A11y buddy in egg state",
      description:
        "After installing the extension, open an HTML file to begin.",
    },
    {
      src: "https://images.claireguo.com/a11y/carousel_2.png",
      alt: "A11y buddy egg at 60% progress",
      description:
        "While there are no accessibility errors in your file, your egg will begin to hatch.",
    },
    {
      src: "https://images.claireguo.com/a11y/carousel_3.png",
      alt: "A11y buddy egg with progress paused due to alt text error",
      description:
        "If an accessibility error is detected, your buddy will stop growing. The line with the error will be highlighted.",
    },
    {
      src: "https://images.claireguo.com/a11y/carousel_4.png",
      alt: "Error fixed, and progress at 90%",
      description: "Fix the accessibility error to continue hatching your egg.",
    },
    {
      src: "https://images.claireguo.com/a11y/carousel_5.png",
      alt: "Pink Mist Bear A11y buddy hatched",
      description:
        "After enough time has passed, your egg will hatch into a randomly colored bear, fish, cat, duck, or dog.",
    },
  ];

  return (
    <Section tagText="Design" project="a11y">
      <img
        src="https://images.claireguo.com/a11y/demo.gif"
        alt="Demo gif. Add alt text to img tag, save file, see egg hatch, then press 'get new egg'"
        className="rounded-[4px]"
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
          src="https://images.claireguo.com/a11y/feature_1.png"
          alt="Wild lime rabbit, bleached apricot fish, butterscotch bear, love potion dog, ashes of roses duck, fragrant lilac cat, hyacinth bear, aqua sea dog, jade cream fish"
          title="Collectible buddies"
          description="A11y Buddies grown are colored and named from a list 2,310 Pantone color names. Collect them all! These are some of my favorites."
        />
        <HorizontalSection
          src="https://images.claireguo.com/a11y/feature_2.png"
          alt="Egg SVG has alt text: 'Your egg, getting ready to hatch from inside its cozy egg!'"
          title="Narrative alt text"
          description="We've included exciting alt text for all images and SVGs in our extension. This ensures that A11y Buddy itself is fully accessible."
        />
        <HorizontalSection
          src="https://images.claireguo.com/a11y/feature_3.png"
          alt="Mockup of form label error."
          title="Coming soon:"
          description="More accessibility tests!"
        />
        <HorizontalSection
          src="https://images.claireguo.com/a11y/feature_4.png"
          alt="Mockup of list of all collected buddies."
          title="Coming soon:"
          description="A buddy archive to store and collect grown A11y Buddies."
        />
      </div>
    </Section>
  );
}

export default A11ySolution;
