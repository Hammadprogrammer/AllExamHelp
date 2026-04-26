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
            heading: <>Hire Our Best Online HESI Exam Help Service</>,
            subText: <p>We have 24/7 expert tutors ready to assist you in preparing your HESI exam with practice questions, detailed explanations and step by step online exam assistance.</p>,
            bullets: [
              "Expert HESI Tutors",
              "100% Confidential Help",
              "24/7 Live Support",
              "Affordable Prices"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "HESI Exam Help",
            heading: <>Increase Your Confidence, And Achieve Higher Scores</>,
            subText: <p>prepare smarter with our online HESI exam help services. We will give descriptions, on the job instructions, and exam techniques that assist you in becoming a successful nurse.</p>,
            bullets: [
              "Single-step instructions on each part",
              "Practice HESI Examinations",
              "Quick and quality Service within your time"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Study Smarter, Score Higher",
            heading: <>Get Expert HESI Exam Takers For Hire</>,
            subText: <p>Concerned about your next HESI? Skilled tutors are on-hand 24/7 and provide you with expertise-based guidance, practice and step-by-step assistance on each part of the exam.</p>,
            bullets: [
              "Individual HESI Study Plans",
              "Practice Question Help Instantly",
              "Live One-on-one tutoring sessions",
              "Student Only Discounts"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;