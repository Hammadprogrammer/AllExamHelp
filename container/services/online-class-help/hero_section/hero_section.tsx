"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Online Class Taker for hire",
            heading: <>Hire A Professional Online<br/>Class Taker</>,
            subText: <p>If you need online class help, an online class answer, or someone to take a class for you, our trusted and qualified experts continually meet students' needs. If you have PhD experts, then classes and assessments become stress-free experiences, grades are high, and students are 100% satisfied.</p>,
            bullets: [
              "24/7 Availability for Students",
              "Encrypted Systems",
              "Subject Matter Specialists for Precision",
              "Guaranteed Top Performance"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Online Class Help with Trusted Experts",
            heading: <>Trustworthy Online Class<br/>Help</>,
            subText: <p>Our PhD experts can help with online classes, online class support, and other degree class solutions. Students depend on our confidence in taking online classes, secure systems, and precise work. Relax while we take care of everything for you with our guaranteed online class assistance.</p>,
            bullets: [
              "Timely Completion",
              "Total Privacy for the Student",
              "PhD Experts with Experience",
              "100% Satisfaction"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Hire Online Class Taker",
            heading: <>Expert Online Class Help<br/>Services</>,
            subText: <p>We offer confidential assistance with online classes, trusted support, and expert guidance with class takers for hire. Our secure help with class means hassle-free assessments, the highest grades, and full student privacy with encryption.</p>,
            bullets: [
              "Scheduled flexibly around the globe",
              "PhD Class Tutors",
              "Receive Outstanding Updates",
              "Timely Submission"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;