import React from "react";
import Section from "../general/Section";
import TextStack from "../general/TextStack";
import colortokens from "../../assets/imgs/mochi/colortokens.png";

function Highlights() {
  return (
    <Section tagText="System highlights" project="mochi">
      <TextStack
        header="Color Tokens"
        className="font-mono italic text-text-subtle"
      >
        <p>
          Colors are logically named based on their usage. Each color token has
          3 different values for Default, Premium, and Pediatrics modes.
        </p>
        <img
          src={colortokens}
          alt="Screenshot of background colors and accent colors and their associated token names."
        />
      </TextStack>
    </Section>
  );
}

export default Highlights;
