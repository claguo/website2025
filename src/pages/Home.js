import React, { useLayoutEffect } from "react";
import Hero from "../components/Home/Hero";
import WorkSection from "../components/Home/WorkSection";

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
