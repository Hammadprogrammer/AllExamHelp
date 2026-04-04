import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: History Class Bullets array
  const points = [
    "PhD History Tutors: Expert help from highly qualified professionals.",
    "Secure Access: Safe submissions with protected VPN.",
    "100% Confidential: Your data and work remain fully private."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Hire Someone to Take My Online History Class <span>for Me- A Grade Guaranteed</span></>
        }
        // New Subtext
        subText={
          <p>
            Ace your grades with expert online history class help – fast, reliable, and stress-free! 
            Our professional tutors offer top-tier help with online history class solutions. 
            With timely delivery and personalized support, staying on top of your course 
            has never been easier.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}