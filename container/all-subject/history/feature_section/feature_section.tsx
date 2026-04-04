import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'; 
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'; 

const Features = () => {
  // Updated Features Data Array for Top-Rated Online History Class Help
  const myFeatures = [
    {
      title: "No Missing Deadlines",
      desc: "All assignments, classwork or projects are completed no later than a full day before the actual deadline. So, you have peace of mind and time to review your work.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Control over Class",
      desc: "We are well-versed with every learning platform online, ensuring that we make you one step ahead of your peers while managing work, tracking class completion, and the content.",
      icon: <AutoStoriesOutlinedIcon />,
    },
    {
      title: "Guaranteed B or Higher Grades",
      desc: "Our online history class help services guarantee a B-grade at least, which means that you will do better than before, and it will help in lowering your stress level.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Group Projects Handled",
      desc: "Working in coordination with your batchmates, we make sure all group submissions are made correctly on time so that everyone benefits from hassle-free coordination.",
      icon: <GroupAddOutlinedIcon />,
    },
    {
      title: "Around-the-Clock Support",
      desc: "Our tutors are on call 24/7 to address questions, offer advice, and take care of important or urgent requests when you require our help.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "AI-Free Writing",
      desc: "Everything you receive is original, thoroughly researched, and bound to pass any AI detection tools — write without fear of reusing content or otherwise dealing with authenticity issues.",
      icon: <CreateOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Some Key Features of Our <span>Top-Rated Online History Class Help</span></>}
        subText={
          <p>
            Hire PhD-level tutors help even at the 11th hour. We have built a 
            great online class help platform and invested in it well. We deliver support 
            that is quick and action-oriented, creating outcomes you can trust. It is one 
            of the reasons we are the best choice for students and professionals to take 
            classes online. always on time and of high quality.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;