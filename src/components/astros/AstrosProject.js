import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import H2 from "../H2";
import PBlurb from "../PBlurb";

function AstrosProject(props) {
  return (
    <ContainerGray>
      <H2>{props.name}</H2>
      <div className='flex flex-col gap-[4rem]'>
        {props.content.map((item, index) => (
          <div key={index}>
            <H1 className={`${index % 2 === 0 ? 'lg:mr-[20%]' : 'lg:mr-[20%]'}`}>{item.header}</H1>
            <PBlurb>{item.paragraph}</PBlurb>
          </div>
        ))}
      </div>
    </ContainerGray>
  )
}

export default AstrosProject;