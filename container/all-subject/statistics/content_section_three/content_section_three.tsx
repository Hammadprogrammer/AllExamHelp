import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Take My Online Statistics Class - One-Stop Shop for All Your Statistics Problems!",
    topDescription: "We value the hectic time of our students. Our professional online statistics class takers for hire will ensure that they provide their services within the required time. We also have a 24/7 student support portal. You can give us a call at any time in case you have a query that you would like to address, or you want to know the progress. We hire PhD statistics experts. Not only are they well-equipped academically, but they also possess appropriate experience in the online academia. We have faith in originality. Our professionals do not steal from what they are writing to you. We do not put our students' future on the line.",
    features: [
      {
        title: "FREE Plagiarism Report",
        text: "Every single assignment that our tutors complete for you comes with a detailed plagiarism report. You can feel safe when you submit your work knowing that your grades and academic integrity are fully protected. We want you to feel confident when you submit your assignments."
      },
      {
        title: "Unlimited Free Revisions",
        text: "Our statistics class services do not just give you assignments. We make sure you are completely happy with the work we do for you. Our experts will keep revising your assignments until you're satisfied. They will not charge you any money for this. You will get assignments every time you use our statistics class help services."
      },
      {
        title: "24×7 Availability",
        text: "Our support team is available all the time to help you with your statistics class. You can ask for help with your assignment, project or discussion posts. Just book your order and submit an assignment even at the last minute. We are always here to help you, so you do not have to feel stressed about your class."
      },
      {
        title: "Support from Qualified Professionals",
        text: "The people who work for our statistics class taker-for-hire services are highly qualified and very experienced. They are experts in statistics. When you hire our help with online statistics class you get more than accurate assignments. You also get step-by-step updates that make you feel more confident."
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