import React from "react";
import ProjectHero from "../components/ProjectHero";
import ProjectNavButtons from "../components/buttons/ProjectNavButtons";
import TLDR from "../components/a11ybuddy/A11yTLDR";
import Research from "../components/a11ybuddy/A11yResearch";
import Solution from "../components/a11ybuddy/A11ySolution";
import NextSteps from "../components/NextSteps";

function A11yBuddyPage() {
  return (
    <>
      <ProjectHero />
      <TLDR />
      <Research />
      <Solution />
      <NextSteps
        section="3"
        steps={[
          "Debugging for the release of an MVP to the VSCode marketplace.",
          "User testing to collect feedback.",
          "Implementation of more accessibility tests! Currently we only test for alt text.",
          "A creature archive to view all the creatures the user has raised.",
        ]}
      />
      <ProjectNavButtons />
    </>
  );
}

export default A11yBuddyPage;
