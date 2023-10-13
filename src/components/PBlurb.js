import React from "react";

function PBlurb({children, className}) {
  return (
  <>
    <p className={`flex flex-col lg:ml-[60%] mt-4 text-sm lg:text-base ${className}`}>{children}</p>
  </>

  )
}

export default PBlurb;