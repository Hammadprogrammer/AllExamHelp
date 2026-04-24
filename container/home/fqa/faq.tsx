"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "How to get prompt and trusted exam service?",
      answer: "Don’t get stressed. You have our qualified experts for getting online exam help. They have 24/7 assistance; they guarantee privacy and discretion, take exams confidentially, and help you get higher grades stress-free."
    },
    {
      id: "Q2",
      question: "Is it safe and confidential to hire an online exam expert?",
      answer: "Yes, providing you 100% confidentiality and the exam materials will be safe & sound. Qualified experts help you maintain privacy while receiving assistance that is precise, safe, and always secure: with provided help."
    },
    {
      id: "Q3",
      question: "Can experts do all kinds of online exams for me?",
      answer: "Absolutely. Our experienced team of online exam experts has different subject experts as well as exam-taking formats, which ensures accurate and appropriate answers, exact time management, and rightful guidance as per the individual needs of the students."
    },
    {
      id: "Q4",
      question: "What's the turnaround for urgent exams?",
      answer: "Get help from our experts 24/7 when you need it the most. As soon as you let us know your exam, we can start preparing and giving you support and service, without sacrificing accuracy or security."
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