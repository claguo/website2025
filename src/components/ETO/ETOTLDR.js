import React from "react";
import Section from "../general/Section";
import ProjectSummary from "../ProjectSummary";
import Callout from "../general/Callout";

function ETOTLDR() {
  return (
    <Section tagText="tl;dr" project="eto">
      <p>
        Each year, An estimated 17-22% (2 billion pounds) of U.S. catch is
        discarded due to a lack of consumer market. Eat the Ocean is{" "}
        <span className="text-text-eto font-medium">
          a recipe app designed to reduce bycatch waste by diversifying consumer
          diet
        </span>
        , creating new demand for underappreciated seafood.
      </p>
      <ProjectSummary />
      <Callout title="Why it matters">
        <p>
          Bycatch is the unintentional capture of non-target fish and marine
          wildlife. Each year, commercial trawlers catch and discard an
          estimated two billion pounds of bycatch, injuring or killing the
          wildlife in the process. Tossed fish is not only wasteful, but also
          disrupts marine ecosystems, destabilizes food webs, and harms ocean
          biodiversity.
        </p>
      </Callout>
    </Section>
  );
}

export default ETOTLDR;
