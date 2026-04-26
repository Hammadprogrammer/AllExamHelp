"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Trusted Exam Professionals",
            heading: <>Professional CompTIA<br/>Exam Help</>,
            subText: <p>Our technical professionals have in-depth subject-matter expertise, ensuring top-notch performance so you can achieve maximum results without the hassle of paper preparation.</p>,
            bullets: [
              "Guaranteed to get a top grade",
              "Available 24/7",
              "Experienced exam takers",
              "Expert exam assistance"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Premium CompTIA Exam Help Online",
            heading: <>Reliable CompTIA Exam<br/>Assistance</>,
            subText: <p>Our CompTIA exam takers for hire consistently provide accurate, timely, and secure assistance. We guarantee confidentiality, while our exam takers are professionals who assist students to achieve high grades with professional exam help.</p>,
            bullets: [
              "Full Confidentiality",
              "Secure exam process",
              "PhD professionals",
              "Guaranteed high scores"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Timely Submission",
            heading: <>Affordable Take My Online<br/>CompTIA Exam Help</>,
            subText: <p>With our CompTIA exam help, you will be able to relax while certified exam takers take your exam. Our affordable pricing plans will never break your bank and fulfill all your specific requirements.</p>,
            bullets: [
              "On time submission",
              "24/7 availability",
              "Refund policy",
              "Technical experts"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;