import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; 
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 

const Features = () => {
  // Updated Features Data Array for Online Test Service
  const myFeatures = [
    {
      title: "Expert Test Takers",
      desc: "Our team of subject experts is capable of handling tests, even for tricky disciplines. An academic background means their solutions are correct, leading to top grades every time.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Round-the-Clock Help",
      desc: "We help you at any hour of the day or night. We are more than willing to take your quizzes. We provide updates and assist you every step of the way.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "On-Time Performance",
      desc: "We abide by the exam schedules and deadlines and never miss any! It is always done with professionalism and on time, from A to Z.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Track Record of Success",
      desc: "With a documented track record of successful tests and happy clients, we have a great reputation you can trust.",
      icon: <ReplayOutlinedIcon />,
    },
    {
      title: "Your Identity is Secret",
      desc: "Your name is protected. We are always strict on confidentiality, and your identity and other personal details will be fully secure at all times.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Competitive Price",
      desc: "You will get top services at a low cost. We understand how important test help is. We provide clear and flexible pricing that allows every student to get professional assistance.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Some Standout Features of Our Top-Notch Do My Test for Me Service</>}
        subText={
          <p>
            Our trustworthy pay someone to take my online test service is known for excellent 
            test takers, round-the-clock support, and a history of success. Every test 
            promises to be timely, private and of high quality. Our reasonably priced 
            academic solutions help you achieve your goals with accurate results.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;