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
  // Updated Features Data Array for Statistics Class Help Services
  const myFeatures = [
    {
      title: "Auto-Track Progress",
      desc: "We keep you updated about the progress of your class through SMS, WhatsApp or email. You will not miss any updates with our assistance, which is available all the time.",
      icon: <TrackChangesOutlinedIcon />,
    },
    {
      title: "Payment Plans and Flexibility",
      desc: "We make a payment plan that fits your needs. You can ask us to divide your payment into many parts that you can pay over the time you are taking the online course. There are no fees.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "No Plagiarism No ChatGPT",
      desc: "We give you work that's free from plagiarism so you can get the best grades. We do not allow work that is made by ChatGPT or other artificial intelligence tools. So you can. Get the best grades in your online class.",
      icon: <AutoFixOffOutlinedIcon />,
    },
    {
      title: "World-Class Support",
      desc: "Whenever you need help, just send us a message. We will get back to you within ten minutes to help you with your questions. We think that giving support to our clients is very important.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "American Experts",
      desc: "We are a company from the United States, and we want to give you the best service. Our teachers are from universities in the US and they have to go through a tough process before they can work with us.",
      icon: <PublicOutlinedIcon />,
    },
    {
      title: "Money Back Guarantee",
      desc: "If you do not get the grade you want in your class, we will give you your money back. Our guarantee to refund your money keeps your money safe.",
      icon: <CurrencyExchangeOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Some Unique Features of Our <span>Best Online Statistics Class Help Services</span></>}
        subText={
          <p>
            Our online Statistics class help services are really good. We give you expert help 
            and assignments that are totally original. This is how our online Statistics 
            class helps make it easy for you.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;