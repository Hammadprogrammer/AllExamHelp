import FeaturesSection from "@/container/All-props-comp/feature_section/feature_sectio";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const FeatureSectionHome = () => {
  const features = [
    {
      title: "Available Whenever",
      desc: "Get the help you need before that exam, no matter what time we offer support 24/7.",
      icon: <CheckBoxOutlinedIcon />,
    },
    {
      title: "Qualified Team",
      desc: "We are a team of experts who have experience in many categories and types of examinations.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Secure & Private",
      desc: "All your personal data and exam details are secured with us, offering you privacy.",
      icon: <WifiTetheringOutlinedIcon />,
    },
    {
      title: "Track Record",
      desc: "Students prefer our services to get higher grades, and you can be next with our experienced team.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      title: "No Stress",
      desc: "Our experts take into account everything you need to know, while letting you relax and stress-free!",
      icon: <SentimentSatisfiedAltIcon />,
    },
    {
      title: "Personalized Assistance",
      desc: "You will receive personalized support and guidance so that you can perform at your best.",
      icon: <PersonOutlineOutlinedIcon />,
    },
  ];

  return (
    <FeaturesSection
      mainHeading="Take A Look at Our Service Features"
      subText="Our services are user-friendly, safe, and straightforward. Expert guidance and assistance will help you when you need it. For us, everything is designed to help you succeed with confidence."
      features={features}
    />
  );
};

export default FeatureSectionHome;
