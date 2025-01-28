import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/reprocare/ReproTLDR";
import Research from "../components/reprocare/ReproResearch";
import ReproSolution from "../components/reprocare/ReproSolution";
import NextSteps from "../components/NextSteps";
import SecondaryPage from "../components/general/SecondaryPage";
import hero from "../assets/imgs/reprocare/hero.png";
import ContentWrapper from "../components/general/ContentWrapper";

function ReproCarePage() {
  return (
    <SecondaryPage>
      <ProjectHero src={hero} />
      <ContentWrapper>
        <TLDR />
        <Research />
        <ReproSolution />
        <NextSteps
          project="rcw"
          steps={[
            "Seek feedback from women",
            "Optimize for mobile",
            "Add clinic data",
          ]}
        />
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default ReproCarePage;
