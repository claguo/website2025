import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Section from "../general/Section";
import ButtonLink from "../general/ButtonLink";

function BloomsSolution() {
  return (
    <Section tagText="Design" project="blooms">
      <p>
        I decided to build an interactive data visualization web app that
        displays abortion-related data from across the globe. This web app seeks
        to normalize and destigmatize abortion and reveal the network of women
        experiencing similar difficulties worldwide. This was created using{" "}
        <span className="font-medium text-text-blooms">React</span> and{" "}
        <span className="font-medium text-text-blooms">Globe.gl</span> with data
        sourced from{" "}
        <span className="font-medium text-text-blooms">
          Guttmacher Institute Data Center
        </span>
        .
      </p>
      <div className="flex gap-2xs items-center text-text-blooms">
        <ButtonLink
          text="View the web app"
          to="https://blooms-globe.netlify.app/"
          target="_blank"
          className="bg-text-blooms/95 hover:bg-text-blooms/90"
          icon={<MdArrowOutward className="text-[16px]" />}
        />
      </div>
    </Section>
  );
}

export default BloomsSolution;
