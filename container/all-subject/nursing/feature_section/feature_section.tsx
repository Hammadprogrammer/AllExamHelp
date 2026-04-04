import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'; 
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined'; 
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; 
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const Features = () => {
  // Updated Features Data Array for Online Nursing Class Help
  const myFeatures = [
    {
      title: "Safety and Security",
      desc: "Your personal information and education details are completely secure. Every communication and transaction is secured through systems that do not leave room for any breach of privacy.",
      icon: <ShieldOutlinedIcon />,
    },
    {
      title: "24/7 Availability",
      desc: "We have an available team at any time. You can get assistance with any assignment, quiz, or classwork at any time of day.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "On-Time Response",
      desc: "Our queries and assignments are on top of your list. So, you never miss a deadline or get behind on your studies, and expect fast and reliable responses.",
      icon: <TimerOutlinedIcon />,
    },
    {
      title: "Affordable Charges",
      desc: "We offer a cost-effective and upfront listing of our services. We give you the best academic help, but not with stretching your bank account — you get value for every single penny.",
      icon: <PriceCheckOutlinedIcon />,
    },
    {
      title: "Flexible Scheduling",
      desc: "We work with your schedule, so you can get help whenever it suits you. Whether it’s a one-off task or continuing classwork, we work around your student life.",
      icon: <EventNoteOutlinedIcon />,
    },
    {
      title: "Expert Academic Support",
      desc: "Collaborate with experts who provide precise solutions and explanations. The tutors assist you in understanding the complex topics and doing your assignments correctly.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Guaranteed Quality Work",
      desc: "All assignments undergo editing and proofreading as per academic standards. They produce organized content without typos and always on time.",
      icon: <VerifiedOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Top Grades Made Easy: <span>Take Online Nursing Class Help Today</span></>}
        subText={
          <p>
            Do you have any idea of tight deadlines and intricate topics? You’re in the 
            right place! Our take my online nursing class service is designed to assist you 
            from privacy to top grades.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;