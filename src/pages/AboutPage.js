import React, {useLayoutEffect} from 'react'
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';

function AboutPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  )
}

export default AboutPage;
