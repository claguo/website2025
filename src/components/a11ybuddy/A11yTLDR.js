import React from "react";
import Section from "../general/Section";
import ProjectSummary from "../ProjectSummary";
import Callout from "../general/Callout";

function A11yTLDR() {
  return (
    <Section tagText="tl;dr" project="a11y">
      <p>
        A11y Buddy is{" "}
        <span className="text-text-a11y font-medium">
          a VSCode extension that gamifies the implementation of web
          accessibility
        </span>
        . By promoting a proactive approach to web accessibility and taking
        inspiration from games like Pokemon, and Tamagotchi, and VSCode Pets,
        A11y Buddy turns the implementation of web accessibility into a
        delightful and engaging experience for developers.
      </p>
      <ProjectSummary />
      <Callout title="Why it matters">
        <p className="mb-2xs">
          About 42.5 million Americans live with a form of disability (Pew
          Research). Web accessibility ensures that people with disabilities
          have equal access to online information and services.
        </p>
        <p>
          Additionally, a recent surge in ADA-based website and app lawsuits has
          resulted in significant financial repercussions for businesses. Some
          high profile cases include National Federation of the Blind v. Target
          ($6 million), National Association of the Deaf v. Harvard
          ($1,575,000), and Robles v. Domino's.
        </p>
      </Callout>
    </Section>
  );
}

export default A11yTLDR;
