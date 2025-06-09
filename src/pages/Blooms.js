import React from "react";
import ProjectHero from "../components/ProjectHero";
import TLDR from "../components/blooms/BloomsTLDR";
import Research from "../components/blooms/BloomsResearch";
import BloomsSolution from "../components/blooms/BloomsSolution";
import NextSteps from "../components/custom/NextSteps";
import SecondaryPage from "../components/general/SecondaryPage";
import ContentWrapper from "../components/general/ContentWrapper";

function BloomsPage() {
  return (
    <SecondaryPage>
      <ProjectHero />
      <ContentWrapper>
        <TLDR />
        <Research />
        <BloomsSolution />
        <NextSteps
          project="blooms"
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

export default BloomsPage;
