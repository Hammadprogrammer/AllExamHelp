"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Finance Exam Help",
            heading: <>Hire Professional Finance Exam Help Services</>,
            subText: <p>Students seeking finance exam help should utilize our reliable online exam assistance services. Here we offer a professional finance exam help service, so your Exam is handled with accuracy and confidentiality.</p>,
            bullets: [
              "100% Confidential",
              "PhD Experts in Finance",
              "On-Time Submission",
              "Trusted Exam Takers"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;