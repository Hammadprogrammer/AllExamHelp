"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Feeling Overwhelmed?",
            heading: <>Hire Our Professional Nursing Exam Experts Now!</>,
            subText: (
              <p>
                Obtaining professional assistance through nursing exam help will 
                ensure that students can achieve success without stress. Thanks 
                to our team, who are reliable nursing exam helpers.
              </p>
            ),
            bullets: [
              "Easy Process",
              "Total Privacy",
              "High-Quality Grades",
              "Money-Back Guarantee"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;