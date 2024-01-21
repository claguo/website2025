import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import buddies from "../../assets/imgs/a11ybuddy/buddies.png";
import cover from "../../assets/imgs/a11ybuddy/cover.png";
import alt from "../../assets/imgs/a11ybuddy/alt.png";
import Features from "../Features";
import InnerSection from "../InnerSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import A11yHow from "./A11yHow";

function A11ySolution() {
  return (
    <ContainerGray>
      <H1>2. a11y buddy for vscode</H1>
      <img
        src={cover}
        alt="A11y Buddy for VSCode screenshot"
        className="my-[1rem]"
      />
      <InnerSection>
        <A11yHow />
      </InnerSection>
      <InnerSection>
        <H1>other features</H1>
        <div className="flex flex-col gap-[3rem] lg:gap-[4rem]">
          <Features
            src={buddies}
            alt=""
            imgLeft={true}
            title="Gamification makes accessibility engaging and rewarding."
            text="For developers, implementing web accessibility is an afterthought. A11y Buddy's pet-raising simulation incentivizes developers to implement accessibility."
          />
          <Features
            src={alt}
            alt=""
            imgLeft={false}
            title="Read A11y Buddy's accessible alt text."
            text="We've included exciting alt text for all images in our extension. This ensures that A11y Buddy itself is accessible."
          />
        </div>
      </InnerSection>
    </ContainerGray>
  );
}

export default A11ySolution;
