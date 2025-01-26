import React, { useLayoutEffect } from "react";

import SplitHover from "../components/custom/SplitHoverEffects";
import pfp from "../assets/imgs/pfp.jpg";
import SecondaryPage from "../components/general/SecondaryPage";
import ContentWrapper from "../components/general/ContentWrapper";

import tulip from "../assets/imgs/about/tulip.png";
import lily from "../assets/imgs/about/lily.png";
import smoliv from "../assets/imgs/about/smoliv.png";
import keroppi from "../assets/imgs/about/keroppi.png";
import Section from "../components/general/Section";
import LoveCards from "../components/custom/LoveCards";

function AboutPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <SecondaryPage>
      {/* <div className="mx-xs lg:mx-sm flex flex-col mt-4xl max-w-[928px] items-center gap-md lg:flex-row"> */}

      <section
        className="flex flex-col lg:flex-row text-text-default
        py-2xl gap-md items-center
        lg:px-lg lg:py-[196px] lg:gap-xl max-w-[1200px]"
      >
        <img
          src={pfp}
          alt="Me, holding my cat Benny"
          className="object-cover object-[0%_33%] lg:object-center max-h-[240px] lg:max-h-none w-full lg:w-[30%] rounded-[16px]"
        />

        <div className="flex flex-col gap-lg lg:gap-xl items-center">
          <div className="flex flex-col gap-2xs">
            <p>
              I'm <span className="font-medium text-pink">Claire</span>, a
              product designer passionate about building social equity through
              design. At the core of my design practice is a desire to learn
              about and work with a diverse range of people and problems to
              enable me to create more empathetic and inclusive designs.
            </p>
            <span className="font-mono italic">
              RISD BFA Industrial Design + Computation '24
            </span>
          </div>
          <Section
            tagText="Outside of the studio, I am..."
            project="rcw"
            className="w-full"
          >
            <LoveCards />
          </Section>
        </div>

        {/* <section className="flex justify-between hidden lg:not-hidden">
          <img
            src={smoliv}
            alt="Smoliv the Pokemon"
            className="w-[10%] object-contain"
          />
          <img
            src={tulip}
            alt="A pink tulip"
            className="w-[10%] object-contain"
          />
          <img src={keroppi} alt="Keroppi" className="w-[10%] object-contain" />
          <img
            src={lily}
            alt="Lily from Animal Crossing"
            className="w-[10%] object-contain px-xs"
          />
          <img
            src={smoliv}
            alt="Smoliv the Pokemon"
            className="w-[10%] object-contain"
          />
          <img
            src={tulip}
            alt="A pink tulip"
            className="w-[10%] object-contain"
          />
          <img src={keroppi} alt="Keroppi" className="w-[10%] object-contain" />
          <img
            src={lily}
            alt="Lily from Animal Crossing"
            className="w-[10%] object-contain px-xs"
          />
        </section> */}
      </section>
    </SecondaryPage>
  );
}

export default AboutPage;
