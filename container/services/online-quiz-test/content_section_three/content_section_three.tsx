import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Want to Pay Someone to Take My Online Test ? You are at Right Place",
    topDescription: "Get professional, reliable online test helpers. We are a wise team dedicated to delivering pertinent and timely assistance, well arranged to make your experience as smooth and free from stress. We are there 24/7 with quality, confidentiality, and customer satisfaction. Let us support you to move forward successfully and achieve the outcome you want.  Through our reliable online test help, you are free to pursue your ambitions and leave the remaining work to us with care and professionalism.",
    features: [
      {
        title: "Guaranteed High Grades",
        text: "Hire Class Buddy promises you top scores in any tests attempted and guaranteed A/B+ grades on the tests attempted. We do this with the help of our expert abilities, logical reasoning and analytical ability. What appears to be a nightmare for competitors’ websites is the perfect day for us!"
      },
      {
        title: "Bookings On Short Notices",
        text: "Tests/quizzes can come at any time during the semester or admission process. So if there is an exam that will come your way in a short period of time. Get aboard on Hire Exam Buddy and receive a transcript for our last-minute orders."
      },
      {
        title: "24/7 Customer Support Team",
        text: "Our customer support is 24/7 available irrespective of day and night, to tackle the queries of our clients back-to-back. Our dedicated and enthusiastic team enables us to keep informing our clients regarding order status via emails, WhatsApp or texts."
      },
      {
        title: "Professional Proctored Exam Specialists",
        text: "We are the obvious choice to go for if you would like to pay someone to take your test. We are offering highly qualified, skilled and experienced PhD-level exam specialists who have graduated from the top US universities, including Princeton University, Columbia University and Harvard University."
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