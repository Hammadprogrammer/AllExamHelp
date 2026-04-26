"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
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