import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Absolutely lifesaving! The team helped me complete an online quiz in record time by providing correct answers and fast delivery. This service helped me so much, I ended up getting a score I never thought possible.” ",
      author: "Order # 28408 | Editing"

    },
    {
      text: "“I was freaking out about some upcoming tests, and these experts managed it all professionally. They provided quick responses, correct answers and crystal-clear directions. They allowed me to perform well in other classes, and I aced my tests. Totally worth every penny! ",
      author: "Order # 28409 | Engineering"
    },
    {
      text: "“The best quiz help service I have ever used. All my test answers were sent on time and everything was 100 per cent accurate. “I went from failing across all subjects to getting straight A’s. ",
      author: "Order # 28410 | History"
    },
    {
      text: "Top quality and completely reliable! They completed my online tests early and communicated with me throughout the process to confirm everything would meet test requirements. I was very impressed by their professionalism.”",
      author: "Order # 28410 | History"
    }, {
      text: "Amazing experience! Reply time was lightning fast, solutions correct and communication excellent. Which is I used this service to help me get ahead in my courses, with far less stress and anxiety. They handle the test so that I can focus on learning!” ",
      author: "Order # 28411 | History"
    }
  ];

  const faqsData = [
    { q: "Are you going to help me do my test for me? ", a: "Ans. Yes! Most of the courses can receive assistance on online tests as well and here. we have a bunch of experienced tutors who will help you not just with quizzes but also in online tests. Whether it is a multiple selection question, short-answer, you will get a score without any hassle." },
    { q: "Are your quizzes and test solutions being 100% original and accurate?  ", a: "Ans. Absolutely. Yes, they are all written by someone who knows the subject masterfully. We check every answer for being correct but also for its quality, so you know that what you get is going to be academically sufficient." },
    { q: "Is it safe for people to use your service while taking online quizzes and tests?   ", a: "Ans. Yes. Your privacy and security matter deeply to us. All of our communications with you and tutors are private; we do not share your personal data with any 3rd parties. We offer our customers secrecy with quizzes and tests." },
    { q: "What subjects do you cover for quizzes and tests", a: "Ans. We have expert coverage on more than 5,000 subjects, including business, IT, nursing, engineering, math, science and humanities. Our tutors have the background and experience to propel you to success, whether your course is advanced or beginner level." },
    { q: "How fast can you take quizzes or tests for me?  ", a: "Ans. Our service is quick and reliable, even when time is of the essence. Whether its your quiz or test that has to be completed in half an hour, or within hours? You and our experts are guaranteed to get through precisely on time." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="5,000+ Students Succeeded — You can be the next!"
        subtitle="Read what our students have to say about their journey."
      />
    </main>
  );
}