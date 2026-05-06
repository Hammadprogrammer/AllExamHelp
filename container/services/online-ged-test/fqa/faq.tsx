"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "What can I do to prepare well to take the GED?",
      answer: "With organized study plans, practice questions and one-on-one tutor support, you can work on your weak areas and build confidence prior to the test day."
    },
    {
      id: "Q2",
      question: "Does it have GED test help on the internet?",
      answer: "Our GED tutors are online 24/7 and can provide you with instant assistance whenever you need it, helping you prepare more efficiently through individualized attention."
    },
    {
      id: "Q3",
      question: "Does it have GED tutors that can be contacted 24/7?",
      answer: "Our GED tutors are online 24/7 and can provide you with instant assistance at any time you require someone to help you, and work on your preparation more efficiently through individual consideration."
    },
    {
      id: "Q4",
      question: "Is there affordable preparation for the GED?",
      answer: "Yes, we offer affordable GED preparation courses that do not compromise quality and provide study materials, practice tests, and professional advice at low prices to all students."
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