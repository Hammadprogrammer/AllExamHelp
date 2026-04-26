"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "If I don’t wish to attend it, am I allowed to have the exam help service?",
      answer: "Yes. With us, you can hire an exam taker without sharing your personal details and allow them to take your online exam."
    },
    {
      id: "Q2",
      question: "Do you provide online exam help for all subjects?",
      answer: "Absolutely. Our exam takers touch on math, science, English, business and a variety of other subjects."
    },
    {
      id: "Q3",
      question: "Will my information stay private?",
      answer: "Yes. We are absolutely committed to protecting your privacy. We do not disclose anything about you and guarantee that you will remain anonymous."
    },
    {
      id: "Q4",
      question: "Would you be able to help me with a timed exam?",
      answer: "Yes. Our live proctors give you on-demand assistance, so you can finish your exam on time, every time."
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