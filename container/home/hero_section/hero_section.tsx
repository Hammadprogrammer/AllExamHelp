import React from 'react'
import Hero from '@/container/All-props-comp/hero-setion/hero_section';


const HeroSection = () => {
  // Bullets Data
  const heroBullets = [
    "On-Time Submission: Every class, Every Time",
    "Plagiarism-Free class work: Fully Custom & Written from Scratch",
    "24/7 Expert Support: Assistance Whenever You Need It"
  ];

  return (
    <>
      <Hero 
        heading={
          <>Take My Online Class for Me by <span>Trusted Experts</span></>
        }
        subText={
          <p>
            Struggling alone with your poor class grades? Fret not, <strong>Hire Class Buddy </strong>
            is your one-stop shop for all your online class struggles. All you 
            have to do is request <strong>“do my online class for me”</strong>.
          </p>
        }
        bullets={heroBullets}
      />
      
   
    </>
  )
}

export default HeroSection