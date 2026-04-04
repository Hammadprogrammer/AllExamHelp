import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Professional Biology Class Help Services are Designed for Ultimate Success for USA Students",
    topDescription: "Moreover, we deliver our professional biology class help services designed for the success of USA students. We help to keep your online biology class running smoothly and successfully. We work on the accuracy of assignments, lab reports and class tasks within your deadlines to make you stay organised without any kind of stress. However, with guidance and diligence from experts, the students can keep their academic record well-maintained and ensure that they are on track with the biology classes undertaken without missing any deadlines.",
    features: [
      {
        title: "Expert Biology Tutors",
        text: "It is only subject professionals who work efficiently to provide biology class help services for you. These will assist you in managing your online class better and not make you lag behind."
      },
      {
        title: "100% Plagiarism Free",
        text: "We use advanced plagiarism checks to verify all submissions, and work done through us will always be original before submission. It also builds trust and confidence in the quality of our work."
      },
      {
        title: "On-Time Submission",
        text: "All the assignments, projects and online class tasks are submitted before or at the scheduled time. Getting your work delivered on time is also a way to relieve stress and stay organized."
      },
      {
        title: "Anytime Help",
        text: "We realize students may need assistance in the early hours and our functional help team is available from day to night. Whether it be midnight or during class peak hours, we are always at your service."
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