"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Reliable GMAT Test Help",
            heading: <>Stress-Free GMAT Solutions For Busy Students</>,
            subText: <p>Searching for how you can handle your GMAT test without stress? With our online GMAT test help you are getting to concentrate on other important places and not on cramming GCIA books.</p>,
            bullets: [
              "No cramming",
              "Save time",
              "Easy process",
              "Global access"
            ],
            bgImage: "/bg1.avif"
          },
          {
            topText: "Hire Experts with Privacy",
            heading: <>Professional GMAT Exam Takers – Discreet & Reliable Support</>,
            subText: <p>So when you go “I need to pay someone to take my online GMAT test” we give the service. Your privacy is our top priority and every service is strictly confidential.</p>,
            bullets: [
              "Full privacy",
              "Secure chats",
              "No third parties",
              "24/7 support"
            ],
            bgImage: "/bg2.avif"
          },
          {
            topText: "Trusted GMAT Experts",
            heading: <>Ace Your GMAT With Trusted, Confidential Help</>,
            subText: <p>Hire someone to do your online GMAT test for you, with full confidentiality and perfect score guaranteed. A safe, relaxed solution for the busy student anywhere in the world.</p>,
            bullets: [
              "100% private",
              "Expert test-takers",
              "Full test coverage",
              "Score guaranteed"
            ],
            bgImage: "/bg3.avif"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;