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
            heading: <>Best Take Your Ged Test Online Help</>,
            subText: <p>Our expert tutors are standing by 24/7 to help you prep for your GED test with GED questions, and online test help.</p>,
            bullets: [
              "Expert GED Tutors",
              "100% Confidential Help",
              "24/7 Live Support",
              "Affordable Prices"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Pass with Confidence",
            heading: <>Reliable Take Your GED Online Service</>,
            subText: <p>Improve your GED scores through a tutor-led step-by-step process. We offer actual exam practice, study materials and individual assistance to ensure you are prepared on the day of the test.</p>,
            bullets: [
              "Personalized Study Plans",
              "Real GED Practice Questions",
              "Fast & Reliable Assistance",
              "Guaranteed Satisfaction"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Your Success, Our Priority",
            heading: <>Looking For Take My GED Exam For Me</>,
            subText: <p>Do not allow test pressure to drag you down. We offer online assistance with GED, which allows you to get 24/7 access to tutors who are familiar with the exam.</p>,
            bullets: [
              "Flexible Learning Options",
              "Confidential & Secure Help",
              "24/7 Live Tutoring Sessions",
              "Low-priced Test Preparation Packages"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;