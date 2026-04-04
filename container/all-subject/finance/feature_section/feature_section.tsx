import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined'; 
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'; 

const Features = () => {
  // Updated Features Data Array for Finance Class Help Services
  const myFeatures = [
    {
      title: "Timely Delivery",
      desc: "As we also understand the value of time, each assignment, quiz, and exam submission is delivered on time, so you never have to worry about late submissions affecting your grades.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Affordable Pricing for Students",
      desc: "Blended learning programs are on the rise, but so is accessibility; switching to online or face-to-face formats is one of the ways students and working professionals have different budgets at their disposal.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Confidentiality",
      desc: "Your details remain safe and secure with us. You only need to focus on your work, we take care of everything else. There is end-to-end encryption for data, and we never share or sell any data with 3rd party ever.",
      icon: <ShieldOutlinedIcon />,
    },
    {
      title: "Original Work",
      desc: "All essays and projects are original research, guaranteed 100% plagiarism-free content, along with a report.",
      icon: <HistoryEduOutlinedIcon />,
    },
    {
      title: "Superb Guides",
      desc: "Our entire expert team is experienced in diverse subjects and exam formats, so you get subject-specific guidance for your course needs.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Always Open",
      desc: "Any hour, any day, every week and month throughout the year, you can still get help and support to raise questions or tend urgent tasks since we are available always.",
      icon: <EventAvailableOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Pay Someone to Take My Online Finance Class <span>Trusted by USA Students</span></>}
        subText={
          <p>
            Take online finance class trusted by students across the USA. Achieve top 
            grades with reliable, hassle-free support from professionals who know what it 
            takes to succeed. You can stay ahead in your course and boost your academic 
            performance confidently.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;