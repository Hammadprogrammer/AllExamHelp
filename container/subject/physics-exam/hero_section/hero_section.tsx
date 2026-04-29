"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Get On-Time",
            heading: <>Hire Our Professional Physics Exam Takers For Success</>,
            subText: (
              <p>
                We are skilled professionals who have been through the physics 
                material themselves and with our help, you will become one of 
                the best scholars in this field.
              </p>
            ),
            bullets: [
              "Step-by-Step Concept Explanations",
              "Real-Time Problem-Solving Support",
              "Schedule Flexibility for ALL Time Zones",
              "Guaranteed Accurate and Timely Assistance"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;