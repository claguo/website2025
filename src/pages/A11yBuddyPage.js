import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/a11ybuddy/A11yTLDR";
import Research from "../components/a11ybuddy/A11yResearch";
import Design from "../components/a11ybuddy/A11yDesign";
import NextSteps from "../components/NextSteps";
import ContentWrapper from "../components/general/ContentWrapper";
import SecondaryPage from "../components/general/SecondaryPage";

import hero from "../assets/imgs/a11ybuddy/hero.png";

function A11yBuddyPage() {
  return (
    <SecondaryPage>
      <ProjectHero src={hero} />
      <ContentWrapper>
        <TLDR />
        <Research />
        <Design />
        <NextSteps
          project="a11y"
          steps={[
            "Implement more accessibility tests",
            "User testing to collect feedback",
            "Implement creature archive to view all the creatures the user has raised",
          ]}
        />
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default A11yBuddyPage;
