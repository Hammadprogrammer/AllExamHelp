"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Hassle-Free GRE Help",
            heading: <>Hire Someone To Take Your Online GRE</>,
            subText: <p>Too busy to prepare? Choose our specialist tutors to take my GRE test online. Receive assured results with full privacy and expert assistance.</p>,
            bullets: [
              "Expert GRE test takers",
              "Secure and discreet service",
              "Guaranteed higher scores",
              "Stress-free process"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "GRE Success Help",
            heading: <>Professional GRE Test Help Services</>,
            subText: <p>Get our custom GRE help service to get the highest score, all the while learning time-saving tips and score-boosting strategies, so you can pass the GRE with flying colors!</p>,
            bullets: [
              "Expert GRE tutors",
              "Custom study plans",
              "Time-saving tips",
              "Score-boosting practice"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Guaranteed GRE Success",
            heading: <>Professional Online GRE Test Assistance</>,
            subText: <p>Concentrate on your priority, and we will deal with your take my GRE test. You can get best grades in the online GRE test even with minimum preparation using the guidance of our GRE test experts.</p>,
            bullets: [
              "Reliable test-taking experts",
              "High scores assured",
              "Confidential and safe process",
              "Perfect for busy students"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;