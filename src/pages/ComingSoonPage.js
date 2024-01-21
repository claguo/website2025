import React from "react";
import ProjectHero from "../components/ProjectHero";
import ContainerGray from "../components/ContainerGray";
import ProjectNavButtons from "../components/buttons/ProjectNavButtons";

function ComingSoonPage() {
  return (
    <>
      <ProjectHero />
      <ContainerGray>
        <div>Coming soon!</div>
      </ContainerGray>
      <ProjectNavButtons />
    </>
  );
}

export default ComingSoonPage;
