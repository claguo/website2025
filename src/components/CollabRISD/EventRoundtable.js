import React from "react";
import roundtable from "../../assets/imgs/collabrisd/Roundtable-04.jpg";
import poster from "../../assets/imgs/collabrisd/rtposter.png";
import ig1 from "../../assets/imgs/collabrisd/rtig1.png";
import ig2 from "../../assets/imgs/collabrisd/rdig2.png";
import ig3 from "../../assets/imgs/collabrisd/rdig3.png";
import ig4 from "../../assets/imgs/collabrisd/rtig4.png";
import ig5 from "../../assets/imgs/collabrisd/rtig5.png";
import InstagramPosts from "./InstagramPosts";
import ContentWrapper from "../general/ContentWrapper";
import Content from "../Content";

function EventRoundtable() {
  return (
    <ContentWrapper className="bg-[#FAE7FF]">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="font-mono font-bold">2</div>
        <h3>Learn: Roundtable</h3>
        <p className="text-center lg:px-[6rem]">
          We invited student club leaders and others who have worked on
          collaborative projects in the past to speak about their experiences.
        </p>
        <p className="font-mono text-xs">
          Sunday, April 23, 7PM @ Taproom, Memorial Hall 4F
        </p>
      </div>
      <img src={roundtable} alt="Roundtable event in progress" />
      <p className="text-center lg: px-[6rem]">
        Attendees learn about the challenges they faced, how they found
        collborators, and other insights about their collaborative experience.
        Speakers get the opportunity to gain exposure for their projects and
        potentially recruit new collaborators or club members.
      </p>
      <Content
        summary="Materials designed by me!"
        paragraph="Event poster and social media posts to spread the word."
      >
        <img src={poster} alt="Roundtable poster" />
      </Content>
      <InstagramPosts posts={[ig1, ig2, ig3, ig4, ig5]} />
    </ContentWrapper>
  );
}

export default EventRoundtable;
