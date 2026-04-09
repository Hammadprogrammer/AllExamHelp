import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "I was trying to balance a job and classes, but this take my online class service made it all so much easier. The tutors were clear in their explanations and quickly helped me catch up. Highly recommended for busy students!",
      author: "Order # 28432 | Editing"

    },
    {
      text: "I was working as a student, so I barely had time to study. Their flexible pay someone to take my online class solutions helped bring my grades up without adding more stress to my schedule. Amazing experience!",
      author: "Order # 28433 | Engineering"
    },
    {
      text: "I was struggling with my assignments and exam preparation, and I got exactly what I needed. The tutors are very knowledgeable, professional and patient. My results improved a lot!",
      author: "Order # 28434 | History"
    },
    {
      text: "This service is great for busy students. The tutors are always on point, and the signup procedures are very easy to follow. I finally feel good about my grades again.",
      author: "Order # 28435 | History"
    }, {
      text: "I recommend this tutoring platform to anyone! They assisted me with coursework as I worked a part-time job. The one-on-one take my online class support was incredibly helpful.",
      author: "Order # 28436 | History"
    }
  ];

  const faqsData = [
    { q: "Is it possible to pay someone to take online class, at low cost?", a: "Ans. There are a number of excellent platforms on the market; however, we take pride in offering very competitive rates. We know that students are on a tight budget. We are budget-friendly as a platform, ensuring you won't break the bank!" },
    { q: "How I can pay someone take my online class for me?", a: "Ans. Purchasing on our site is super easy and fast. We have created an easy-to-understand platform where you can get suggestions from an education expert for your online lesson and transparent steps." },
    { q: "Can I choose the expert who assists me in my class?", a: "Ans. Absolutely. When you ask us to hire someone to take online class, your data and privacy are secured. Our systems are encrypted, and we work under high levels of confidentiality. No resale; you get ownership and academic security per project since each one is different." },
    { q: "Can I speak directly with the tutor?", a: "Ans. Your instructor can guide you and reach out to the instructor to help clarify all your doubts about your subject and web-based assignments. You are allowed to get in touch with the tutor." },
    { q: "Who will take my online class for me?", a: "Ans. These are very learned teachers all round. They will also help you with your online exams, tests, and quizzes according to what you authorize." }
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