"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "Can I pay to do my online test, I don’t want to sit for it?",
      answer: "Yes, you can hire us to take your online test. They do it all safely and ensure you get accurate results, all while keeping your information confidential."
    },
    {
      id: "Q2",
      question: "Do you have online test help for all subjects?",
      answer: "Our certified tutors offer a variety of subjects, such as math, science, English, and much more. Whatever your test is on, you’ll be able to get expert help in a snap."
    },
    {
      id: "Q3",
      question: "Will my information stay private?",
      answer: "Absolutely. We adhere to strict privacy rules to safeguard your personal information. All of the tests and quizzes that you expect us to help you with are and will remain confidential, safe, and secure."
    },
    {
      id: "Q4",
      question: "Am I able to receive assistance during a quiz or test with a time constraint?",
      answer: "Yes, our tutors are available right up to the moments of your timed quiz through the day of your online quizzes. They lead you through the questions clearly and efficiently, so you can finish your exam assured and on time."
    }
  ];

  return (
    <FAQSection 
      mainTitle="Read Our FAQs"
      description="Check out our FAQs to get quick answers to all your questions about our services and how we can help you succeed."
      buttonText="Talk to our experts"
      faqList={myFaqData}
    />
  );
};

export default FAQSectionData;