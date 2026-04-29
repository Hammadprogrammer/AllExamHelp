"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Quick & Reliable Support",
            heading: <>Hire Our Skilled Sociology Exam Help For Top Results</>,
            subText: (
              <p>
                Our sociology tutors can tackle all topics of the sociology, 
                from classical theories to contemporary methods. They 
                make simple study plans and coach you through the 
                challenges,
              </p>
            ),
            bullets: [
              "Precise Discussions of Sociology Concepts",
              "Live Help Exam Preparation",
              "Urgent Exam Availability",
              "Reliable Timely Guidelines"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;