import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "This service is amazing! I had issues with assignment deadlines, but they made sure to deliver it all, accurately & on time. My grades greatly improved, and I couldn’t be happier!” ",
      author: "Order # 28383 | Editing"

    },
    {
      text: "Highly recommend! The writers are professional, knowledgeable and super responsive. “They took care of all my assignments, clarifying tricky parts if necessary, and made sure everything was 100% original.” ",
      author: "Order # 9921 | Engineering"
    },
    {
      text: "Excellent experience! They professionally do my homework, reports, and project papers absolutely and on time. Their advice really helped make my semester much less stressful.” ",
      author: "Order # 4452 | History"
    },
    {
      text: "Top-notch assignment help! The entire team is professional, polite and thorough. “Everything was done perfectly and the updates on progress have made me feel safe.”",
      author: "Order # 4452 | History"
    }, {
      text: "I’m impressed with their service! Affordable, high-quality, and completely confidential. They helped me achieve the grades I wanted and saved so much time and stress.”  ",
      author: "Order # 4452 | History"
    }
  ];

  const faqsData = [
    { q: "Can hiring professional assignment help services ever be legit?", a: "Ans. Absolutely! Be it essays, research papers, case studies or lab reports, we have writing experts who all specialize in specific niches and keep up with the changing trends. All the work that we will do in time, while keeping flawless accuracy to your assignment necessity, so you will at least get good grades." },
    { q: "How do you check assignments for plagiarism? ", a: "Ans. A: All the assignments are written from scratch by our expert authors as per your needs. We try to make sure there is no plagiarism in every submission. We have a strict plagiarism detection system that ensures 100% unique and correctly referenced content, in order to gain the highest possible score at Turnitin." },
    { q: "Do I get help for all subjects in homework?  ", a: "Ans. Yes! We provide assignment help for more than 5,000 subjects, including business, IT, engineering, nursing science, mathematics, and humanities. We have a pool of professionals, touching upon almost every subject you want us to deal with." },
    { q: "How fast can you turn around my assignment?", a: "Ans. We offer fast turnaround times to help you meet your deadlines. Maybe it is just an assignment due in a couple of hours, or several tasks throughout your semester, our authors work around the clock to make sure every submission gets done on time and accurately." },
    { q: "Can I trust you with my personal information? ", a: "Ans. Yes. This is the reason why your privacy comes first. All personal information, assignment details and communication with our experts are fully confidential. However, we stand to assure you that your identity and discussions are secure as we handle your assignments." }
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