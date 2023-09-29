import React from "react";

function H1({children, className}) {
  return (
    <h1 className={`text-base lg:text-lg ${className}`}>{children}</h1>
  )
}

export default H1;