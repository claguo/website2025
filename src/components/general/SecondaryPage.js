import React from "react";

function SecondaryPage({ children }) {
  return (
    <section className="w-[100vw] px-xs lg:px-[20px] flex flex-col items-center overflow-x-hidden">
      {children}
    </section>
  );
}

export default SecondaryPage;
