"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Success Guaranteed",
            heading: <>Hire A Professional Online<br/>Course Taker For Hire</>,
            subText: <p>Students depend on us for online course help and to hire experienced experts to support them with their online tasks, without worry. Whether you're seeking reliable course help or require course help, we ensure confidentiality and accuracy.</p>,
            bullets: [
              "Course information is strictly confidential.",
              "Subject experts manage course",
              "Course can be done at any time",
              "Focuses on great grades"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Help with an Online Course",
            heading: <>Best Online Course Help<br/>For You</>,
            subText: <p>We provide reliable assistance with online course for college students, so they never have to worry about completing tasks on time or accurately. Whether you need help with an online course from our experts, we are confident in providing this service accurately, discreetly, and on time.</p>,
            bullets: [
              "Encryption systems",
              "Offering expert advice",
              "Submissions for every course",
              "Get remarkable success"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Online Course Help",
            heading: <>Get Professional For Online<br/>Course Help</>,
            subText: <p>Our experts provide help with online courses that take the stress out of course and prep. Our experts are professional-level individuals from diverse backgrounds, specifically trained to provide students with reliable online course solution while maintaining their confidentiality.</p>,
            bullets: [
              "Deliver a step-by-step online course",
              "Meet course schedules across all time zones",
              "Development of personalized strategies",
              "Monitor students and the course process"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;