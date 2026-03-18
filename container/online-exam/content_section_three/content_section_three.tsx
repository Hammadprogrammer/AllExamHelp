import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Secure Top Grades by Simply Requesting Online Class Help Services",
    topDescription: "Want to get good grades without stressing up the deadlines and classwork? Just ask us to do my class for me, and our professional academic experts will cover everything and anything from assignments to class discussion and your class projects. We make sure your success with timely submissions, effective help and guidance so that you can have a helping hand in understanding the subjects. Let's keep A and A+ grades easy, efficient, and worry-free! ",
    features: [
      {
        title: "High-Rated Tutors",
        text: "Our tutors are rated highly. Our team of experts has years of experience, extensive subject knowledge and a proven track record of helping students achieve their goals. Every tutor is committed to helping you with all your online classes for A and A+ grades. "
      },
      {
        title: "500+ Happy Customers",
        text: "Be among the 500 students across the USA who have relied on us for hassle-free online class help. Our clients achieve excellent outcomes and do so without the time constraints or stress of impending deadlines."
      },
      {
        title: "Complete Privacy",
        text: "We keep your identity, chats and personal info safe with us. All our services are private and remain confidential till the time of delivery of your academic work. We never disclose your private information."
      },
      {
        title: "100% Plagiarism Free Work",
        text: "All assignments, projects, and class discussions are done from scratch with originality as well as accuracy. Our work is original and at the same time free from plagiarism with your degree-level quality, which maintains your class integrity."
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