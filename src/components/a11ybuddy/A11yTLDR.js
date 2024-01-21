import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import LargeP from "../LargeP";
import PBlurb from "../PBlurb";

function A11yTLDR() {
  return (
    <ContainerGray>
      <H1> 0. tl;dr </H1>
      <LargeP className="lg:mr-[40%]">
        A VSCode extension to gamify the implementation of web accessibility.
      </LargeP>
      <PBlurb>
        A11y Buddy for VSCode promotes a proactive approach to web
        accessibility. Inspired by VSCode Pets, Pokemon, and Tamagotchi, A11y
        Buddy makes the implementation of web accessibility a delightful and
        engaging experience for developers. This is a work-in-progress intended
        to build a more accessible internet!
      </PBlurb>
    </ContainerGray>
  );
}

export default A11yTLDR;
