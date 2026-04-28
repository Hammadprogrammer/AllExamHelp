"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Economics Exam Help",
            heading: <>Get Cheap Economics Exam Assistance Solutions</>,
            subText: <p>At our reliable online exam help portal, you can trust. We facilitate and support students by connecting them to professional experts. If students are hiring an exam taker, we want students to relax.</p>,
            bullets: [
              "Secure Login",
              "Quick Turnaround",
              "Verified Experts",
              "Customized Solutions"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;