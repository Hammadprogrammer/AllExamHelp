import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Professional Online Nursing Class Help for Covering Every Complex Nursing Topic",
    topDescription: "Although when a person registers and takes online nursing classes, we have so many intricate subjects to cover that it's tough for us to provide. It is vital to make them understand whatever they do; however, nursing students find it quite difficult to deal with such subjects as a professional deals with all its practice. It is precisely during such hard times that online nursing class help services come to our rescue. We have Ph. D.-certified professionals who take your online nursing class for you and get you decent grades. So, what are you waiting for? You might be wondering why you should struggle to tackle your online nursing class when, at affordable prices, you can have the best online nursing class helpers do it for you. Do you want similar services? Click here to get assistance now. Stay calm and get in your class.",
    features: [
      {
        title: "Strict Deadline Commitment",
        text: "We are very strict about deadlines. All the assignments are done on a timely basis, and even the urgent ones can be delivered within 2–3 hours. We work round-the-clock, making sure your papers, quizzes and discussions are sent on time so you can catch up with your academics."
      },
      {
        title: "Affordable Pricing",
        text: "We make it clear at the outset how our fees break down. Costs depend on factors like class length, workload and academic level. We hope to offer quality assistance at fair prices so you can afford the help that you need without worrying about breaking your bank!"
      },
      {
        title: "Full Confidentiality",
        text: "We are committed to protecting your privacy. We do not sell your personal or academic information to third parties. They write each paper from scratch and keep everything safe, maintaining privacy all the way through."
      },
      {
        title: "Free Revisions",
        text: "This is how we ensure we will write papers for you with a 14-day free revision period for your satisfaction. Our professionals will make revisions to your work quickly if you require any changes. In this way, you can also directly talk to the writer so that you get all your instructions followed correctly."
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