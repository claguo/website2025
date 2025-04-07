import React from "react";

import SecondaryPage from "../components/general/SecondaryPage";
import ProjectHero from "../components/ProjectHero";
import ETOTLDR from "../components/ETO/ETOTLDR";
import ETOResearch from "../components/ETO/ETOResearch";
import ETODesign from "../components/ETO/ETODesign";
// import ETODesignSolution from "../components/ETO/ETODesignSolution";
import ContentWrapper from "../components/general/ContentWrapper";

import hero from "../assets/imgs/eto/hero.png";

function EatTheOceanPage() {
  return (
    <SecondaryPage>
      <ProjectHero src={hero} />
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
