import React from "react";

function SecondaryPage({ children }) {
  return (
    <section className="w-full px-xs lg:px-[20px] flex flex-col items-center overflow-x-visible">
      {children}
    </section>
  );
}

export default SecondaryPage;
