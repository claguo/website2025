import React from "react";
import Section from "../general/Section";
import ProjectSummary from "../ProjectSummary";
import Callout from "../general/Callout";
import ExternalURLButton from "../buttons/ExternalURLButton";
import { MdArrowOutward } from "react-icons/md";

function ReproTLDR() {
  return (
    <Section tagText="tl;dr" project="rcw">
      <div className="flex flex-col gap-xs">
        <p>
          One of the biggest barriers to abortion care is a lack of social
          support. This project is an attempt to ameliorate this by{" "}
          <span className="font-medium text-text-rcw">
            displaying abortion-related data in a positive, approachable,
            interactive way.
          </span>
        </p>
        <div className="flex gap-2xs items-center text-text-rcw">
          <ExternalURLButton
            plaintext={true}
            text="Go to web app"
            url="https://repro-care-world.netlify.app/"
            className="text-text-rcw"
          />
          <MdArrowOutward className="text-[20px]" />
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

export default ReproTLDR;
