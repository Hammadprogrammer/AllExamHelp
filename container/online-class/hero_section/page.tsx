
import Hero from "@/container/All-props-comp/hero-setion/page";

export default function OnlineClassHero() {
  
  // Bullets array
  const points = [
    "On-Time Submissions: All work completed and submitted on time",
    "Confidential & Reliable: 100% privacy and reliable support.",
    "All Subjects Covered: Help available for many subjects."
  ];

  return (
    <main>
      <Hero 
        // Heading pass ho rahi hai
        heading={
          <>Top-Tier Online Class Help Secure Your A+ Grade | <span>100% Success Guaranteed</span></>
        }
        // Subtext pass ho raha hai
        subText={
          <p>
           Struggling with do my class? Our top-notch online class help services are designed for students in the USA—secure your A+ grade with our tutors. Get reliable assistance, timely submissions, and the confidence to succeed with 100% dedication to your academic success.
          </p>
        }
        // Bullets array pass ho raha hai
        bullets={points}
      />
    </main>
  );
}