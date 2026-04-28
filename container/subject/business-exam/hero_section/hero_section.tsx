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
            heading: <>Hire Business Exam Help Services For Higher Grade</>,
            subText: <p>Our professionals’ exam helpers will be able to ace your exam for you personally! We login securely, follow the directions and stay within the time so you can sit back and relax while we take care of your grade.</p>,
            bullets: [
              "Professional Exam Tutors",
              "Secure & Confidential",
              "On-Time Completion"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;