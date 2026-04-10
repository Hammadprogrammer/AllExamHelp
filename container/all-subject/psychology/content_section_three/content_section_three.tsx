import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Is it Safe to Hire Someone to Do My Online Psychology Class for Me at Cheap Rates?",
    topDescription: "Fearful about security when seeking the assistance of a psychology class at low prices in the USA? You can be confident- our platform is safe, stable and trusted by hundreds of students in the country. You are able to hire psychology class taker professionals to deliver proper and original work that is plagiarism-free and on time, so that your class is in good hands. You can rely on our professional team to provide you with clear services, safe payment options, and constant assistance, whether you are looking to complete Psychology class-related assignments, quizzes, or concepts, since it is safe and affordable to seek the academic assistance you require.",
    features: [
      {
        title: "Guaranteed Success",
        text: "Enhance the desired success in our professional services. We take online classes on your behalf, do all your assignments right, and give you all the guidance to get you on the concepts, which will give you better grades and academic confidence."
      },
      {
        title: "Secured IP Address",
        text: "We take your privacy very seriously. We have a special and safe IP address to ensure that your participation is confidential. This makes it impossible to trace or identify that you employed someone to help you with your Psychology course online."
      },
      {
        title: "Secure Payment Method",
        text: "Your transactions are of the utmost importance to us. Every transaction is conducted in highly secure ways with great encryption and protection of buyers with full peace of mind when using our services."
      },
      {
        title: "24 Hours Availability",
        text: "Our support team is available around the clock. You need someone to drop you off at your class early in the morning or late at night. We are always available to offer timely services to enable your academic life to be smooth and free of stress."
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