import React from "react";
import ContainerGray from "../ContainerGray";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";

function A11yResearch() {
  return (
    <ContainerGray>
      <H1>1. why does it matter?</H1>
      <div className="flex flex-col gap-[4rem]">
        <div>
          <LargeP className="lg:mr-[40%]">
            Equal access for people with disabilities.
          </LargeP>
          <PBlurb>
            About 42.5 million Americans live with a form of disability (Pew
            Research). Web accessibility ensures that people with disabilities
            have equal access to online information and services.
          </PBlurb>
        </div>
        <div>
          <LargeP className="lg:mr-[40%]">
            Web accessibility lawsuits costing businesses millions of dollars.
          </LargeP>
          <PBlurb>
            A recent surge in ADA-based website and app lawsuits has resulted in
            significant financial repercussions for businesses. Some high
            profile cases include National Federation of the Blind v. Target ($6
            million), National Association of the Deaf v. Harvard ($1,575,000),
            and Robles v. Domino's.
          </PBlurb>
        </div>
      </div>
    </ContainerGray>
  );
}

export default A11yResearch;
