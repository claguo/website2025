import React from 'react'
import { Link } from 'react-router-dom'
import { SplitText } from '@cyriacbr/react-split-text';
import AboutHero from '../components/about/AboutHero';
import AboutImageCarousel from '../components/about/AboutImageCarousel';
import AboutContent from '../components/about/AboutContent';

function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <AboutImageCarousel /> */}
      <AboutContent />
    </>
  )
}

export default AboutPage;
