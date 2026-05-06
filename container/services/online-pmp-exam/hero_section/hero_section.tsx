"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Reliable PMP Exam Help",
            heading: <>Trusted Online PMP Exam Help For Busy Students</>,
            subText: <p>Looking for trustworthy take my PMP exam help? Our service offers complete privacy and expert guidance, ensuring you stay confident and prepared throughout your exam.</p>,
            bullets: [
              "Reliable PMP exam help",
              "Perfect for busy students",
              "Expert support for success",
              "Stay confident and ready"
            ],
            bgImage: "/bg1.avif" // image_85f075.jpg ke liye
          },
          {
            topText: "Expert Guidance Anytime",
            heading: <>24/7 Online PMP Exam Helpers For Complete Support</>,
            subText: <p>From preparation to live exam support, our professional online PMP exam helpers ensure you never feel alone during your exam journey.</p>,
            bullets: [
              "Help anytime you need",
              "Flexible exam support",
              "Expert PMP exam helpers",
              "Never feel alone"
            ],
            bgImage: "/bg2.avif" // image_85f098.jpg ke liye
          },
          {
            topText: "Confidential and Secure Service",
            heading: <>Private And Secure PMP Exam Assistance You Can Rely On</>,
            subText: <p>Your privacy matters. We provide highly confidential assistance for busy students searching for “take my PMP exam for me” solutions without worry.</p>,
            bullets: [
              "100% confidential service",
              "Safe, secure assistance",
              "Privacy always protected",
              "Trusted worldwide support"
            ],
            bgImage: "/bg3.avif" // image_85f0d3.jpg ke liye
          }
        ]}
      />
    </>
  );
}

export default HeroSection;