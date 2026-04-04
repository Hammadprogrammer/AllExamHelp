import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'; 
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'; 
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined'; 
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'; 

const Features = () => {
  // Updated Features Data Array for Biology Class Help Services
  const myFeatures = [
    {
      title: "Credentialed Tutors",
      desc: "Biology tutors are experts with years of teaching and knowledge, so there is no chance for inaccuracy to occur in your biology class.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7 Help",
      desc: "Get assistance with biology class outside of the classroom, including late at night and weekends, so you never miss out on a deadline or have to struggle alone.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Custom Guidance",
      desc: "Enjoy personalized, one-on-one support that can be customized to match your learning style, course demands, and pain points so you can maximize growth.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "Online Class Help",
      desc: "Get professional assistance with homework, lab reports, projects and other online class tasks delivered on time with precision and quality.",
      icon: <ComputerOutlinedIcon />,
    },
    {
      title: "Focus on Concepts",
      desc: "Study difficult biology topics, whether it is in cellular processes or genetics, so you can gain confidence in developing long-term knowledge.",
      icon: <BiotechOutlinedIcon />,
    },
    {
      title: "Cost-Efficient",
      desc: "High-quality support at student-friendly prices, with guaranteed consistency in helping you boost grades without breaking the bank.",
      icon: <SavingsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Biology Class Takers for Hire <span>– Get Expert Support Anytime</span></>}
        subText={
          <p>
            Hire our most reliable biology class takers for hire to do your classwork as needed. 
            Our subject matter experts who have experience and knowledge guarantee timely delivery 
            while also helping you grasp complex concepts so that you don’t fall behind in your 
            studies and improve your grades in no time.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;