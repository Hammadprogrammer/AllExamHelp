import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // Naya content: Bullets array
  const points = [
    "200+ Subjects: Expert help across a wide range of subjects.",
    "100% High Grades: Focused support to boost your scores.",
    "Zero-Risk Privacy: Complete confidentiality, always secure."
  ];

  return (
    <main>
      <Hero 
        // Naya Heading
        heading={
          <>Pay Someone to Take My Online Test at <span>Affordable Rates-100% Success Guaranteed</span></>
        }
        // Naya Subtext
        subText={
          <p>
            We offer reliable do my test for me services across the USA at highly affordable rates, 
            ensuring you get the support you need without breaking the bank. Our expert 
            team is committed to delivering accurate, timely, and confidential assistance 
            tailored to your requirements. With a 100% success guarantee, you can trust us 
            to help you achieve the results you deserve.
          </p>
        }
        // Updated Bullets array pass ho raha hai
        bullets={points}
      />
    </main>
  );
}