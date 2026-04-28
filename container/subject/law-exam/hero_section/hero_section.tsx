"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Law Exam Help",
            heading: <>Professional Law Exam Helpers For Hire</>,
            subText: (
              <p>
                For students struggling with law exams, they can take advantage of 
                our professional online exam help services. We have professional 
                exam expert for hire who take exams on a student's behalf. We 
                maintain complete confidentiality and even guarantee the best 
                possible results! Students can easily get help taking law exams 
                through our secure system from experts.
              </p>
            ),
            bullets: [
              "100% Secured and Encrypted Process",
              "Trusted Professionals, PhD Experts",
              "Law Exam Help with Accuracy",
              "Law Exams Submitted on Time"
            ],
            bgImage: "/bg1.avif" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;