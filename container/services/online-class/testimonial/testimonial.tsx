import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Absolutely amazing service! My assignments are completed on time, thanks to the professional tutors. Their assistance helped me ace a difficult class, and I ultimately got an A in my online class. I couldn’t be happier! ",
      author: "Order # 87305"

    },
    {
      text: "I was under a lot of pressure at that time and felt overwhelmed because I didn't have much time to devote to my pending class. The team was well-communicated and submitted all classwork on time, ensuring that I received the grades I wanted. Highly reliable and stress-free! ",
      author: "Order # 68142"
    },
    {
      text: "Top-notch online class help! There wasn't a single task, from quizzes to projects, that the pros couldn't handle. There, I could follow along and even receive updates on tricky topics. Thanks to their support, I gained confidence, and my grades jumped up unbelievably! ",
      author: "Order # 33092"
    },
    {
      text: "Affordable, fast, and professional! The team values privacy, ensures 100% unique pieces and gives 24/7 support whenever required. I have recommended them to all my classmates and they haven’t disappointed any of them! ",
      author: "Order # 80617"
    }, {
      text: "I couldn’t imagine how stress-free my semester would feel after hiring them. Thank you so much for your assistance with my completed assignments. Truly a godsend for any student who suffers with online classes! ",
      author: "Order # 92445"
    }
  ];

  const faqsData = [
    { q: "Is it true I can pay someone to do online class? ", a: "Ans. Yes! Let our qualified academic specialists handle your online class. Thus, you don’t need to worry about too much hard work when this service can provide you with the right solutions and reliable support to get the high scores.!" },
    { q: "How do I know the work will be original and plagiarism-free? ", a: "Ans. We always try to provide 100% plagiarism-free content. All of the tasks are done from scratch by our tested and trusted tutors, examined and verified using advanced tools for the detection of copied and pasted content to ensure your submission is original." },
    { q: "Does your service divulge the privacy of my data? ", a: "Ans. Absolutely. We are very serious about student privacy. All your personal information, including name, class and discussions with our experts, is well protected. All information remains anonymous, which means relaxation for you while we do the work on your course." },
    { q: "How fast can my assignments or classwork be completed", a: "Ans. We are fast but still pay attention to detail. Whether you need help as part of your single assignment or a full course, we work around the clock to make sure all tasks are completed and submitted before deadlines. You will also get frequent updates on your work progress." },
    { q: "What subjects and classes do you cover? ", a: "Ans. We cover over 5,000 subjects, including business, IT, nursing, engineering, math and science. Our professionals are well-versed in multiple disciplines, helping students across the USA seek help in almost any online course they are enrolled in." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="Hear from our happy clients"
        subtitle="Read what our students have to say about their journey."
      />
    </main>
  );
}