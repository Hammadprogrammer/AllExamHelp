import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // Updated Bullets array
  const points = [
    "5000+ PhD Writers: Experts across multiple subjects.",
    "Custom Assignments: Written to your exact requirements.",
    "Quick Turnaround: Fast delivery for tight deadlines."
  ];

  return (
    <main>
      <Hero 
        // Updated Heading
        heading={
          <>Get High-Quality Assignment Writing Service at <span>Low Prices</span></>
        }
        // Updated Subtext
        subText={
          <p>
            Hire our professional assignment writing service that makes academic tasks easier for students. Our service is affordable, and every assignment is written 100% from scratch to ensure originality and quality.
          </p>
        }
        // Updated Bullets array pass ho raha hai
        bullets={points}
      />
    </main>
  );
}