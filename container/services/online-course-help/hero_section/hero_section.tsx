"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Guaranteed Top Results",
            heading: <>Best & Reliable Help With<br/>Online Exam</>,
            subText: <p>Keep concentrating on your career, studies, or life while we take care of your exams. You’re always in safe hands with our professional advice and support.</p>,
            bullets: [
              "Proven online exam specialists",
              "Round-the-clock student support",
              "High scores assured",
              "Cost-friendly services"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Stress-Free Exam Help",
            heading: <>Top Qualified Exam Takers<br/>For Hire</>,
            subText: <p>Deadlines and hard questions are no longer issues. Through our safe online exam help, We are a team of trained tutors who will take you to success.</p>,
            bullets: [
              "Skilled exam takers online",
              "Guaranteed score improvement",
              "Safe and discreet process",
              "Perfect for busy students"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Get Full-Time Help",
            heading: <>Trustworthy Online Exam<br/>Help Service</>,
            subText: <p>Relax and get over the online exams. That’s why we have our professional tutors on hand to expertly guide you through each and every process, fully preparing you for anything you might face.</p>,
            bullets: [
              "Certified exam takers for sit for exams",
              "100% privacy and confidentiality",
              "24/7 live support",
              "Affordable pricing for students"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;