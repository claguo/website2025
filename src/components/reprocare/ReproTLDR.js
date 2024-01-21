import React from "react";
import ContainerGray from "../ContainerGray";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";
import ExternalURLButton from "../buttons/ExternalURLButton";
import { MdArrowOutward } from "react-icons/md";

function ReproTLDR() {
  return (
    <ContainerGray>
      <H1> 0. tl;dr </H1>
      <LargeP className="lg:mr-[40%]">
        Destigmatizing abortion and providing a sense of social support.
      </LargeP>
      <PBlurb>
        One of the biggest barriers to abortion care is a lack of social
        support. This project is an attempt to ameliorate this by displaying
        abortion-related data in a positive, approachable, interactive way.
        <ExternalURLButton
          text="view the web app"
          icon={<MdArrowOutward />}
          url="https://repro-care-world.netlify.app/"
          isButton={true}
          hasBg={true}
          className="pl-[1.25rem] pr-[1rem]"
        />
      </PBlurb>
    </ContainerGray>
  );
}

export default ReproTLDR;
