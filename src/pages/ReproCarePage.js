import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/reprocare/ReproTLDR";
import Research from "../components/reprocare/ReproResearch";
import Insights from "../components/reprocare/ReproInsights";
import ReproSolution from "../components/reprocare/ReproSolution";
import ProjectNavButtons from "../components/buttons/ProjectNavButtons";
import NextSteps from "../components/NextSteps";

function ReproCarePage() {
  return (
    <>
      <ProjectHero />
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
      <ProjectNavButtons />
    </>
  );
}

export default ReproCarePage;
