import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Chemistry Class Bullets array
  const points = [
    "PhD Chemistry Tutors: Highly qualified professionals for all chemistry topics.",
    "24/7 Support: Get help and updates anytime, day or night.",
    "Confidential Service: Your information and classwork stay fully secure."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Struggling with Chemistry? <span>Get Top-Notch Online Chemistry Class Help Today!</span></>
        }
        // New Subtext
        subText={
          <p>
            Struggling with chemistry? Get top-notch online chemistry class help today and tackle your 
            assignments, projects, and classwork with ease. Our experts provide reliable, 
            high-quality support without any hassle—so you can stay on track and succeed 
            confidently.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}