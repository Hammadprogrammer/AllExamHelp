"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Get Full-Time Help",
            heading: <>Hire Our Reliable Online Test Help Service</>,
            subText: <p>Relax about online tests and quizzes. Our experienced tutors are here to lead you step-by-step and show you how to understand questions, improve and build your confidence with full confidence.</p>,
            bullets: [
              "Certified Test and Quiz Masters",
              "100% Privacy and Confidentiality",
              "Round-the-Clock Support",
              "Student-Friendly Pricing"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Stress-Free test Help",
            heading: <>Hire Experts To Take Your Online Test</>,
            subText: <p>No need to worry about deadlines or tough sections. Our professional tutors handle your online test securely while ensuring top results and complete confidentiality.</p>,
            bullets: [
              "Expert online test takers",
              "Guaranteed score improvement",
              "Safe and discreet process",
              "Perfect for busy students"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Guaranteed top Results",
            heading: <>Trusted Online Test Assistance Service</>,
            subText: <p>Focus on your career, studies, or personal life while we manage your online test for you. With expert guidance and full support, success is just a click away.</p>,
            bullets: [
              "Proven online test specialists",
              "24/7 student support",
              "High scores assured",
              "Affordable test-taking service"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;