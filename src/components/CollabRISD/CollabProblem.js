import React from "react";
import ContentWrapper from "../general/ContentWrapper";
import { IoStarSharp } from "react-icons/io5";
import Content from "../general/Content";

function CollabProblem() {
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>The Problem</h2>
      </div>
      <Content
        summary="RISD course curriculum discourages collaboration."
        paragraph="We’ve observed a need for a platform that facilitates collaboration, empowering students to collectively develop projects that are more innovative, impactful, and meaningful than what an individual could achieve alone. We spoke to student creators from a variety of schools to find out more about how they collaborate and where they find inspiration."
      />
      {/* <div className='horizSection' style={{marginTop: '2rem'}}>
          <div className='quote-box'>"It's difficult to connect with students in other departments."</div>
          <div className='quote-box'>Some people prefer an in-person event and some prefer an online event.</div>
          <div className='quote-box'>Interviewees' favorite platforms for inspiration include pinterest, RISD alumni, Instagram, YouTube</div>
        </div> */}
    </ContentWrapper>
  );
}

export default CollabProblem;
