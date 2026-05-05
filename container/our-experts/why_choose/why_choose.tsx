"use client";
import React from 'react';
import styles from './why_choose.module.scss';
import { motion } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const points = [
  { 
    icon: <LockIcon />, 
    title: "98%+ Success Rate on All Subjects" 
  },
  { 
    icon: <GroupIcon />, 
    title: "On- Time Delivery, No More Missed Deadlines" 
  },
  { 
    icon: <ThumbUpIcon />, 
    title: "Bespoke Solutions for Each Customer" 
  },
  { 
    icon: <TrendingUpIcon />, 
    title: "Tight security and Privacy" 
  },
  { 
    icon: <AccessTimeIcon />, 
    title: "Global Access, Help Anywhere, Anytime" 
  },
  { 
    icon: <SupportAgentIcon />, 
    title: "Real Human Support, No Bots, Just People Who Know" 
  }
];

const WhyChooseExperts = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose</span>
          <h2 className={styles.title}>Our Experts?</h2>
          <p className={styles.subtitle}>
            With our passion for quality, honesty and results, we're not like all the other online services. When you prepare with All Exam Help, you're not gambling with your future – you're cashing in on a proven success!
          </p>
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