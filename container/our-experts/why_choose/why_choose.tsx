"use client";
import React from 'react';
import styles from './why_choose.module.scss';
import { motion } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ShieldIcon from '@mui/icons-material/Shield';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const points = [
  { icon: <LockIcon />, title: "100% Privacy & Safety" },
  { icon: <AutoFixHighIcon />, title: "Quality & Original Work" },
  { icon: <ShieldIcon />, title: "Security for Both Parties" },
  { icon: <WorkspacePremiumIcon />, title: "Top-notch Specialists" },
  { icon: <AccessTimeFilledIcon />, title: "Timely Delivery Assured" },
  { icon: <SupportAgentIcon />, title: "Real-time 24/7 Support" }
];

const WhyChooseExperts = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose</span>
          <h2 className={styles.title}>Our Experts?</h2>
          <p className={styles.subtitle}>We provide a secure and efficient environment for all your academic needs.</p>
        </div>

        <div className={styles.grid}>
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{point.icon}</div>
              <h3>{point.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseExperts;
