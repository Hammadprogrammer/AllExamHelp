import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; 
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 

const Features = () => {
  // Updated Features Data Array for Physics Class Help Services
  const myFeatures = [
    {
      title: "Guaranteed Success",
      desc: "Guaranteed success is what we can give you when we attend online classes for you and help you understand everything in a very detailed way.",
      icon: <StarsOutlinedIcon />,
    },
    {
      title: "IP Address",
      desc: "We use a special IP address just for you, so nobody can find out that you asked someone to take your online class for you.",
      icon: <ShieldOutlinedIcon />,
    },
    {
      title: "Secure Payment Method",
      desc: "When you pay us, we use safe ways to do it with strong security and protection for you.",
      icon: <PaymentOutlinedIcon />,
    },
    {
      title: "24 Hours Availability",
      desc: "You can ask us to take your class for you at any time, morning or night and we will be there to help you with your school work.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Quality Work",
      desc: "We do all the work from the beginning. Give it to you, making sure to include all the important points from the class.",
      icon: <TaskAltOutlinedIcon />,
    },
    {
      title: "Subject-Help",
      desc: "We have over 650 experts in different subjects who can give you the right help and guidance for your specific class.",
      icon: <GroupOutlinedIcon />,
    },
    {
      title: "Reasonable Price Plan",
      desc: "Even though we give you service and expert help, our prices are very low and easy, within your budget.",
      icon: <LocalOfferOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Take a Look at the Premium Features of Our <span>Top-Notch Physics Class Help Services</span></>}
        subText={
          <p>
            You can find a lot of websites where you can pay someone to take a physics class for 
            you.. What makes Hire Class Buddy the best is our unique qualities. We are the 
            number one choice because of these qualities. We are special. That is why 
            people choose us over others to take their online physics classes.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;