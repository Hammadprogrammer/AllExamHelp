import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined'; 
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'; 
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 

const Features = () => {
  // Updated Features Data Array for Psychology Class Help Services
  const myFeatures = [
    {
      title: "No Cost",
      desc: "We are open and honest about our services. You will never get charges or fees that you did not expect.",
      icon: <MoneyOffOutlinedIcon />,
    },
    {
      title: "Trained Professionals",
      desc: "You get help and guidance from writers who are very well-trained. They give you solutions that are just right for you and are accurate and excellent.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Exciting Freebies",
      desc: "You get benefits with every assignment. These help you get grades and add value to your work.",
      icon: <CardGiftcardOutlinedIcon />,
    },
    {
      title: "Secure Payment Method",
      desc: "You can pay us safely. Our payment system is secure. Makes it easy and safe to pay us.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Work",
      desc: "All the work we do is original. We also give you a report that shows your work is not copied. This way, you can be sure your work is authentic and honest.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Affordable Rates",
      desc: "We charge low prices for our services. We want to help you with your assignments for the money you spend.",
      icon: <LocalOfferOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Professional Online Psychology Class Help <span>Services Trusted by the USA Students</span></>}
        subText={
          <p>
            Get help with psychology class from people you can trust. Our team helps you with 
            your work. Explains things to you so you can do better in Psychology class and 
            feel more confident. You can study Psychology in a way that keeps up with your schoolwork 
            easily with our psychology class help.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;