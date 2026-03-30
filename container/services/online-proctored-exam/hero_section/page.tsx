import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // Updated Bullets array for Proctored Exams
  const points = [
    "Qualified experts: We have PhD-qualified tutors for your proctored exams.",
    "Personalized & Confidential: One-on-one support with complete privacy.",
    "24/7 Quick Help: Reliable assistance anytime you need it."
  ];

  return (
    <main>
      <Hero 
        // Updated Heading
        heading={
          <>Do My Proctored Exam Help – <span>By Proctored Experts</span></>
        }
        // Updated Subtext
        subText={
          <p>
            We have 350+ highly qualified proctored exam takers to help you, 
            and with whom a ‘do my proctored exam’ request will be solved 
            instantly. Trust us for your proctored exam help and ace your 
            grades like a breeze!
          </p>
        }
        // Passing the updated array
        bullets={points}
      />
    </main>
  );
}