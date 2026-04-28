"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Philosophy Exam Help",
            heading: <>Get Top-Quality Help With Online Philosophy Exam</>,
            subText: (
              <p>
                Need help with your philosophy online exam? Our qualified tutors 
                are available day/night at take philosophy exam to ensure you’re 
                supported every step of the journey.
              </p>
            ),
            bullets: [
              "Step-by-Step Concept Explanations",
              "Topic-wise Custom Study Plans",
              "Live or Timed Online Exams Support",
              "Fast Responses"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;