import React from 'react';
import { Container } from '@mui/material';
import styles from './feature_section.module.scss';

// MUI Icons - Content ke hisab se icons select kiye gaye hain
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const FeaturesSection = () => {
  const features = [
    {
      title: "Timely Delivery",
      desc: "Understanding the importance of deadlines, we ensure to complete our work on time.",
      icon: <SpeedOutlinedIcon />,
    },
    {
      title: "Student-Friendly Prices",
      desc: "We also understand that students and professionals have different budgets, so we offer affordable rates.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Privacy Guaranteed",
      desc: "We don't care who you are, which is why our service is completely encrypted and we don’t share or sell any data to third parties.",
      icon: <EnhancedEncryptionOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Courses",
      desc: "When you pay someone to take my class, the paper is 100% original and has a plagiarism report.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      title: "Top-Notch Helpers",
      desc: "We have a large number of experienced experts with many subjects and exam styles to ensure quality.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7/365 Availability",
      desc: "We offer 24/7 customer support for our service to cater to your needs whenever you need us.",
      icon: <HeadsetMicOutlinedIcon />,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container maxWidth="lg">
        {/* Main Heading from Image */}
        <h3 className={styles.mainHeading}>Top-Notch Take My Class Solutions You Can Count On</h3>
        
        {/* Sub-text from Image */}
        <p className={styles.subText}>
          Are you feeling overwhelmed by tight deadlines and complex subjects? You’re in the right place! From privacy to top grades, our hire someone to take my online class service provides personalized guidance at every step.
        </p>

        <div className={styles.gridContainer}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
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