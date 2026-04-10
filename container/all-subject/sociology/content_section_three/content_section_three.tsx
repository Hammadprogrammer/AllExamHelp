import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Get Help with Sociology Class A+ Or B+ Grade Guaranteed",
    topDescription: "When you hire the expert at Hire Class Buddy, we ensure that we give the expert the information in terms of your given specifics. We ensure that the specialist that we are leaving with you is in the best capacity to execute your orders. Our students have ensured that we have their priorities first by lowering the price range of our services to the level of a normal service provider. We respect your privacy. We will never jeopardize your private data in exchange for money or otherwise. Privacy policy ensures that your data is stored safely.",
    features: [
      {
        title: "Exciting Freebies",
        text: "Each sociology task, however, will not only involve receiving quality work to achieve A+ grades, but also unique complementary materials. We offer tips that can enhance your learning experience and make it better and more effective. It is our means of providing you with added value and also assisting you to achieve in your studies."
      },
      {
        title: "Secure Payment Method",
        text: "We value your financial stability. Every payment is conducted via sophisticated, encrypted payment gateways that make the transactions very easy and secure. No matter how you pay with the use of a credit card, debit card, or digital wallets, all your personal and financial data is completely secured, so you can feel confident when using our services."
      },
      {
        title: "Plagiarism-Free Work",
        text: "We also ensure that we offer 100% original assignments that are done by qualified professionals. Every submission is thoroughly researched, composed and proofread to make sure it is plagiarism-free. We also give a step-by-step plagiarism report with every order, which means that you can submit your work to us and be sure that it will be of academic integrity."
      },
      {
        title: "Affordable Rates",
        text: "The best sociology assistance does not need to be costly. Our services are priced so that they are affordable to students; what you get is a service of high quality offering you that much value at a reasonable cost. You receive the best of the best without having to sacrifice the quality or your wallet."
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