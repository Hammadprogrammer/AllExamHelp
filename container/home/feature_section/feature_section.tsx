import React from 'react';
import { Container } from '@mui/material';
import styles from './feature_section.module.scss';

// MUI Icons
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const FeaturesSection = () => {
  const features = [
    {
      title: "Student-friendly prices",
      desc: "We acknowledge that students and professionals have varying financial limitations, which is why we provide affordable rates.",
      icon: <PaidOutlinedIcon />,
    },
    {
      title: "Privacy guaranteed",
      desc: "We value your anonymity, so our service is fully encrypted and we only need your email to get started.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Timely delivery",
      desc: "We know the significance of time deadlines and are dedicated to providing our services promptly.",
      icon: <SpeedOutlinedIcon />,
    },
    {
      title: "Plagiarism-free exams",
      desc: "The paper when you ask to 'do my exams' is completely unique, and we provide a plagiarism report.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Top-notch helpers",
      desc: "Our team has a wealth of experience in a variety of subjects and exam formats to ensure high quality.",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "24/7/365 availability",
      desc: "Our service has a customer support team that is accessible round the clock, any time you need us.",
      icon: <SupportAgentOutlinedIcon />,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container maxWidth="lg">
        {/* Requirement: Heading H3 */}
        <h3 className={styles.mainHeading}>Do my online exam service that meets your needs</h3>
        <p className={styles.subText}>
          Are you feeling overwhelmed by deadlines? You have come to the perfect location! 
          Our expertise lies in delivering exceptional custom-made orders.
        </p>

        <div className={styles.gridContainer}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              {/* Requirement: Icon Box Heading H5 */}
              <h5 className={styles.cardHeading}>{item.title}</h5>
              <p className={styles.cardDescription}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;