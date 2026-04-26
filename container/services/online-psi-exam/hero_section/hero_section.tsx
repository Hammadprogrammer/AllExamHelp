"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "PSI Exam Help",
            heading: <>Skilled Exam Takers For Hire Offering Secure PSI Exam Support</>,
            subText: <p>Prepare smarter with our online PSI exam help services. We will give descriptions, on the exam instructions, and exam techniques that assist you in becoming a successful nurse.</p>,
            bullets: [
              "Single-Step Instructions on Each Part",
              "Practice that Reflects PSI Actual Exam",
              "Quick and Quality Service within Tour Time",
              "247 Online Support to Cater Urgent Needs"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Online PSI Help",
            heading: <>Get Expert PSI Exam Takers For Hire</>,
            subText: <p>Concerned about your next PSI? Skilled tutors are on-hand 24/7 and provide you with expertise-based guidance, practice and step-by-step assistance on each part of the exam.</p>,
            bullets: [
              "Individual PSI Study Plans",
              "Practice Question Help Instantly",
              "Live One-on-One Tutoring Sessions",
              "Student Only Discounts"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Get On-Time",
            heading: <>Hire PSI Exam Taker For Exams With Guaranteed Support</>,
            subText: <p>Our tutors are available to provide you with clear explanations, practice questions, and detailed feedback. Every lesson is tailored to your needs, so you learn faster and smarter.</p>,
            bullets: [
              "Expert PSI Tutors",
              "100% Confidential Help",
              "24/7 Live Support",
              "Affordable Prices"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;