import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'; 
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'; 
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'; 
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; 
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined'; 
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'; 

const Features = () => {
  // Updated Features Data Array for Online Law Class Help
  const myFeatures = [
    {
      title: "Instant Chat Support",
      desc: "Reach our experts via live chat 24/7 and get instant, trustworthy responses for your law class without waiting long.",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "Dedicated Assistance Team",
      desc: "Ours is an extremely friendly support writing staff, always there to help you out, solve concerns and in short make sure that you have a smooth academic life.",
      icon: <Diversity3OutlinedIcon />,
    },
    {
      title: "Expert Legal Professionals",
      desc: "Collaborate with highly-qualified legal professionals who have relevant subject knowledge and real-world expertise within your class of study.",
      icon: <GavelOutlinedIcon />,
    },
    {
      title: "Proven Quality Service",
      desc: "This is why students around the globe turn to us for law class help, but not just any help; we provide accurate, quality law class help that gets results.",
      icon: <VerifiedOutlinedIcon />,
    },
    {
      title: "Budget-Friendly Pricing",
      desc: "Access premium law class assistance at affordable rates designed to fit student budgets without compromising quality.",
      icon: <PriceCheckOutlinedIcon />,
    },
    {
      title: "Value-Packed Deals",
      desc: "Seize valuable opportunities to access affordable, quality law class assistance while getting the most money per dollar spent.",
      icon: <SavingsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Hire Class Buddy, Your One-Stop Solution <span>for Pay Someone to Do My Online Law Class for Me</span></>}
        subText={
          <p>
            Just visit us and say, “I want to hire someone to take my online law class,” 
            and our certified writers will give you unmatched work tailored to the ground 
            zero. We are here 24/7 at your service to solve your queries to the best.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;