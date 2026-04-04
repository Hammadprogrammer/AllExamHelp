import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Busy Schedule? Hire Chemistry Class Taker and Finish Your Classwork Stress-Free| Trusted tutors",
    topDescription: "Busy schedule? Work with a chemistry class taker-for-hire and complete the classwork without stress by hiring our best tutors. Our chemistry class help services are sufficient for getting correct, well-researched original support for assignments, projects, and lab reports, even for the most difficult topics. You can rest easy knowing you are on the right track with help from online chemistry class tailored solutions and deliveries, while we provide no help whatsoever to examine or prepare for a class. Skip into what is important and leave your chemistry classwork to us, done properly and with confidence.",
    features: [
      {
        title: "Immediate Solutions",
        text: "Fighting against the clock? Chemistry is time-consuming, and our team of professionals works tirelessly to ensure your chemistry assignments, lab reports and projects are done the way they should be without any compromise on quality or plagiarism. Even the hardest of assignments are completed correctly, such that you submit them on time and stay ahead of your classwork."
      },
      {
        title: "Constant Quality Assurance",
        text: "Each task is subjected to several layers of detailed scrutiny for it to adhere to the topmost academic excellence. We help polish, verify calculations, and format for clarity and ensure it aligns fully with your instructions."
      },
      {
        title: "Zero Expectation on Academic Support",
        text: "With us, the chemistry classwork pressure is off. Our experienced, competent support alleviates stress and helps you manage your workload effectively while providing confidence and peace of mind."
      },
      {
        title: "Safe & Simple Ordering Process",
        text: "Getting chemistry help couldn't get easier. Post your assignment or other requirements within minutes, safely pay and track your progress in real time. We provide a simple and easy way to sleep well, as you do not have to worry about your grades and privacy anymore."
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