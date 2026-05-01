import React from 'react';
import styles from './WhyChooseUs.module.scss';
import LockIcon from '@mui/icons-material/Lock';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <LockIcon sx={{ fontSize: 40 }} />,
      title: "Complete Privacy",
      description: "Your privacy is our priority"
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Expert Team",
      description: "Professional experts in a variety of subjects"
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40 }} />,
      title: "Good Value",
      description: "Get the best results for your investment"
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Proven Success",
      description: "Very high pass rate with different exams"
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: "24/7 Support",
      description: "We never sleep, so we can help anytime"
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topTitle}>Why</span>
          <h2 className={styles.mainTitle}>Choose Us</h2>
          <p className={styles.subSubtitle}>it's All Exam Help is why both students and professionals rely on All Exam Help</p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          We make more than just a service — we provide peace of mind. So, when you opt for us to fulfil your long-awaited dreams, you will find us by your side with our excellent services for you, the moment you urgently require us.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
