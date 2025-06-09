import React from "react";

function SecondaryPage({ children }) {
  return (
    <section className="w-full mx-xs lg:mx-[20px] flex flex-col items-center">
      {children}
    </section>
  );
}

export default SecondaryPage;
