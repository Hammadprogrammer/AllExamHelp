import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Nursing Class Bullets array
  const points = [
    "24/7 Online Support: Get help anytime with assignments, quizzes, day or night.",
    "Confidentiality Guarantee: Your personal information is fully protected and private.",
    "Money-Back Guarantee: Not satisfied with your assignment? Get a full refund, risk-free."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Hire Professional Help <span>for Nursing Class Online and Skyrocket Your Grades</span></>
        }
        // New Subtext
        subText={
          <p>
            Just get our best nursing class help and we will provide you with the 
            professional tutors who guide you through each assignment, discussion and 
            presentation. From timely submissions to accurate solutions and personalized 
            assistance.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}