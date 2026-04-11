import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Hire Someone to Do My Online Physics Class at Affordable Prices in the USA",
    topDescription: "You can get help with your physics class at prices that're easy on your wallet all over the United States. This help is meant to make sure you really get physics. We will help you with your homework, figure out problems and make sure you understand the ideas. We cover everything from physics ideas like mechanics to more complicated physics topics. Our goal is to explain things in a way that's easy to follow, one step at a time, so you feel surer of yourself and do better in school. You will get help when you need it. It will be accurate and tailored to what you are studying, without costing too much money. Whether you are trying to catch up or want to get grades, we make physics easier to handle.",
    features: [
      {
        title: "Auto-Track Progress",
        text: "Our progress tracking system is really helpful. We will send you updates by SMS, WhatsApp or email so you will always know about the work you need to submit by the deadlines and how you are doing in the class. Our team is available all the time to help you, so you do not have to worry about missing any information."
      },
      {
        title: "Payment Plans & Flexibility",
        text: "We know that students have financial situations. That is why we let you pay your fees in a way that's easy for you. You can pay a bit of your total fee at a time over the whole time you are taking the class. We are very clear about how much things cost, and there are no surprise fees, so you can feel safe."
      },
      {
        title: "No Plagiarism / No AI Content",
        text: "We promise to give you work that's completely original and of high quality to help you get the best results. Our experts make sure every task is done carefully. We never copy anything from someone else. We also do not use anything made by intelligence, so you can be sure that your work is authentic and honest."
      },
      {
        title: "Unique Features – World-Class 24/7 Support",
        text: "Our support team is made up of professionals who are always there to help the customer. If the customer needs something, they can just send our support team a message. Our support team will get back to the customer quickly, usually within about 10 minutes. Our support team will always try to solve the customer's problems in an efficient way."
      }
    ]
  };

  return (
    <>
      <ContentThree 
        topHeading={pageData.topHeading}
        topDescription={pageData.topDescription}
        features={pageData.features} 
      />
    </>
  )
}

export default ContentSectionThree;