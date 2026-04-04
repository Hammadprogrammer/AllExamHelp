import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; 
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'; 
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'; 
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'; 
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; 
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'; 

const Features = () => {
  // Updated Features Data Array for Professional Computer Class Help
  const myFeatures = [
    {
      title: "Tailor-Made Solutions",
      desc: "Get a custom solution designed to reach your course-related and individual tasks, where every assignment fits you.",
      icon: <SettingsSuggestOutlinedIcon />,
    },
    {
      title: "Privacy and Security",
      desc: "Your studies and personal information never escape our lips, so you can get the help you need without worrying about your social reputation.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Detailed Explanations",
      desc: "We explain every idea in detail with easy-to-follow videos so you’ll never feel lost.",
      icon: <PlayCircleOutlineOutlinedIcon />,
    },
    {
      title: "No Stress Education",
      desc: "Less academic pressure and deadlines anxiety because you keep control of your one-on-one coursework with expert support!",
      icon: <SentimentSatisfiedAltOutlinedIcon />,
    },
    {
      title: "Affordable Help",
      desc: "Assistance is provided for all forms of online computer courses, including projects and assignments, to meet your demanding schedule and needs.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
    {
      title: "Around-the-Clock Service",
      desc: "Get professional help day or night and take care of all those time-critical tasks without missing a beat.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Solutions that Work",
      desc: "We deliver more than answers, creating real-world solutions that are accurate and practical.",
      icon: <CheckCircleOutlineOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Professional Computer Class Help <span>Services You Can Trust</span></>}
        subText={
          <p>
            Get professional computer class help services you can trust from expert PhD tutors. 
            Our team assists students with their coursework while ensuring a smooth, 
            stress-free learning experience.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;