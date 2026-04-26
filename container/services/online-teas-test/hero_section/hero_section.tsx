"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Confidential and Secure Service",
            heading: <>Private And Secure ATI TEAS Test Assistance</>,
            subText: <p>Your privacy matters most. Learners who are looking for “hire someone to take my ATI TEAS test for me” rely on us because we are safe, discreet, and 100% confidential.</p>,
            bullets: [
              "100% secure and private",
              "Safe help for ATI TEAS test",
              "Privacy always protected",
              "Trusted by nursing students"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Reliable ATI TEAS Test Help",
            heading: <>Get Trusted Online ATI TEAS Test Help Today</>,
            subText: <p>We offer safe and effective ATI TEAS test help for busy students. We take care of the stress and let you move on to your career goals with expert advice and absolute discretion.</p>,
            bullets: [
              "Reliable ATI TEAS test support",
              "Expert helpers available online",
              "Perfect for busy students",
              "Boost confidence and results"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Expert Guidance Anytime",
            heading: <>24/7 Professional ATI TEAS Test Helpers</>,
            subText: <p>Our online ATI TEAS test helpers are here to help you every step of the way – from study, to prep, to live support.</p>,
            bullets: [
              "Support whenever you need",
              "Flexible help for your test",
              "Experienced ATI TEAS helpers",
              "Never face exams alone"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;