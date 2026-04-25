"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Study Less Score More",
            heading: <>Do My Exam For Me<br/>Service To Boost Score,</>,
            subText: <p>All Exam Help offers a smart way to learn with online support and guidance. We concentrate on helping you learn more, faster, and easier. No overthinking, just confidence . we&apos;re behind you all the way.</p>,
            bullets: ["Smart Study Methods", "Expert Guidance", "Stress-Free Learning", "Proven Success"],
            bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          },
          {
            topText: "Expert Exam Assistance",
            heading: <>Secure Top Grades<br/>With Our Professionals</>,
            subText: <p>We offer unparalleled assistance for all your online exams. From timed quizzes to proctored finals, our PhD tutors are ready to ensure you achieve the academic success you deserve.</p>,
            bullets: ["100% Confidentiality", "Subject Experts", "24/7 Support", "Guaranteed Grades"],
            bgImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop"
          },
          {
            topText: "Stress-Free Academics",
            heading: <>Focus On What Matters<br/>Leave The Exams To Us</>,
            subText: <p>Balance your life, work, and studies effortlessly. By letting us handle the tough exams, you can dedicate your time to practical learning and personal growth without academic anxiety.</p>,
            bullets: ["Affordable Pricing", "Timely Delivery", "Secure Process", "Money-back Guarantee"],
            bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;
