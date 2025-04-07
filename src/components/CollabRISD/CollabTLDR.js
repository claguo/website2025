import React from "react";
import roundtable from "../../assets/imgs/collabrisd/Roundtable-04.jpg";
import notion from "../../assets/imgs/collabrisd/notion.png";
import ContentWrapper from "../general/ContentWrapper";
import { IoStarSharp } from "react-icons/io5";
import Content from "../general/Content";

function CollabTLDR() {
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>tl;dr</h2>
      </div>
      <Content
        summary="Fostering interdisciplinary collaboration @ RISD and Brown University."
        paragraph="This was a semester-long, student-led project, during which my team sought to increase interdisciplinary collaboration on campus. Over the course of four months, we designed, tested, and implemented two solutions:"
      >
        <figure className="mt-[1rem]">
          <div className="flex items-baseline gap-[0.5rem] font-bold">
            <h3 className="font-mono">1.</h3>
            <p>
              A series of three local events to facilitate connection and
              collaboration.
            </p>
          </div>
          <img
            src={roundtable}
            alt="The Roundtable event: a presenter presenting to an audience of 18 people."
          />
        </figure>
        <figure className="mt-[1rem]">
          <div className="flex items-baseline gap-[0.5rem] font-bold">
            <h3 className="font-mono">2.</h3>
            <p>
              A digital archive as a platform for gloabl outreach and
              information sharing.
            </p>
          </div>
          <img
            src={notion}
            alt="Screenshot of our Notion archive with a fun, illustrated banner, a link to project submission, and links to resources."
          />
        </figure>
      </Content>
    </ContentWrapper>
  );
}

export default CollabTLDR;
