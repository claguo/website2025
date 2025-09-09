import React, { useLayoutEffect } from "react";
import Section from "../components/general/Section";
import LoveCards from "../components/custom/LoveCards";
import Button from "../components/buttons/Button";

function AboutPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="px-xs lg:px-[20px] flex flex-col pt-3xl pb-lg w-screen overflow-hidden">
      {/* <div className="flex flex-col pt-3xl pb-lg lg:pb-[120px] lg:gap-md gap-sm w-full"> */}
      <div className="flex flex-col-reverse lg:flex-row lg:gap-md pb-xl gap-sm lg:gap-xl w-full">
        <div className="flex flex-col lg:gap-md gap-sm max-w-[405px]">
          <p className="text-sm text-left">
            I'm Claire, a product designer passionate about building social
            equity through design. At the core of my design practice is a desire
            to learn about and work with a diverse range of people and problems
            to enable me to create more empathetic and inclusive designs.
          </p>
          <div className="text-sm text-left">
            Currently at{" "}
            <Button
              text="Mochi Health"
              url="https://joinmochi.com/"
              plainText={true}
            />
            . Previously at{" "}
            <Button
              text="Hitch"
              url="https://www.hitch.com/"
              plainText={true}
            />{" "}
            and{" "}
            <Button text="RISD" url="https://www.risd.edu/" plainText={true} />{" "}
            <Button
              text="Industrial Design"
              url="https://id.risd.edu/"
              plainText={true}
            />{" "}
            +{" "}
            <Button
              text="Computation"
              url="https://ctc.risd.edu/"
              plainText={true}
            />
            .
          </div>
          <div className="flex flex-col gap-0">
            <Button
              text="claireguo@gmail.com"
              onClick={() => (window.location = "mailto:claireguo@gmail.com")}
              plainText={true}
            />
            <Button
              text="github"
              url="https://github.com/claguo"
              plainText={true}
            />
            <Button
              text="linkedin"
              url="https://www.linkedin.com/in/claguo"
              plainText={true}
            />
          </div>

          <span className="text-md">*</span>
        </div>
        <img
          src="https://images.claireguo.com/about/pfp.jpg"
          alt="Me, holding my cat, Benny"
          className="object-cover object-[0%_33%] lg:object-center max-h-[240px] lg:max-h-none w-full lg:w-[20%] rounded-[4px]"
        />
      </div>

      <Section
        tagText="Outside of the studio, I am..."
        project="blooms"
        className="w-full"
      >
        <LoveCards />
      </Section>
      {/* </div> */}
    </section>
  );
}

export default AboutPage;
