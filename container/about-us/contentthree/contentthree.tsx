import React from 'react';
import AboutSection from '../about-props/about/about';

const Contentthree = () => {
  const contenttwoData = {
    badge: "Our",
    title: "Mission",
    descriptions: [
      "Our goal is plain and simple: to equip learners with the resources necessary to achieve their educational and career goals. Education is the driving force behind progress, yet exams can be daunting. That’s why we work hard to take the stress out and put your success front and center with our discreet, results-driven services. We also aspire to equal opportunities for students. No matter who you are, where you’re from, what you struggle with, or how little time you have – we make sure you have access to a hand to hold that will guide you to a better, greater version of yourself.",
    ],
    imageUrl: "/ac3.jpg",
    imageAlt: "Our Mission",
    imageLeft: true, 
    backgroundColor: "#f8f9fa" 
  };

  return <AboutSection {...contenttwoData} />;
};

export default Contentthree;