import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Looking for “Pay Someone to Take My Online Class”?",
    topDescription: "Are you seeking “hire someone to take online class”? It means you’re watching sunsets, juggling responsibilities, or just need a break. That’s where Hire Class Buddy steps in. Our experts have ample knowledge and experience that enables you to excel in your assignment, quiz, exam, and course. So, for students looking for reliable people to help them who will not compromise academic standards. We are affordable and professional for all types of online classes.",
    features: [
      {
        title: "100% Confidentiality & Privacy",
        text: "We take your privacy very seriously. All of your information is 100% confidential through strict data protection policies that we follow on our platform. We ensure that our service is safe and reliable, and students around the world entrust us with their classes, exams, coursework, etc."
      },
      {
        title: "Affordable & Flexible Pricing",
        text: "We offer exclusive discounts and special offers to clients who give us full courses or multiple tasks. We are also introducing an installment payment option for the users who are regular clients. We aim to provide high-quality pay to take my online class services at the best rates possible without compromising on quality."
      },
      {
        title: "100% Plagiarism-Free Work",
        text: "Our services uphold the values of originality and academic integrity. Every single piece of work prepared by our specialized team of experts is absolutely 100% original in order to fulfill academic needs. All assignments go through trusted plagiarism detection tools like Turnitin before submission to ensure authenticity."
      },
      {
        title: "On-Time Delivery Guarantee",
        text: "We adhere to strict deadlines. Be it any assignment, quiz, or coursework, we will never let it go after the deadline. We use an advanced deadline tracking system for each task to ensure that you get your work back as promised and on time!"
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