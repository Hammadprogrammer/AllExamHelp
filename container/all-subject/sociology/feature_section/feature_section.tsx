import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined'; 
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'; 
import AutoFixOffOutlinedIcon from '@mui/icons-material/AutoFixOffOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'; 
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'; 

const Features = () => {
  // Updated Features Data Array for Sociology Class Help Services
  const myFeatures = [
    {
      title: "Auto-Track Progress",
      desc: "We provide you with updates on your class's progress via SMS / WhatsApp, or email. There is no update that you miss when we have 247 support.",
      icon: <TrackChangesOutlinedIcon />,
    },
    {
      title: "Payment Plans & Flexibility",
      desc: "We customize our payment plan as per your needs, and you can ask us to divide your payment into multiple instalments payable over the span of your online class. No hidden fee.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "None Plagiarism/ No ChatGPT",
      desc: "We deliver plagiarism-free assignments that can help you achieve the best grades. Our policy on the content created using ChatGPT or other artificial intelligence systems is very strict, so you should not worry and get the highest grades in your online class.",
      icon: <AutoFixOffOutlinedIcon />,
    },
    {
      title: "World-Class 24/7 Support",
      desc: "You can always get in touch with us by sending us a text, and we will respond to you in 10 minutes to assist you with your questions. We have a belief in providing the best client service.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Only American Experts",
      desc: "We are a US Inc company and we believe in the provision of world-class service. Our scholars are from the high-end US institutes and undergo our stringent recruitment procedure before their employment.",
      icon: <PublicOutlinedIcon />,
    },
    {
      title: "Money Back Guarantee",
      desc: "If you fail to achieve the desired grade in your online class, we will not make you lose the money. Our 100% money back guarantee is the assurance that your money is safe.",
      icon: <CurrencyExchangeOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>We Offer Top-Tier Sociology <span>Class Help Services to Students in the USA</span></>}
        subText={
          <p>
            Our services are of the highest quality in terms of sociology class services to 
            students all over the USA. Our professional tutors help with assignments, 
            classwork, and get better grades. Get quality and punctual assistance according 
            to your studies.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;