import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Phenomenal! I barely had time to handle my full semester workload, so their team took over and submitted on time. For everything from assignments to quizzes, they handled it all. I came away with A’s I didn’t think were possible!” ",
      author: "Order # 28486 | Editing"

    },
    {
      text: "Five stars aren’t enough! The specialist they assigned to me was knowledgeable, responsive and endlessly reliable. I submitted all tasks of my course as per deadlines and never failed in a single part. This is what made my semester nonchalant.”  ",
      author: "Order # 28487 | Engineering"
    },
    {
      text: "Such a lifesaver! I had classes one after another, and I could not track the course, but their online course help not only helped me stay on track but also increased my amplitude. Fantastic work, real understanding and brilliant support all the way through — will hire them again without a doubt!” ",
      author: "Order # 28488 | History"
    },
    {
      text: "Highly recommend! All the tutors are professional and are always available whenever I ask for an update. They didn’t just do things — they explained parts I hadn’t understood, which, to be perfectly honest, boosted my performance like a breeze.”  ",
      author: "Order # 28489 | History"
    }, {
      text: "Incredible experience! I got help halfway through the semester and saw a huge difference in my performance. Instant responses, accurate solutions, personal attention and total confidentiality — just what every busy student needs!  ",
      author: "Order # 28490 | History"
    }
  ];

  const faqsData = [
    { q: "Can I pay someone to do my course? ", a: "Ans. Yes! Our expert can manage your complete online course, including assignments, quizzes and exams. So, leave the work to us so that you can just learn and follow your path and get an A." },
    { q: "How do I know the work will be original and academic ", a: "Ans. All of the works are written from scratch by professional experts and plagiarism-checked. We can ensure you and provide you with the security about grades, as every submission our experts do is either following your course requirements & does not violate any law of academic dishonesty." },
    { q: "What are the course and subject areas you cover?  ", a: "Ans. We have more than 5,000 courses and subjects, including business, IT, engineering, nursing, math and other sciences. You can find an expert who can help you in any of the online courses available in the USA." },
    { q: "What’s the fastest timeline in which you can complete my online course?", a: "Ans. We also provide prompt solutions and 24/7 client support. Our experts do not compromise the quality, whether it is an assignment, A single quiz or even a complete semester of course." },
    { q: "Will your service protect my info and ID? ", a: "Ans. Absolutely. We can guarantee 100% confidentiality of all the students. All of your personal data before and after you interact with the staff, as well as the course itself, is kept private while we maintain top-quality in a professional setting." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="From Struggle to Success: Few Words from Our Clients"
        subtitle="Read what our students have to say about their journey."
      />
    </main>
  );
}