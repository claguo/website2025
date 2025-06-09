import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/a11ybuddy/A11yTLDR";
import Research from "../components/a11ybuddy/A11yResearch";
import Design from "../components/a11ybuddy/A11yDesign";
import NextSteps from "../components/custom/NextSteps";
import ContentWrapper from "../components/general/ContentWrapper";
import SecondaryPage from "../components/general/SecondaryPage";

function A11yBuddy() {
  return (
    <SecondaryPage>
      <ProjectHero />
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

export default A11yBuddy;
