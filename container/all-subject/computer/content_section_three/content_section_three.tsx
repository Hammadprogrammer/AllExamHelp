import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Affordable Computer Class Help Services for Every Student",
    topDescription: "All students can now afford the professional assistance of computer class services, which were created to facilitate online learning in a simple, pleasant and manageable manner. Our expert team assists you in maintaining your up-to-date status with all the assignments and projects that can ensure quality tutoring at a reasonable cost. Students all across the USA can receive personalized support on their coursework, which then alleviates stress and builds confidence, all within a safe, secure environment.",
    features: [
      {
        title: "Work without Errors",
        text: "Our tutors check every assignment or project to make sure it is perfect, complete and error-free. This focus on precision allows students to hand in quality work with confidence, as well as alleviating the anxiety associated with wondering if they made a mistake."
      },
      {
        title: "Custom Computer Help",
        text: "Our services are specially made for assignments and undertaking assistance, so students can complete their tasks without confusion or distraction. Since we focus exclusively on this sphere, offering quality and Uniform assistance that gets to the core."
      },
      {
        title: "Simple Communication",
        text: "No Stress-working along with you, tutors can communicate through chat, email, or messaging platforms with students to clear doubts and share instructions & monitor the progress, all enabling a friendly, reliable tutoring."
      },
      {
        title: "Improved Academic Results",
        text: "An approach that helps students secure better marks, along with comprehensive knowledge in the computer concept and confidence to tackle their syllabus. Equipped with personalized support, they will now be able to approach the most complicated projects and keep pace in their studies."
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