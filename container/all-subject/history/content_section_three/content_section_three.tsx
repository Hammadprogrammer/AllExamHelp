import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Struggling with History? Get Professional Online Class Assistance Now",
    topDescription: "Struggling with history? Switch from academic struggle to A-grades with a professional online history class help today! We can connect you to hire history class taker who has been in this field for a long time and has done a lot of assignments, projects and discussions on all topics in history and also across levels from school level to PhD. As part of our detailed history class help services, students get accurate, original solutions as per the syllabus with a step-by-step guide to aid the understanding of difficult historical concepts. They just make handling stress easier, keeping you in check with your history class promises and helping you maintain a steady flow of academic progress!",
    features: [
      {
        title: "Domestic IP Masking Technology",
        text: "Our residential proxy systems automatically switch the IP location to your home city when you map our tutor into your account. This creates a seamless experience, where all activity from your university’s perspective just looks perfectly normal and aligned with your existing login ID."
      },
      {
        title: "Ironclad Non-Disclosure Agreements",
        text: "Privacy is our highest priority and a binding legal obligation. Every tutor signs a very serious NDA informing that your identity, study details and service usage remain completely confidential. We establish secure systems and protocols so that your information will never be shared, disclosed, or exposed for any reason."
      },
      {
        title: "No Plagiarism No Red Flag",
        text: "Our writers write all your assignments, discussions and essays from scratch that will pass Turnitin cleaning. We also use your writing style and tone, so the work blends seamlessly with what you have submitted before and does not raise any flags."
      },
      {
        title: "Vetted Experts, Not Freelancers",
        text: "7-step vetting process that chooses the top 3% of highly qualified experts (many with PhD-level credentials). All professionals are subject to background checks to make sure that they are reliable, knowledgeable, and passionate about the academic quality of their work."
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