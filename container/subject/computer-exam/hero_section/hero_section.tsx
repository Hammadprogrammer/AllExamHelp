"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Computer Science Exam Help",
            heading: <>Excellent Computer Science Exam Helpers For Hire</>,
            subText: <p>We are pleased to offer secure online exam help to students. With our Computer science exam takers for hire, the confidentiality and timely submission of your work is guaranteed.</p>,
            bullets: [
              "Secure online exam help",
              "Computer science exam takers for hire",
              "Guaranteed confidentiality",
              "Timely submission guaranteed"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;