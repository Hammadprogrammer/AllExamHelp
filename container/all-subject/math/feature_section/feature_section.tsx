import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'; 
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined'; 
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; 

const Features = () => {
  // Updated Features Data Array for Math Class Help Services
  const myFeatures = [
    {
      title: "Affordable Pricing",
      desc: "Our math help services are affordable for students to have access without financial constraints. We offer pricing plans that ensure you can afford the best tutoring without breaking the bank.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Direct Tutor Support",
      desc: "Take advantage of the opportunity to consult with our qualified tutors directly. You receive tailor-made communication to break down complex concepts and have your questions answered conveniently.",
      icon: <PersonSearchOutlinedIcon />,
    },
    {
      title: "24/7 Assistance",
      desc: "Always ready to help, our customer support team is available 24/7. Rain or shine, night or day, we’re here to walk you through every part of the learning process with full support.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Simple Online Process",
      desc: "Our online billing system is convenient and secure! So, you could devote yourself to your studies while we handle all payment and administrative aspects quickly and securely.",
      icon: <PaymentOutlinedIcon />,
    },
    {
      title: "Qualified Math Experts",
      desc: "We have specialized academic experts in math with years of experience. They can provide you with proper and clear solutions so that you can improve your grades quickly.",
      icon: <FunctionsOutlinedIcon />,
    },
    {
      title: "Original & Accurate Work",
      desc: "All solutions and papers we provide are quality tested. Your content will pass through most sophisticated anti-plagiarism technologies, so that it can be 100% identical and of high academic quality.",
      icon: <TaskAltOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Core Features of Our <span>Top-Notch & Reputable Math Class Help Services</span></>}
        subText={
          <p>
            Get reliable, expert-led math support designed for 
            accuracy and results. Our services focus on clear solutions, timely submissions, 
            and consistent performance. Experience a smarter way to handle your math classwork 
            with confidence.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;