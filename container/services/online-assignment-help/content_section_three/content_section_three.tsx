import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Subject-wise Help with Online Assignments for Expert Assignment Writers in the USA",
    topDescription: "Our subject-wise online assignment help service is available at low rates. Our crew of expert assignment writers for hire in the USA, is adept in diverse academic subjects. From business to nursing, law to computer science, engineering to humanities, our expert writers provide well-researched, top-quality assignments based on your needs. Every writing work is solely designed according to the university level, ensuring uniqueness, correct referencing, and timely delivery. Our subject experts offer personalized academic support with clear explanations and reliable guidance to students, thus helping them understand better while submitting exceptional assignments on time.",
    features: [
      {
        title: "5000+ Students Successfully Helped",
        text: "We have successfully helped more than 5000 students in completing their academic tasks! Relatively, our competent writers are experts of multiple subjects that give reliable support to the students in terms of dealing with short deadlines and proper grades."
      },
      {
        title: "100% Human-Written Content",
        text: "All assignments are manually written by professional academic authors who know what the university is asking for. No automated tools or AI-generated content, natural and well-structured text as per your instructions."
      },
      {
        title: "Safe and Secure Pay",
        text: "Your Security is Our Priority. We do not retain your personal or financial information and use reputable, encrypted payment systems so that you can place orders in a safe manner with peace of mind."
      },
      {
        title: "100% Unique & Plagiarism Free Content",
        text: "All orders are written from scratch with a full review to ensure maximum originality. Our writers do all the research and reference all work they write to guarantee you the most original, 100% unique, and plagiarism-free content."
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