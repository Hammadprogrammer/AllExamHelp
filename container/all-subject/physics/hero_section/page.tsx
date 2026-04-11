import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Physics Class Bullets array
  const points = [
    "Subject-Specific Writers: Physics experts for accurate help.",
    "24/7 Support: Help anytime you need it.",
    "Budget-Friendly: Affordable and reliable class support."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Take My Online Physics Class – <span>On-Time, Accurate, and Confidential</span></>
        }
        // New Subtext
        subText={
          <p>
            Every Physics class is difficult. That is why we offer support tailored to 
            your class and needs. Whether it is assignments or class quizzes, we guide 
            you at every step. Get online physics class help designed just for you.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}