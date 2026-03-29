import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'; // For Free Revisions
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; // For 24/7 Service
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; // For Plagiarism Report
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; // For Pocket-Friendly
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; // For Confidentiality
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; // For On-Time Delivery

const Features = () => {
  // Updated Features Data Array
  const myFeatures = [
    {
      title: "Free Revisions",
      desc: "We offer a free multiple revision policy as a commitment to our service. We are always here if you need any tweaks.",
      icon: <ReplayOutlinedIcon />,
    },
    {
      title: "24/7 Service",
      desc: "At our service, our crew is available round the clock. No matter if you need help in the 11th hour, you can contact us any time.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Free Plagiarism Report",
      desc: ": Get a free plagiarism report with every order to ensure complete originality in your assignments. ",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Pocket-Friendly Cost",
      desc: "We provide budget pricing on our assignment help without compromising the quality of writing to suit students’ tight budgets.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
    {
      title: "100% Confidentiality",
      desc: "We take care in keeping your personal data, payment information and order details completely safe and confidential.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "On-Time Delivery",
      desc: "When orders are on time, you receive your assignment much earlier than the deadline. So we can make amendments if needed!",
      icon: <AccessTimeOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Key Features of Premium Assignment Writing Service in the USA</>}
        subText={
          <p>
Looking for an assignment writing service? You can trust Hire Class Buddy! We provide a competent service to enable students to finish their assignments professionally. We focus on quality, originality, and timely delivery to make your assignment experience stress-free and convenient.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;