"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "Can I hire someone to take my proctored exam?",
      answer: "Yes, we can help you to take your exam safely and get good grades."
    },
    {
      id: "Q2",
      question: "Is online proctored exam help secure?",
      answer: "Absolutely. We have encrypted everything, so you are completely secure and your privacy is protected."
    },
    {
      id: "Q3",
      question: " How can I get someone to take proctored exams for me?",
      answer: "Just let us know, give information, and the rest will be for the correct subject specialists."
    },
    {
      id: "Q4",
      question: "Will you take my online proctored exam on ANY subject?",
      answer: "Yes, we deal with topics like mathematics, science, business, IT and more."
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