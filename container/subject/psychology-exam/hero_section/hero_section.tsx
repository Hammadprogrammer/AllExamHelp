"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Fast & Reliable Support",
            heading: <>Hire Our Professional Psychology Exam Takers</>,
            subText: (
              <p>
                Our best psychology tutor team will walk you through every chapter 
                and topic of the exam! Our personalized support ensures that we're 
                with you every step of the way, offering the same fresh, modern 
                approach in all of our products and services.
              </p>
            ),
            bullets: [
              "Key Theories and Concepts, All Explained Step-by-Step",
              "Quick Help for Tough Questions and Case Studies",
              "Several Class Times to Accommodate Your Busy"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;