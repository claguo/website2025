import React from "react";
import H1 from "../H1";
import LargeP from "../LargeP";
import PBlurb from "../PBlurb";
import ContainerGray from "../ContainerGray";

function CollabProblem() {
  return (
    <ContainerGray>
      <H1>2. problem</H1>
      <LargeP className='lg:mr-[40%]'>RISD course curriculum discourages collaboration.</LargeP>
      <PBlurb>We’ve observed a need for a platform that facilitates collaboration, empowering students to collectively develop projects that are more innovative, impactful, and meaningful than what an individual could achieve alone. We spoke to student creators from a variety of schools to find out more about how they collaborate and where they find inspiration.</PBlurb>
      {/* <div className='horizSection' style={{marginTop: '2rem'}}>
          <div className='quote-box'>"It's difficult to connect with students in other departments."</div>
          <div className='quote-box'>Some people prefer an in-person event and some prefer an online event.</div>
          <div className='quote-box'>Interviewees' favorite platforms for inspiration include pinterest, RISD alumni, Instagram, YouTube</div>
        </div> */}
    </ContainerGray>
  )
}

export default CollabProblem;