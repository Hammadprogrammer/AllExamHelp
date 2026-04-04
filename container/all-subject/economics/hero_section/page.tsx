import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Economics Class Bullets array
  const points = [
    "Expert Tutors: Help from highly qualified economics professionals",
    "24/7 Availability: Get support anytime, anywhere",
    "Comprehensive Assistance: Help with assignments, projects, and homework"
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Do My Online Economics Class <span>- US-Based Tutors You Can Trust</span></>
        }
        // New Subtext
        subText={
          <p>
            Take the stress out of your studies with expert online economics class help 
            tailored to boost your grades and confidence. From assignments to exams, get 
            reliable support that saves time and guarantees results.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}