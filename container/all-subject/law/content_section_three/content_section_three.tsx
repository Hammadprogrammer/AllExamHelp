import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "How Much Do I Pay Someone to Take My Online Law Class?",
    topDescription: "Is there any way to take my online law class for me? You may call it a simplified version of a law class; however, getting grade points in that is not so easy. It takes a lot of your time and doesn't give you any time for yourself. \"How about instead: \"Take my online law class for me. You all know how difficult it is to manage all your classes with regular assignments and assessments. It makes it harder to keep those grades up. It is time to book an online class helper of your own and be stress-free. We promise you 100 per cent attendance and also help with your assignments, quizzes and projects. Just request us to can you take my online law class for me?",
    features: [
      {
        title: "Trusted Law Class Professionals",
        text: "Whether constitutional law, legal writing, advanced research or complex case analysis, there are experts who give you everything you need to know to master the topics in a simple way. Doing this not only helps you complete your classwork successfully, but also strengthens understanding, builds confidence and aids in consistently achieving top grades throughout the class."
      },
      {
        title: "Highly Qualified Experts",
        text: "Consult with experienced attorneys who have post-doctorate academic degrees and in-depth legal proficiency in diverse areas of law. Each assignment, quiz and project is executed without precision but with proper citation and a well-structured argument with critical analysis that ensures the highest academic standard or professional standards."
      },
      {
        title: "Less Stress, More Balance",
        text: "So much heavy reading, case studies and tight deadlines? Give yourself a break and let our professionals handle your classwork for you while getting on with your life, work or the enjoyment of personal time. Use this method to become more organized without sacrificing your grades or mental health."
      },
      {
        title: "Affordable Premium Services",
        text: "Get professional help with law class for fair and student-friendly rates. With our flexible pricing structure, you can avail of premium academic assistance, expert guidance, and reliable support without putting unnecessary pressure on your budget."
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