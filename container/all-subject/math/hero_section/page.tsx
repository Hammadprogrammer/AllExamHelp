import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Math Class Bullets array
  const points = [
    "Algorithmic Pattern Matching: Real-time solving keeps your activity natural.",
    "IP Masking for Portals: Location-matched IP prevents suspicious logins.",
    "Working Process Security: Solutions match your working style consistently."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Say “Take My Online Math Class for Me” <span>and Hire Professional Tutors in the USA</span></>
        }
        // New Subtext
        subText={
          <p>
            Stop struggling with tough numbers. Get online math help at affordable rates for 
            calculus, algebra, and complex problems with ease. Leave your math burden to us 
            and enjoy seeing a lift in your poor grades without lifting a finger.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}