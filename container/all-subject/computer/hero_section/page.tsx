import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Computer Class Bullets array
  const points = [
    "Expert PhD Tutors: Guidance from highly qualified professionals.",
    "Timely Delivery: Fast, reliable submissions to meet all deadlines.",
    "Affordable Services: Top-quality help at student-friendly prices."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Affordable Online Computer Class Help in the USA- <span>Top-Rated Computer Class Takers for Hire</span></>
        }
        // New Subtext
        subText={
          <p>
            Get affordable online computer class help in the USA from professional PhD tutors 
            who deliver top-quality support for assignments, projects, and coursework. Our 
            expert guidance ensures accurate, timely, and stress-free solutions that help 
            you stay ahead and achieve better results effortlessly.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}