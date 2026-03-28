import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Need Online Course Help? Reach Out Anytime, We’ll Do the Rest",
    topDescription: "When assignments, quizzes, and deadlines pile up, an online course can become difficult to keep up with. Our professional course takers are here to provide you with that support, no matter what aspect of your course it is. Whether it's the weekly reviews and discussion posts or project submissions, we do it all for you. As your course is being handled by the most experienced experts in the field, you can relax and enjoy life stress-free, knowing that every requirement is addressed appropriately and on time so that you get one step closer to the grades you deserve.",
    features: [
      {
        title: "Top-Ranked Tutors",
        text: "We include elite and qualified tutors in our services, skilled in many academic disciplines. They know what professors expect in terms of academic rigour and how they grade assignments, quizzes, etc., so that each assignment or discussion post will meet that standard of quality."
      },
      {
        title: "Pocket-Friendly Prices",
        text: "It is our belief that each and every student should have access to cheap course help without the financial burden, without compromising the quality. That’s why we provide flexible and affordable pricing plans that scale to student budgets without sacrificing high-quality, professional support."
      },
      {
        title: "1500+ Successfully Completed Courses",
        text: "Our crew has managed over 1500 online courses all around the USA. Whether it be business, nursing, computer science, or humanities students, we have assisted them in managing the workloads of their coursework while completing requirements toward receiving their degrees."
      },
      {
        title: "Timely Submissions",
        text: "In an online course, submission of the coursework on time is a vital aspect. Everything is taken care of step by step, semester after semester; all you have to do is take it easy! We will handle your coursework and also make sure that assignments, quizzes, discussions and exams are submitted on time."
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