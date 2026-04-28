"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Secure High Grades",
            heading: <>Affordable History Exam Helpers For Hire</>,
            subText: <p>Students needing history exam help can finally stop stressing and rely on our online exam help services. We have exam helper for hire with expertise to ensure everything is secure, accurate, and submitted on time.</p>,
            bullets: [
              "Expert Takers",
              "Guaranteed A and A Plus",
              "24/7 Support",
              "100% Confidential"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;