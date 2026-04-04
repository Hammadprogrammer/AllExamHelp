import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Law Class Bullets array
  const points = [
    "Cheap Deals – Affordable law class help without compromising quality.",
    "Certified Experts – Qualified professionals for classwork.",
    "24/7 Support – Assistance anytime with live customer support."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Do My Law Class for Me – <span>Skip the Stress, Keep the Success!</span></>
        }
        // New Subtext
        subText={
          <p>
            Struggling with law class assignments? We will do the law class for you and 
            save your valuable time and energy. We have well-trained professionals who will 
            take your law class and ensure that you get the grades that you deserve. Focus 
            on your stuff, take a reliable online law class help.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}