import React from 'react';
import AboutSection from '../about-props/about/about';

const ContentOne = () => {
  const contentOneData = {
    badge: "About Us",
    title: "All Exam Help – Reliable Support for Online Exams",
    descriptions: [
      "At All Exam Help, we are a reputable brand that aims to provide personalized and confidential exam help services to our clients. Our success is based on a simple, but powerful concept—minimizing obstacles to success for learners with discretion and trustworthiness. We believe in trust, confidentiality, and results, and thanks to these three key principles, we have developed hundreds of students worldwide, and our online exam help is the best service available on the internet. With our professional team and cutting-edge approach, we have now helped thousands of students reach their goals without stress or difficulty.",
    ],
    imageUrl: "/about1.jpg",
    imageAlt: "Our Mission",
    imageLeft: true, // Image on left, text on right
    backgroundColor: "#f8f9fa" // Light gray background
  };

  return <AboutSection {...contentOneData} />;
};

export default ContentOne;