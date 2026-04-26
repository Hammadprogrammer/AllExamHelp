"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Achieve Timely Results",
            heading: <>Utilize Our Safe & Valid Online Insurance Exam Help Service</>,
            subText: <p>We offer safe and valid online insurance exam help. Our experienced and qualified tutors are available 24/7 to take your exams, covering each part with detailed solutions, real-time feedback, and tailored exam techniques.</p>,
            bullets: [
              "Professional Insurance Tutors",
              "Complete Data Privacy",
              "24/7 Student Assistance",
              "Cost-Value Packages"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Satisfied Experts",
            heading: <>Enhance Your Knowledge While Feeling Confident</>,
            subText: <p>You will feel confident and ready using our comprehensive insurance exam help. Structured will help you prepare; we provide experts who take your exams and guarantee you the best results you will get. Our online insurance exam will give you clarity on complex policies, coverage plans, and regulations.</p>,
            bullets: [
              "One-on-one help for better comprehension",
              "Exams in a real-time environment",
              "Timely assistance and result-driven plans",
              "24/7 availability of experts"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Get On-Time",
            heading: <>Find Professional Insurance Exam Takers For Hire</>,
            subText: <p>Highly anxious about your upcoming exam? Our insurance exam takers for hire will provide expert staffing support at any time, and will be there to help you take your exams seamlessly. When you hire insurance exam takers, we guarantee accuracy, confidentiality, and timely submissions for your online exams.</p>,
            bullets: [
              "Individualized studying plans for each student",
              "Instant solution for your exam question",
              "Interactive, engaging, and private online sessions",
              "Discounts for loyal clients"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;