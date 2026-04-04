import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Pay Someone to Take My Online Philosophy Class and Get Exceptional Grades!",
    topDescription: "Confused with endless lectures, tricky deadlines and baffling assignments? You are not failing if this is you; you are just layered. So, join “Hire Class Buddy.” We do not promise hope; we offer results. It has 350-plus online class takers who are not only experienced but also have become experts in bringing your academic disarray into guaranteed top-grade quality performance. Sounds exactly right, and we give you exactly that — a complete academic takeover service where your take my online class for me call is answered with confidentiality and perfection in this domain. 10+ years of experience means never feeling guilty again or having that horrible feeling if you fall behind on your studies.",
    features: [
      {
        title: "Professional Tutors for Online Philosophy",
        text: "We have hired professional PhD philosophers to serve you. Whether it is metaphysics & ontology or ethics & moral philosophy, they will take care of your online philosophy class with confidence and practical expertise."
      },
      {
        title: "24/7 Support For Your Class",
        text: "Are you confused with epistemology & theories of knowledge or facing trouble in logic & critical thinking at weird hours? No issue. Get 24/7 hours of philosophy class help online whenever you want."
      },
      {
        title: "Student-Friendly Prices, Guaranteed Results",
        text: "Great support does not have to be expensive. This is exactly the reason our philosophy tutoring program is reasonable without neglecting results at any point. We can help with everything from political philosophy & social justice to philosophy of science."
      },
      {
        title: "Guaranteed Class Assistance",
        text: "We will handle all your online philosophy class, assignments, quizzes and exams. We help you deliver quality work on time and guarantee top grades in your coursework with our seasoned experts."
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