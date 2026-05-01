import React from 'react';
import AboutSection from '../about-props/about/about';

const Contentfour = () => {
  const contenttwoData = {
    badge: "Meet",
    title: "Our Team",
    descriptions: [
      "All Exam Help is backed by a team of certified professionals, faculty, and exam attenders. We handpick each of our team members for their academic and technical competencies to provide you with the best help available. Our squad is comprised of round-the-clock professionals available 24 hours a day, so that no matter where you live, help is never far away. In addition to their expertise, our team members are committed mentors who recognize the value of support, encouragement, and motivation for each and every student.",
    ],
    imageUrl: "/ac4.jpg",
    imageAlt: "Our Mission",
    imageLeft: false, // Image on left, text on right
    backgroundColor: "#f8f9fa" // Light gray background
  };

  return <AboutSection {...contenttwoData} />;
};

export default Contentfour;