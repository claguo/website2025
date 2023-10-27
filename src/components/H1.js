import React from "react";

function H1({children, className}) {
  return (
    <h1 className={`${className} text-sm lg:text-base font-bold mb-[0.25rem]`}>{children}</h1>
  )
}

export default H1;