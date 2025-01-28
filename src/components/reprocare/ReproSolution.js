import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Section from "../general/Section";
import ExternalURLButton from "../buttons/ExternalURLButton";

function ReproSolution() {
  return (
    <Section tagText="Design" project="rcw">
      <p>
        I decided to build an interactive data visualization web app that
        displays abortion-related data from across the globe. This web app seeks
        to normalize and destigmatize abortion and reveal the network of women
        experiencing similar difficulties worldwide. This was created using
        React and Globe.gl with data sourced from Guttmacher Institute Data
        Center.
      </p>
      <div className="flex gap-2xs items-center text-text-rcw">
        <ExternalURLButton
          plaintext={true}
          text="View the web app"
          url="https://repro-care-world.netlify.app/"
          className="text-text-rcw font-mono text-md"
        />
        <MdArrowOutward className="text-md" />
      </div>
    </Section>
  );
}

export default ReproSolution;
