import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'; 
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'; 
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'; 
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'; 

const Features = () => {
  // Updated Features Data Array for Philosophy Class Help
  const myFeatures = [
    {
      title: "On-Time Delivery",
      desc: "We complete even urgent tasks on time. Quality never suffers and you will always meet your deadlines.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "100% Plagiarism-Free Work",
      desc: "Each paper is original and written from scratch. We guarantee 100% original, authentic and credible philosophy assignment work.",
      icon: <DoneAllOutlinedIcon />,
    },
    {
      title: "4.5k+ Courses Completed",
      desc: "Millions of philosophy courses taken — Metaphysics, Epistemology: actual students, actual work, actual grades.",
      icon: <AutoStoriesOutlinedIcon />,
    },
    {
      title: "90 k+ Trusted by Students",
      desc: "With us, students around the globe can get their philosophy class help in an easy way, be it ethics or political philosophy.",
      icon: <PeopleAltOutlinedIcon />,
    },
    {
      title: "80 Expert Philosophy Tutors",
      desc: "With graduates, postgraduates and PhDs on our team, we handle everything from logic to existentialism to philosophy of science.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "3.4 k+ A Grades Delivered",
      desc: "Since we don’t just help you pass, our focus is on excelling. We have a trusted record of thousands of students.",
      icon: <EmojiEventsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Top-Notch Features of Our <span>Reliable Online Philosophy Class Help for USA Students</span></>}
        subText={
          <p>
            We provide highly qualified assistance for your assignments, essays and 
            daunting philosophical ideas. Reputable assistance, crystal-clear breakdowns, 
            and quick service to all students mastering complex concepts with ease to 
            skyrocket their confidence and grades!
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;