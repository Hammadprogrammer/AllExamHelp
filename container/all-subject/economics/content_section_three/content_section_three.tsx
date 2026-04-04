import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Comprehensive Help with an Online Economics Class, From Modules to Final Class Submission",
    topDescription: "Enjoy instant support for your online economics class modules to final class submission and a stress-free way to handle your subject. When you are looking for the best help with Economics class, our experienced crew will update you step by step - from knowing about the modules to assignment preparation, class assistance and timely submission of final projects. From one-on-one guidance to plagiarism-free answers and timely assistance, we take care of every aspect of your economics class with precision and help you improve your grades while building confidence in the subject. And that means no more last-minute pressure — only reliable, high-quality assistance from start to finish.",
    features: [
      {
        title: "Low Pricing",
        text: "You can now get the best economics help at a minimal cost. With student budgets in mind, we offer flexible plans that provide access to expert guidance — to add help to your A game without adding financial strain!"
      },
      {
        title: "Turnaround Time",
        text: "Never miss a deadline. Our team guarantees speedy and dependable delivery, whether for assignments, quizzes or exams. We offer timely, precise solutions to ensure you stay ahead of your course without panic- even with urgent tasks or last-minute work."
      },
      {
        title: "Original Work",
        text: "No more worrying about plagiarism. All solutions are completely original, well-researched and tailored to your syllabus. Our professionals provide you with quality work tailored to your personal needs as per the submission standards, and make sure you get clarity on concepts."
      },
      {
        title: "Confidential Service",
        text: "It is important for us that you trust us; we value your privacy. Everything from individual information to the task documents and messages is totally protected, ensuring protection at each stage."
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