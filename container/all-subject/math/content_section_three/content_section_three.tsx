import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Reliable Math Class Help Online – Get A or B Grades Guaranteed -  Do My Math Class for Me",
    topDescription: "Need math class help online? You will get the help of expert tutors who actually provide professional assurance to deliver you your A or B grades in mathematics. Every assignment, classwork and discussion for that math class goes through the hands of our professionals when you request to do my math class for me. We work with you to provide the top-notch math class solutions needed for your class. We provide you with on-time submissions, step-by-step explanations, and a better understanding of complex concepts. The help with math class services that we offer guarantee a stress-free learning experience and improve your academic performance.",
    features: [
      {
        title: "Expert Tutors Across All Topics",
        text: "We have a team of qualified tutors who cover all math subjects, including algebra through calculus to statistics and higher-level topics. Tutors guarantee you accurate solutions and detail concepts clearly, so not only are assignments complete but you also strengthen your understanding for future success."
      },
      {
        title: "24/7 Access to Expert Support",
        text: "Receive assistance at any time of day or night whenever you require it. From that last-minute homework question to a tricky quiz or class presentation, our online tutors are always ready to provide immediate assistance so you don’t miss deadlines or fall behind with your classwork."
      },
      {
        title: "Guaranteed Grade Improvement",
        text: "We’re not only responding - we’re achieving results. Our students upgrade in grades, get to know their potential and are ready for class with accurate solutions, individualized needs guidance and developed learning plans."
      },
      {
        title: "Confidential and Secure Service",
        text: "Your privacy is our priority. You can be assured that everything from assignments to login information and personal information is stored safely with us. Our service can provide you with peace of mind by taking care of your classwork without compromising your academic record in any way."
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