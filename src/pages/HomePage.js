import React, { useLayoutEffect } from "react";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";

function HomePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero />
      <WorkSection />
    </>
  );
}

export default HomePage;
