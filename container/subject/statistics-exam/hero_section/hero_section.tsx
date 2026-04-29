"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Quick & Trusted Guidance",
            heading: <>Hire Our Top-Tier Statistics Exam Help Services</>,
            subText: (
              <p>
                With our statistics tutors, you’ll learn about all the 
                statistical formulas you need to know in order to pass 
                your exams. They stick with you, through all the lessons 
                and practice questions, so when you’re done studying, 
                you’ll really feel confident for exam day.
              </p>
            ),
            bullets: [
              "Solutions for Each Stats Chapter",
              "Quick Exam Assistance",
              "Private and Secure Help",
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