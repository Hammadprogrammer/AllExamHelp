import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Philosophy Class Bullets array
  const points = [
    "Metaphysics Expertise: PhD Metaphysics & Ontology experts.",
    "Expert Assistance: Clear solutions for Epistemology, Logic, and Critical Thinking.",
    "24/7 Support: If you are having trouble, we are available around the clock."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Take My Online Philosophy Class| <span>Get A+ Grades Fast</span></>
        }
        // New Subtext
        subText={
          <p>
            Get reliable online philosophy class help with expert guidance on essays, 
            assignments, and complex concepts. Boost your confidence, improve performance, 
            and achieve A-grade results with personalized academic support tailored to your 
            needs.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}