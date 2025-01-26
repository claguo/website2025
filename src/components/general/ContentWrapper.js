import React from "react";

function ContentWrapper({ children, className }) {
  return (
    <section
      className={`
        flex flex-col text-text-default
        py-md gap-3xl
        lg:px-lg lg:py-2xl lg:gap-4xl max-w-[928px]
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default ContentWrapper;
