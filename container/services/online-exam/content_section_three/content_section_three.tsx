import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Why I need to Pay Someone to Take Exam?",
    topDescription: "Modern education has presented a lot of challenges to students in a fast-paced environment. They are juggling between studying and life. Exam preparation can be stressful because of low confidence, lack of concentration, and poor time management. Our online exam help offers individualized help and practical tips as well as support to assist students to gain higher score in challenging subjects. With our pay someone to take exam, you can boost your academic performance while focusing on other things and your career. ",
    features: [
      {
        title: "Meeting of Guidelines",
        text: "Our tutors are very observant of your instructions and academic requirements, which are in terms of formatting, style of citation and time management, which makes every session meet your exam requirements. "
      },
      {
        title: "Confidentiality & Security",
        text: "Your privacy is our number one priority. All of your communications, login credentials and payment details are all treated in a safe and confidential manner, thereby providing you with peace of mind during online exams."
      },
      {
        title: "Open and Clear Communication",
        text: "We communicate with you at all stages. Our communication channels are clear and open, which guarantees a stress-free and easy tutoring experience through the scheduling of the sessions to the tracking of progress."
      },
      {
        title: "Quality and Affordable tutoring",
        text: "Have the best tutoring without straining your pockets. Our prices are fair. We offer early bird discounts and various payment methods to provide the students with the best bargains in studying."
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