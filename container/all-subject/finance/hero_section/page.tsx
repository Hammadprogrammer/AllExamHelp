import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Finance Class Bullets array
  const points = [
    "Domestic Logins (No IP Bans): Access safely from anywhere.",
    "Money-Back Grade Guarantee: Get A or B, or your money back.",
    "24/7 Expert Assistance: Help anytime for assignments and classwork."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Take My Online Finance Class for Me | <span>A or B Grade Assured</span></>
        }
        // New Subtext
        subText={
          <p>
            Boost your grades effortlessly with our online finance class help, designed 
            to guide you through your entire finance class with ease. Get expert support 
            that guarantees an A or B grade, so you can achieve academic success 
            stress-free.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}