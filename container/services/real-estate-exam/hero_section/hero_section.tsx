"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Real Estate Exam Help",
            heading: <>Professional Experts You Can Trust</>,
            subText: <p>All of our professionals are subject-matter experts who provide students with professional, secure, and accurate real estate exam help. We provide customized support according to your needs, so you can focus on your professional objectives while we handle the rest.</p>,
            bullets: [
              "Reliable subject matter experts",
              "100% secure exam process",
              "Guaranteed high-quality results",
              "Complete privacy and satisfaction"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Exam Help by Professionals",
            heading: <>Confidential Real Estate Exam Help</>,
            subText: <p>We are a trusted real estate exam taker for hire who takes real estate exams for students. Your exam is done for you in complete privacy and with guaranteed results and satisfaction every time.</p>,
            bullets: [
              "Safe and secure privacy while taking exams",
              "Personalized real estate exam help",
              "PhD professionals available anytime",
              "Real estate exam services you can trust"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Reliable Online Test Support",
            heading: <>Score High With Online Real Estate Exam Help</>,
            subText: <p>Hiring a real estate exam taker means you will get reliability and peace of mind. Our personnel will ensure that you obtain the highest score to meet strict confidentiality and reliability requirements in the real estate industry.</p>,
            bullets: [
              "Warm and competent test-taking",
              "Full data encryption system",
              "Dedicated support team available 24/7",
              "100% satisfaction guarantee always"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;