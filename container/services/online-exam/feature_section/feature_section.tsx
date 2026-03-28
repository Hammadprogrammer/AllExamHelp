import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Updated Icons for better relevance
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'; // For Scholars
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'; // For Well-Researched Questions
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; // For High Success Support
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // For Confidentiality
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; // For 24/7 Availability
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; // For Safe & Reliable

const Features = () => {
  // Features Data Array updated with your specific content
  const myFeatures = [
    {
      title: "Pool of 4598+ Scholars",
      desc: "Select among a variety of exam professionals and forget about your exam concerns. Press the Order now button!",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Well-Researched Questions",
      desc: "Our service is offered by professional tutors who prepare your exam questions after hours of research and they have a huge question bank. ",
      icon: <MenuBookOutlinedIcon />,
    },
    {
      title: "High Success Support",
      desc: "Our professional tutors will follow all your given instructions, exam format, and original answers to get you the highest grades.",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "Confidentiality",
      desc: "We do not compromise on the privacy of individual students. All the individual data and communications are kept confidential and locked.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "24/7 Availability",
      desc: "Students could always contact us to seek academic support. Our tutors work 24 hours a day to respond to questions and offer study assistance.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Safe & Reliable",
      desc: "We offer safe and reliable hire someone to take my exam, which can be accessed by students all over the globe. All you need to do is give us a buzz.",
      icon: <VerifiedUserOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Hire Class Buddy Your 24/7 Online Exam Help Partner is Here</>}
        subText={
          <p>
            Take the burden of your exams off your shoulders with secure assistance from our professional tutors. 
            From research-backed questions to 24/7 support, we have everything you need to succeed.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;