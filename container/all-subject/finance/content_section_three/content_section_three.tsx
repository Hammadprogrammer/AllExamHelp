import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Universal LMS Mastery: We Dominate Every Academic Interface at Hire Class Buddy",
    topDescription: "We support every education alma at Hire Class Buddy, which means no matter what learning management system you are on, we support it. Canvas, Blackboard, Moodle — whatever the interface, we make it easy to navigate and submit on time with premium solutions. So, in case you want help with online finance class or others, our huge pool of experts can instantly provide 100% accurate work without any chance of plagiarism, as well as customized to your syllabus. Whether an assignment or full course support, our finance class takers for hire ensure no headaches while you learn and boost your grades, preparing you to shine in any academic scenario.",
    features: [
      {
        title: "Real-Time Assistance",
        text: "Get immediate guidance on whatever query, be it clarifying difficult concepts or resolving challenging assignments. You’ll never be stuck or left behind on your coursework when you have our experts with you at any time of the day."
      },
      {
        title: "Better Grades",
        text: "Our professional assistance and targeted services are here to assist you in improving your knowledge and making you better for assignments, projects, reports, etc. The targeted support is here to guide you towards better grades and academic empowerment."
      },
      {
        title: "Progress Tracking",
        text: "Get regular updates and feedback on your progress throughout the course. Keep an eye on your progress over time, discover topics that require added practice, and make well-informed decisions to complement your overall academic success."
      },
      {
        title: "Easy to Use",
        text: "Our products and services are created for simplicity. With effortless communication with tutors, simple submission systems and guidance without any falter, you only need to focus on learning and not figuring out logistics around it."
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