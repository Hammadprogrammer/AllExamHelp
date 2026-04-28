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
            heading: <>Hire Someone To Take My Biology Exam For Me Better Grades</>,
            subText: <p>Our top biology tutor will help you through all chapters and topics of your exam! With friendly and bespoke service, we remain with you throughout the whole process.</p>,
            bullets: [
              "Clear Step-by-Step Concepts",
              "Fast Help with Tough Questions",
              "Urgent Exam Help Availability",
              "100% Guaranteed Results"
            ],
            bgImage: "/bg1.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;