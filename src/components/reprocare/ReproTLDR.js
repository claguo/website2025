import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import H2 from "../H2";
import PBlurb from "../PBlurb";
import ExternalURLButton from "../ExternalURLButton";

function ReproTLDR() {
  return (
    <ContainerGray>
      <H2> 0. tl;dr </H2>
      <H1 className='lg:mr-[40%]'>Destigmatizing abortion and providing a sense of social support.</H1>
      <PBlurb>
        One of the biggest barriers to abortion care is a lack of social support. This project is an attempt to ameliorate this by displaying abortion-related data in a positive, approachable, interactive way.
        <ExternalURLButton text='View The Web App!' url='https://repro-care-world.netlify.app/' isButton={true}/>
      </PBlurb>
    </ContainerGray>
  )
}

export default ReproTLDR;