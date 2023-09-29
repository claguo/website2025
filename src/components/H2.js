import React from "react";

function H2({children, className}) {
  return (
    <h2 className={`${className} text-sm lg:text-base`}>{children}</h2>
  )
}

export default H2;