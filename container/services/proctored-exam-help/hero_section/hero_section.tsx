"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Expert Proctored Help",
            heading: <>Do My Proctored Exam</>,
            subText: <p>Looking for “take my online proctored exam for me”? Ours allows it, with safe, discreet, effective ways to get you there.</p>,
            bullets: [
              "Fast, reliable exam takers",
              "We handle technicalities",
              "Stress-free solutions",
              "No questions asked"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "24/7 Proctored Exam Help",
            heading: <>Hire Someone To Take Online Proctored Exam</>,
            subText: <p>When examination stress gets to high, you can confidently hire someone to take online proctored exam. We are smooth through technicalities and academic crises.</p>,
            bullets: [
              "Safe, discreet exam help",
              "Expert proctors with proven success",
              "Confidential and secure",
              "Available for all exam types"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Help with Proctored Exam",
            heading: <>Take My Online Proctored Exam For Me</>,
            subText: <p>Get secure and reliable online proctored exam help from our experts. We ensure a seamless and confidential experience, so you can focus on achieving your best results.</p>,
            bullets: [
              "Round-the-clock support",
              "Expert tutors on demand",
              "Help for any subject",
              "Flawless performance guaranteed"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;