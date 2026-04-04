import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Hire Someone to Do My Online Business Class for Me - Is it Worth It?",
    topDescription: "Looking to hire someone to take online business class? You are in the right place. Particularly if you’re having difficulty keeping up with assignments, projects, or intensive classwork. Moreover, when you go through the process of hiring someone with enough experience, you actually get high-quality support who can deliver research-based work on time and keep you on track towards your degree. We help you with online business class tasks, making sure of accuracy, originality, and privacy without any risk of privacy breach or academic violence.",
    features: [
      {
        title: "Academic Professionals",
        text: "Engage with elite, qualified PhD experts from all key business fields. Not only that, our experts are well-experienced and have in-depth subject knowledge for each task — hence assignments, projects, and reports provided by us will be thoroughly researched & written up to the expectations of your professor."
      },
      {
        title: "Budget-Friendly & Clear-Cut Pricing",
        text: "Get the option to buy top-notch online business class help without going through your financial balance. With no surprise costs, our pricing is 100% transparent, giving you the ability to plan further ahead whilst receiving high-value assistance tailored toward your education."
      },
      {
        title: "247 Customer Support",
        text: "The customer care service is available 247 to help you with your queries. Be it updating you on the progress of your assignment, seeking clarification regarding the instructions, our friendly support team is always available to assist you, so your mind rests easy with uninterrupted academic assistance."
      },
      {
        title: "Quick and Easy Ordering Process",
        text: "It takes little time and is very fast to order through us. Just post the requirement of your assignment, select preferences and track progress in real-time. We developed an intuitive system to provide you with a complete start-to-finish moving experience, simplifying the process and reducing stress and time, all whilst keeping you updated through all parts of the move."
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