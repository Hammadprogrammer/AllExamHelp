import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Psychology Class Bullets array
  const points = [
    "6500+ Satisfied Students: Helping hundreds achieve better grades.",
    "150+ PhD experts: Expert guidance from seasoned educators.",
    "Trusted & Reliable: Proven support for every student."
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Top Grades Made Easy: <span>Hire Online Psychology Class Takers Now</span></>
        }
        // New Subtext
        subText={
          <p>
            From class attendance to maintaining originality, our team of professionals 
            excels in every aspect. Thanks to the proficiency of our team, we brilliantly 
            meet your plea to take my online psychology class for me.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}