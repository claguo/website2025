import React from "react";
import ContentWrapper from "../general/ContentWrapper";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";

function AstrosProject(props) {
  return (
    <ContentWrapper>
      <H1>{props.name}</H1>
      <div className='flex flex-col gap-[4rem]'>
        {props.content.map((item, index) => (
          <div key={index}>
            <LargeP className='lg:mr-[40%]'>{item.header}</LargeP>
            <PBlurb>{item.paragraph}</PBlurb>
          </div>
        ))}
      </div>
    </ContentWrapper>
  )
}

export default AstrosProject;