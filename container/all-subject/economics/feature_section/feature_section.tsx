import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 

const Features = () => {
  // Updated Features Data Array for Economics Class Help
  const myFeatures = [
    {
      title: "Affordable Pricing",
      desc: "This is to say that, rest assured, you got qualified help at discounted rates for your economics assignment help.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "One-on-One Interaction",
      desc: "All these e-learning portals allow you to discuss your queries with experienced tutors and understand concepts more clearly, and help you with your academic needs.",
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "You're never stranded at any stage, with 247 help for assignments, exams or last-minute doubts.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Hassle-Free Process",
      desc: "Provide a system for submitting requirements and tracking your work from progress to completion without the headaches.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Qualified Experts",
      desc: "Highly-qualified economics experts with extensive subject knowledge and research experience in a wide range of branches of economics.",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Work",
      desc: "Get your work done with 100% original content, as well as high-quality research with an advanced plagiarism checking tool as an assurance to meet quality standards.",
      icon: <FactCheckOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>What Do We Offer if You Get Help with the <span>Economics Class from Hire Class Buddy</span></>}
        subText={
          <p>
            Hire Class Buddy offers expert help, from personalized support to 
            timely assistance tailored to meet the needs of your course. From assignments 
            and classwork to taking exams, we provide quality work that is plagiarism-free 
            while helping you get better grades without all of the academic stress.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;