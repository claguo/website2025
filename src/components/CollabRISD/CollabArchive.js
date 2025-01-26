import React from "react";
import ExternalURLButton from "../buttons/ExternalURLButton";
import projects from "../../assets/imgs/collabrisd/archiveprojects.png";
import taxidermy from "../../assets/imgs/collabrisd/taxidermynotion.png";
import mobile from "../../assets/imgs/collabrisd/notionmobile.PNG";
import ContentWrapper from "../general/ContentWrapper";
import { MdArrowOutward } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import Content from "../Content";

function CollabArchive() {
  return (
    <ContentWrapper className="bg-[#E4F3FA]">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Solution 2: Digital Archive</h2>
      </div>
      <Content
        summary="A digital archive of projects looking for collaborators and
        collaboration resources."
        paragraph="This transition into the digital realm enhances accessibility, as the
        digital archive is free from the constraints of time and location that
        events typically entail. This means that our resources remain accessible
        to anyone, around the clock."
      >
        <ExternalURLButton
          text="view our notion page"
          icon={<MdArrowOutward />}
          url="https://lily-sandalwood-e02.notion.site/Cabinet-of-Collaboration-634ebe90250b40f5a04e9c2cf380bdf9?pvs=4"
          isButton={true}
          hasBg={true}
          className="pl-[1.25rem] pr-[1rem]"
        />
      </Content>
      <img className="mt-8" src={projects} alt="Projects archive" />
      <div className="flex justify-between">
        <img
          className="w-[32.8%] mt-4 object-contain"
          src={mobile}
          alt="Notion page on mobile"
        />
        <img
          className="w-[65.4%] mt-4 object-contain"
          src={taxidermy}
          alt="Taxidermy club's Notion page"
        />
      </div>
    </ContentWrapper>
  );
}

export default CollabArchive;
