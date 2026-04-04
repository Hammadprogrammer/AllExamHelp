import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'; 
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'; 
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined'; 
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'; 
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 

const Features = () => {
  // Updated Features Data Array for Online Business Class Help
  const myFeatures = [
    {
      title: "Customized Assignment Solutions",
      desc: "Every piece of work produced is done so in strict accordance with your guidelines, provided assessment criteria and level of education, leaving the completed piece perfectly suited to your university degree.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Wide Subject Coverage",
      desc: "We offer academic help for all of the major business disciplines (finance, marketing, management, accounting, etc.) so that you can get assistance no matter how complex your classwork is.",
      icon: <BusinessCenterOutlinedIcon />,
    },
    {
      title: "Unlimited Revisions",
      desc: "Our main goal is to provide you with the work you dreamed of, which is why we have unlimited revisions and allow you to request a revision until our work fully meets your expectations and academic standards.",
      icon: <PublishedWithChangesOutlinedIcon />,
    },
    {
      title: "Fast Turnaround Options",
      desc: "Have a tight turnaround? With the help of our team, urgent needs are met in no time, and you always get high-quality assignments, even with short turnarounds, with no room for error or with quality.",
      icon: <SpeedOutlinedIcon />,
    },
    {
      title: "Attention to Detail",
      desc: "We focus on fine details, such as guidelines and formatting styles (APA, MLA, etc.), professors’ instructions, so that your work is as accurate as it can be and ready for submission.",
      icon: <RuleOutlinedIcon />,
    },
    {
      title: "Consistent Quality Assurance",
      desc: "Each of your papers goes through several layers of quality checks to guarantee that it meets all your necessary standards about its accuracy, clarity, originality, and professionalism.",
      icon: <VerifiedUserOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Get Help with Online Business <span>Class from Experienced Experts</span></>}
        subText={
          <p>
            Hire a business class taker at Hire Class Buddy with years of 
            experience in providing excellent quality support for assignments, projects and 
            classwork. We only provide accurate, correctly formatted work as per specific needs.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;