import React from 'react';
import AboutSection from '../about-props/about/about';

const Contenttwo = () => {
  const contenttwoData = {
    badge: "USA Students",
    title: "Trust Our Services",
    descriptions: [
      "We know the anxiety and tension associated with the online exams; thus, our services are designed to help you streamline the process and give you 100% security. Whether you are a student, a professor, a working professional, or someone who is looking to transition your career into a new direction, our staff knows the best way to craft the most compelling essay that will give you the best chance at your dream career.",
    ],
    imageUrl: "/ac2.jpg",
    imageAlt: "Our Mission",
    imageLeft: false, // Image on left, text on right
    backgroundColor: "#f8f9fa" // Light gray background
  };

  return <AboutSection {...contenttwoData} />;
};

export default Contenttwo;