import React from "react";
import PBlurb from "../PBlurb";

function EventHeader(props) {
  return (
    <div>
      <p className='font-bold text-sm lg:text-base text-green -rotate-2 mb-0 lg:mb-2'>{ props.date }</p>
      <h2 className='text-base lg:text-md font-sans font-normal'> { props.name } </h2>
      <PBlurb> {props.intro } </PBlurb>
    </div>
  )
}

export default EventHeader;