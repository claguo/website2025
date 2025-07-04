import React from "react";
import Section from "../general/Section";
import ProjectSummary from "../ProjectSummary";
import Callout from "../general/Callout";
import ExternalURLButton from "../buttons/ExternalURLButton";
import { MdArrowOutward } from "react-icons/md";

function BloomsTLDR() {
  return (
    <Section tagText="tl;dr" project="blooms">
      <div className="flex flex-col gap-xs">
        <p>
          One of the biggest barriers to abortion care is a lack of social
          support. This project is an attempt to ameliorate this by{" "}
          <span className="font-medium text-text-blooms">
            displaying abortion-related data in a positive, approachable,
            interactive way.
          </span>
        </p>
        <div className="flex gap-2xs items-center text-text-blooms">
          <ExternalURLButton
            plainText={true}
            text="View the web app"
            url="https://blooms-globe.netlify.app/"
            className="bg-[#b8007a] text-white"
            icon={<MdArrowOutward className="text-[16px]" />}
          />
        </div>
      </div>

      <ProjectSummary />

      <Callout title="Why it matters">
        <p>
          Even before the overturning of Roe v. Wade in June 2022, seeking an
          abortion was already an extremely stressful experience for people with
          uteruses. As a woman who grew up in Texas, the overturn of Roe v. Wade
          sparked in me a profound sense of anxiety, as well as a strong desire
          to take action.
        </p>
      </Callout>
    </Section>
  );
}

export default BloomsTLDR;
