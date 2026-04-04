import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'; 
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'; 

const Features = () => {
  // Updated Features Data Array for Chemistry Class Help Services
  const myFeatures = [
    {
      title: "Tailored Assignment Solutions",
      desc: "Each task is tailored to align with your provided instructions, grading rubric and academic level. Thus, you get assignments that are grade-o-and academic-perfect.",
      icon: <SettingsSuggestOutlinedIcon />,
    },
    {
      title: "All Chemistry Branches Covered",
      desc: "Get instant help on any core branch of chemistry, such as organic, inorganic, physical, analytical and biochemistry. Whatever the subject, however involved, we can help.",
      icon: <ScienceOutlinedIcon />,
    },
    {
      title: "No Plagiarism Work",
      desc: "Completion of all distinct assignments, projects and reports. You submit your work, and you know that it is unique and academically valid.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Original Writing, Timely Delivery",
      desc: "No more missed deadlines. Assurance for timely delivery of all assignments and projects so that you have enough time to review and are never behind on your class work.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Fair & Affordable Pricing",
      desc: "Get high-quality chemistry assistance at budget-friendly rates. With clear pricing and no sneaky fees, you know exactly what you're paying for all the time.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Free Revisions",
      desc: "Satisfaction is our priority. Request changes as many as it takes until the final product fully conforms to what you envisioned and exactly complies with your professor’s instructions.",
      icon: <ReplayOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Expert Chemistry Class Help Services <span>– Ace Assignments Without the Hassle</span></>}
        subText={
          <p>
            Get expert chemistry class help services and ace your assignments without the hassle. 
            Our professionals provide accurate, well-researched support for projects and classwork. 
            Here is more of what we are offering.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;