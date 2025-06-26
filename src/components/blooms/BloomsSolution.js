import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Section from "../general/Section";
import ExternalURLButton from "../buttons/ExternalURLButton";

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
        <ExternalURLButton
          plainText={true}
          text="View the web app"
          url="https://blooms-globe.netlify.app/"
          className="bg-[#b8007a] text-white font-mono tracking-normal text-md"
          icon={<MdArrowOutward className="text-[20px]" />}
        />
      </div>
    </Section>
  );
}

export default BloomsSolution;
