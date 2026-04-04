import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Business Class Bullets array
  const points = [
    "On-Time Delivery: Assignments delivered before deadlines.",
    "100% Original Work: Plagiarism-free, properly cited content.",
    "Confidential Service: Your information stays private and secure."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Top-Rated & Affordable Online <span>Business Class Help for USA Students</span></>
        }
        // New Subtext
        subText={
          <p>
            Get top-rated and affordable online business class help designed for USA students 
            who need dependable support with assignments, projects, and coursework. 
            We focus on delivering high-quality academic assistance at low prices.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}