import React from "react";

function SecondaryPage({ children }) {
  return (
    <section className="mx-xs lg:mx-sm flex flex-col items-center">
      {children}
    </section>
  );
}

export default SecondaryPage;
