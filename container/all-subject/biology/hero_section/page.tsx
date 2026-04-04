import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Biology Class Bullets array
  const points = [
    "With us A+ Grades are guaranteed",
    "Professional PhDs in biology",
    "All progress track record"
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Take My Online Biology Class - <span>Trusted Online Biology Tutors</span></>
        }
        // New Subtext
        subText={
          <p>
            Let our expert tutors take over your online biology class and enjoy stress-free 
            learning. Hire trusted biology tutors from our platform and leave your biology 
            class worries behind. We handle everything for you!
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}