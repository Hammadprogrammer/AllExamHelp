
import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // Bullets array
  const points = [
    "Full Course Coverage: Assignment, quiz and exam help.",
    "100% Human-Written: Plagiarism-free, high-quality work.",
    "Stress-free success: No hassle with your course, we do it all for you."
  ];

  return (
    <main>
      <Hero 
        // Heading pass ho rahi hai
        heading={
          <>Pay Someone to Do Online Course - <span>100% Success Guaranteed</span></>
        }
        // Subtext pass ho raha hai
        subText={
          <p>
Running an online course with other work can be daunting, but we’ve got your back. Our online course help services offer complete assistance for your respective assignments, quizzes, discussions, and exams to help you stay ahead and score high.          </p>
        }
        // Bullets array pass ho raha hai
        bullets={points}
      />
    </main>
  );
}