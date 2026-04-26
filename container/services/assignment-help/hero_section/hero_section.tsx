"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Professional Assignment Support",
            heading: <>Professional Assignment<br/>Support</>,
            subText: <p>Our online assignment help service provides professional assignment experts to efficiently manage your assignment with precision and care. We offer 100% guaranteed privacy, on-time delivery, and overall satisfaction. Our assignment help services ensure quality assignment results to help you meet your academic goals easily.</p>,
            bullets: [
              "Confidential and secure process",
              "Professional experienced experts",
              "Timely submission of work",
              "Quality assurance guaranteed"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Professional Assignment Experts",
            heading: <>A Trusted Help Service You Deserve</>,
            subText: <p>We provide reliable assignment takers for hire, who work to manage your assignments securely with utmost confidence. When you hire an assignment taker, you areassured of accuracy and privacy. Our professional assignment service will ensure your assignment is finished stress-free.</p>,
            bullets: [
              "24/7 live expert support",
              "Academic experienced specialists",
              "Secure and safe operations",
              "Guaranteed quality"
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