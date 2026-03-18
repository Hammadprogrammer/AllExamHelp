import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const Features = () => {
  // Features Data Array updated with your text
  const myFeatures = [
    {
      title: "200+ Qualified Experts",
      desc: "Over 200 academic professionals across the main fields are a part of our service team and support them in achieving top grades in online classes.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Low-Cost Rates",
      desc: "We offer high-level class assistance at student-friendly rates, which means getting professional academic assistance without breaking the bank.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Connect with Experts Directly",
      desc: "Instead of waiting for guidance or updates, students can communicate with their assigned experts directly and receive quick help or class-related support.",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "All Day, Every Day Support",
      desc: "We have a trained team available 24/7 to answer all your queries and give you timely updates on the task given for online classes.",
      icon: <HeadsetMicOutlinedIcon />,
    },
    {
      title: "Quick Payment Options",
      desc: "A speedy and simple payment experience that is safe and secure. All of your payment details and transactions are encrypted with us.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "Proven Academic Results",
      desc: "An average of A and A+ for the work we do, our service is focused on quality work provided well before time.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Hire Our Trusted Do My Online Class - Your One-Stop Solutions</>}
        subText={
          <p>
            Take the burden of your class off your shoulders with secure assistance from our class takers! From project and quizzes to class management, we have everything you need in one place to keep you afloat. 
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;