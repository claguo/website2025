import React from "react";
import SecondaryPage from "../components/general/SecondaryPage";
import ProjectHero from "../components/ProjectHero";
import ETOTLDR from "../components/ETO/ETOTLDR";
import ETOResearch from "../components/ETO/ETOResearch";
import ETODesign from "../components/ETO/ETODesign";
import ContentWrapper from "../components/general/ContentWrapper";

function EatTheOceanPage() {
  return (
    <SecondaryPage>
      <ProjectHero />
      <ContentWrapper>
        <ETOTLDR />
        <ETOResearch />
        <ETODesign />
        {/* <ETODesignSolution /> */}
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default EatTheOceanPage;
