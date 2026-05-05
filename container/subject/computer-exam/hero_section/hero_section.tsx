"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Computer Science Exam",
            heading: <>Hire Computer Science Exam Tutors Online</>,
            subText: (
              <p>
                Contact secure online exam help from professionals 
                that ensure accuracy, confidentiality and submission. 
                Our PhD specialists provide trusted computer science 
                exam help with guaranteed top results.
              </p>
            ),
            bullets: [
              "Timely Completion",
              "All Topics Covered",
              "Stress-Free",
              "Affordable Rates"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;