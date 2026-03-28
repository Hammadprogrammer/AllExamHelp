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
      title: "Qualified Professionals",
      desc: "Our team includes top-notch expert writers with deep knowledge in various subjects, so you will always get your coursework handled by the right professionals.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Good Grades",
      desc: "All tasks are well written, ensuring that you get a smooth experience and a higher GPA, along with being highly confident in having completed your coursework.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Refund Policy",
      desc: "Your trust is important to us. In the event that our service is unable to completely fulfil your needs, we would issue a refund in accordance with our trusted refund policy.",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "Meet Deadlines",
      desc: "Assignments, quizzes, and course tasks are delivered automatically on time so that you never miss a deadline or stress.",
      icon: <HeadsetMicOutlinedIcon />,
    },
    {
      title: "Unlimited Revisions",
      desc: "You need to be happy. You can avail unlimited revisions to ensure each submission meets your requirements.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "Plagiarism Report",
      desc: "100% authentic plagiarism-free writing, provided with a validated plagiarism report for credibility.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Key Features of Our Top-Tier Online Course Help Services</>}
        subText={
          <p>
We offer pay someone to do online course to take the burden off your shoulders. Ensuring students' academic success, we provide expert guidance, 100% human-written work, as well as full assignment, quiz, and exam support.          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;