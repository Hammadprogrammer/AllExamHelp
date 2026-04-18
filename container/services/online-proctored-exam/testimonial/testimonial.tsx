import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Absolutely incredible! I was anxious for my proctored exam, but they held my hand all the way through and helped when I needed extra time to make sure everything went well. “I passed it so easily, super no stress, and I would totally recommend!",
      author: "Order # 58607"

    },
    {
      text: "“Amazing experience! I had an exam a few days back and barely enough time, but their team nailed it! Fast, accurate, and completely confidential. They helped me bring my grades up!”  ",
      author: "Order # 62642"
    },
    {
      text: "“Highly trustworthy service! They made my secured proctored exam date run very fast and communicated enough in a top-secret way. I was told that it was going to be dealt with by professionals.”  ",
      author: "Order # 26050"
    },
    {
      text: "Outstanding support! They are knowledgeable, quick to respond and consistent. This means that every bit of the responses was right, their exam went accordingly on time too and additionally everything worked completely splendidly.  ",
      author: "Order # 51804"
    }, {
      text: "“It’s professional, and it’s reliable, and it’s discreet. They enabled me to finish the exam with relevant answers within my time. I am very pleased with their services and will absolutely use them again.  ",
      author: "Order # 48204"
    }
  ];

  const faqsData = [
    { q: "Are you going to help me do my proctored exams?  ", a: "Ans. Yes! We are so expert that you can have the best do my proctored exam services with full faith in secrecy as well. They know how to work with various test platforms, what the general rules are, and stick to them in detail." },
    { q: " Is it safe for me to use your service and take my online proctored exams?  ", a: "Ans. Absolutely. Your privacy and security are very important to us. But you need not worry because your communication, exam credentials and personal information are 100% confidential after all our experts have done is handling your online proctored exams as a ninja." },
    { q: "What’s your strategy for getting 80% or higher? ?   ", a: "Ans. The members are well-regarded experts in their field and have familiarity with online assessments. They ensure precision in your practice, time management, and provide confidence that you will perform best in all the tests." },
    { q: "Do you help with proctored exams of any subject? ", a: "Ans. Yes! All sorts of professionals are represented – business, IT, nursing, engineering, math and science. Our team has all the capabilities, whether it's any professional subject or a specialization, we can guide and help you pass your competitive exams." },
    { q: "How soon can you assist me with an upcoming proctored exam?   ", a: "Ans. We enable you to respond quickly and reliably to time-sensitive projects. Even if the exam is only a matter of a few hours or a week away, we will help you with guidance and timely completion to keep you on-process of doing the work." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="Our clients are our success stories"
        subtitle="Read what our students have to say about their journey."
      />
    </main>
  );
}