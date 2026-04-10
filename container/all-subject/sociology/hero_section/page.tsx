import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Sociology Class Bullets array
  const points = [
    "Guaranteed A or B Grades: Timely support for top results.",
    "Progressive Payments: Pay in easy instalments.",
    "Expert for Every Class: Qualified help in all branches."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Hire Someone to Take My Online Sociology Class- <span>100% Success Guaranteed</span></>
        }
        // New Subtext
        subText={
          <p>
            Your search for a top-notch sociology class help ends here! Hire our professional 
            sociology class takers and skyrocket your grades with ease. We offer secure and 
            confidential solutions to all your sociology class problems.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}