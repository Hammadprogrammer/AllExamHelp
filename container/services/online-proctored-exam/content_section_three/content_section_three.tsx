import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Proctored Exam Help - Over 5000+ Subjects Covered!",
    topDescription: "Get cheap proctored exam help in the USA with over 5000(+) subjects covered. Designed to make your academic journey smoother and more manageable. Our professional team is here 24/7 to provide you with the necessary, reliable, private and confidential assistance as per your needs. You will never be stranded or burdened. We offer quick response times and quality assurance. Join thousands of other students who also use our help to ease their academic workload.",
    features: [
      {
        title: "7K+ Satisfied Clients",
        text: "We have assisted over 5000 students from the USA and anywhere in the world with reliable help with proctored exam. Students return to us because we offer secure, effective, cheap and top-quality service that helps them reach their learning goals with confidence."
      },
      {
        title: "15K+ Exams Supported",
        text: "We have aided more than 10,000 exams on different subjects, levels and formats. We assist students with comprehensive question completion, carefully planned exam-pacing to align timelines and deadlines while upholding integrity and self-belief."
      },
      {
        title: "1.5K+ Subject Experts",
        text: "We have a diverse network of over 1,000 highly skilled tutors specializing in all subjects from STEM to Humanities and Business/Technology. Every professional is equipped with specialized knowledge, proven performance, and experience in online learning to provide timely, precise, and accurate support for each of your academic challenges."
      },
      {
        title: "15+ Years Combined Experience",
        text: "Our online exam takers have more than 10 years of experience in supporting students academically. We can help them manage increasing workload, learning difficulties, and achieve top results. We make sure their help will be provided as securely, professionally, and professionally & confidentially in the long run."
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