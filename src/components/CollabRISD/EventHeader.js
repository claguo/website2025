import React from "react";
import H1 from "../H1";
import H2 from "../H2";
import PBlurb from "../PBlurb";

function EventHeader(props) {
  return (
    <div>
      <H2 className='text-dark-green -rotate-2 mb-0 lg:mb-2'>{ props.date }</H2>
      <H1> { props.name } </H1>
      <PBlurb> {props.intro } </PBlurb>
    </div>
  )
}

export default EventHeader;