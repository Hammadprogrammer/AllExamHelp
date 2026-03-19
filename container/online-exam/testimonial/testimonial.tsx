import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Their online exam help was actually effective in making me grasp difficult concepts that I was having difficulty with. The tutors made it very explanatory and I felt much more confident when I was having my exams! ",
      author: "Order # 28383 | Editing"

    },
    {
      text: "I had difficulties with time management of my study when I had numerous subjects. Reliable take my online exam solutions kept me on schedule and made my scores improve a great deal. ",
      author: "Order # 9921 | Engineering"
    },
    {
      text: "The 24/7 doubt service was a lifesaver. My tutor was always available to explain my questions whenever I had one. It also made my exam success much less stressful. ",
      author: "Order # 4452 | History"
    },
    {
      text: "I liked the flexible working hours. The tutors fitted perfectly into my schedule, which implies that I was able to secure good grades without compromising other activities.",
      author: "Order # 4452 | History"
    }, {
      text: "The practice exams and feedback enabled me to understand my areas of weakness and work on them. With the help of their exam takers, my examinations were just a breeze. ",
      author: "Order # 4452 | History"
    }
  ];

  const faqsData = [
    { q: "What can online tutoring do to make my grades higher on exams? ", a: "Ans. Through online tutoring, there is a personalized form of guidance, different from your syllabus, strengths and your weak points. Our tutors will explain the hard concepts, exam tips, and practice questions that will enable you to have confidence and the skills to score higher." },
    { q: "Which subjects in exams do you support? ", a: "Ans. We provide professional help in a broad spectrum of topics- math, science and business, as well as professional exams through online exams. Our tutors will guide you according to your exams or level of difficulty." },
    { q: "Will I be able to receive assistance in the last moment before my online exam? ", a: "Ans. Yes! We are aware that during exams, time creeps by at a faster rate than anticipated. Our tutors can provide you with intensive, crash revision exams on important subjects, uncertainty, and preparation, even with minimal notice." },
    { q: "What are your online sessions: live or recorded?", a: "Ans. We offer learning in a flexible format. You may opt to have live one-on-one sessions when you need real-time instructions or group tutorials when you want to learn as a group. You can also have recorded lessons when you want to learn in your own time. " },
    { q: "Is your service confidential and safe? ", a: "Ans. We highly value your privacy and trust. This is all done in a safe manner, all the communications, personal details and study materials. We have professional tutors who can guarantee you a secure, confidential and conducive learning environment." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="Our success stories"
        subtitle="Read what our students have to say about their journey."
      />
    </main>
  );
}