import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import StarOutlineIcon from '@mui/icons-material/StarOutline'; 
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; 
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'; 

const Features = () => {
  // Updated Features Data Array for Proctored Exam Service
  const myFeatures = [
    {
      title: "Result-Oriented",
      desc: "We are here to help you get a straight A+ grade! We are committed to providing results that exceed your expectations. We work day and night tirelessly so that you can get an A-grade in your exam.",
      icon: <StarOutlineIcon />,
    },
    {
      title: "Money-back Guarantee",
      desc: "Fearful that you won’t achieve the results you expect? Then you get your money back, we guarantee it. Because we want you to be happy, and that is our priority!",
      icon: <CurrencyExchangeOutlinedIcon />,
    },
    {
      title: "Subject Specialist",
      desc: "Our team includes subject matter experts. They are highly qualified and can do comprehensive research on every subject. We’ve got you covered when it comes to daunting proctored exams!",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "IP Verifier",
      desc: "Your safety is our number one priority. For every order, we verify account location and safety. We keep the safety of your information, making things more confidential and encrypting identities for peace of mind.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Data Encryption",
      desc: "Your personal info is like a secret code, and we have special tools to lock it to you and keep it safe. Sharing your exam ID password is a special encoding process.  We make sure your ID remains fully secure both during and after the exam.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Affordable Pricing",
      desc: "We maintain a low-cost model to ensure everyone can afford help. With us, you do not have to strain your budget to access learning help; we make proctored exam help available for all.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Why Choose “Do My Proctored Exam Help” for Guaranteed Results</>}
        subText={
          <p>
            We provide reliable, secure, and result-driven take my online proctored exam help 
            tailored to your needs. With qualified subject experts, strict data protection, 
            and affordable pricing, our services are designed to deliver top academic 
            performance. Your success, privacy, and satisfaction remain our highest 
            priorities throughout the entire process.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;