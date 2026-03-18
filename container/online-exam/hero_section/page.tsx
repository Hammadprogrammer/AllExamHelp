
import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineHero() {
  
  // Bullets array
  const points = [
    "With us A+ Grades are guaranteed",
    "Subject matter specialist",
    "Also offer proctored exam solutions."
  ];

  return (
    <main>
      <Hero 
        // Heading pass ho rahi hai
        heading={
          <>Hire someone to take my online exam for me and skyrocket your grades</>
        }
        // Subtext pass ho raha hai
        subText={
          <p>
            Tired of preparing for a daunting online exam? Don’t panic and hire our top-tier online exam help. Our take my online exam solutions take all the pressure and stress off your shoulders. Hire us and enjoy better grades today!          </p>
        }
        // Bullets array pass ho raha hai
        bullets={points}
      />
    </main>
  );
}