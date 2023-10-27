import React from "react";

function LargeP({children, className}) {
  return (
    <p className={`text-base lg:text-md ${className}`}>{children}</p>
  )
}

export default LargeP;