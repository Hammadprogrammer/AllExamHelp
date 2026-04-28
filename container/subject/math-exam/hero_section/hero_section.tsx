"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Math Exam Help",
            heading: <>Top-Notch Math Exam Help Services</>,
            subText: (
              <p>
                When students are looking for help with math exams, they can rely 
                on our professional do my math exam service. We hire qualified 
                exam tutors who can securely take math exam and guarantee a 
                passing grade.
              </p>
            ),
            bullets: [
              "Expert PhD-Level Math Exam Help",
              "Confidential and Secure Exam Process",
              "On-Time and Accurate Submissions",
              "Trusted Exam Experts for Hire"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;