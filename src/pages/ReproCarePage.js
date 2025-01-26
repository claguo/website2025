import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/reprocare/ReproTLDR";
import Research from "../components/reprocare/ReproResearch";
import Insights from "../components/reprocare/ReproInsights";
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
        <Insights />
        <ReproSolution />
        <NextSteps
          section={4}
          steps={[
            "Currently in progress: UI details tweaks (spacing, sizing, consistency)",
            "Seek feedback from women.",
            "Add clinic data.",
            "Optimize for mobile screens.",
          ]}
        />
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default ReproCarePage;
