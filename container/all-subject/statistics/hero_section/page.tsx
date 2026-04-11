import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Statistics Class Bullets array
  const points = [
    "Secured IP: Dedicated IP ensures your class activities stay private.",
    "Safe Payment: Encrypted transactions keep your payments secure.",
    "24/7 Support: Get help anytime, day or night, for your class needs."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Pay Someone to Take My Online Statistics Class for Me - <span>100% Success Guaranteed</span></>
        }
        // New Subtext
        subText={
          <p>
            Looking for the best statistics class takers for hire? You are at right place. 
            We offer affordable yet professional solutions to all your statistics class problems!
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}