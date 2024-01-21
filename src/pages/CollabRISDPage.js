import React from "react";
import ProjectHero from "../components/ProjectHero";
import CollabProblem from "../components/CollabRISD/CollabProblem";
import CollabLocalEvents from "../components/CollabRISD/CollabLocalEvents";
import CollabArchive from "../components/CollabRISD/CollabArchive";
import CollabImpact from "../components/CollabRISD/CollabImpact";
import NextSteps from "../components/NextSteps";
import CollabTLDR from "../components/CollabRISD/CollabTLDR";
import ProjectNavButtons from "../components/buttons/ProjectNavButtons";

function CollabRISDPage() {
  return (
    <>
      <ProjectHero />
      <CollabTLDR />
      <CollabImpact />
      <CollabProblem />
      <CollabLocalEvents />
      <CollabArchive />
      <NextSteps
        section="4"
        steps={[
          "This project was the first time any of us had hosted an event. We definitely underestimated how much planning each would take. As a result, although we would have liked to hold mock prototyping events for all three events (not just the Speed Date), we did not have the time to.",
          "We hope that next year, these events will go much smoother based on what we learned from the previous year.",
          "As for the digital archive, next steps involve advertising the Notion page more as well as populating information in the resource sections.",
        ]}
      />
      <ProjectNavButtons />
    </>
  );
}

export default CollabRISDPage;
