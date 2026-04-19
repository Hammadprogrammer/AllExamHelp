import React from 'react'
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  const heroBullets = [
    "Smart Study Methods",
    "Expert Guidance",
    "Stress-Free Learning",
    "Proven Success"
  ];

  const heroBgImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  ];

  return (
    <>
      <Hero 
        topText="Study Less Score More"
        heading={
          <>Do My Exam For Me<br/>Service To Boost Score,</>
        }
        subText={
          <p>
            All Exam Help offers a smart way to learn with online support and guidance. We concentrate on helping you learn more, faster, and easier. No overthinking, just confidence . we&apos;re behind you all the way.
          </p>
        }
        bullets={heroBullets}
        bgImages={heroBgImages}
      />
    </>
  )
}

export default HeroSection
