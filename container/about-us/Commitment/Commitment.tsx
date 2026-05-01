"use client";
import React from 'react';
import styles from './Commitment.module.scss';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BalanceIcon from '@mui/icons-material/Balance';
import { motion } from 'framer-motion';

const Commitment = () => {
  const commitments = [
    {
      icon: <SecurityIcon sx={{ fontSize: 50 }} />,
      title: "Privacy",
      description: "Your privacy is guaranteed, and your confidentiality is secured"
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 50 }} />,
      title: "Trust",
      description: "Receive time-honored test help with the best strategy"
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50 }} />,
      title: "Quality",
      description: "Professional academic help from professional experts across all academic fields"
    },
    {
      icon: <BalanceIcon sx={{ fontSize: 50 }} />,
      title: "Integrity",
      description: "Professional help for all kinds of online exams"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={styles.commitmentSection}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.mainTitle}>Commitment to Excellence</h2>
          <h3 className={styles.subTitle}>We are dedicated to:</h3>
        </motion.div>

        <div className={styles.grid}>
          {commitments.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.footerText} variants={itemVariants}>
          Every action we take is done through a quality evaluation check process, and we always make sure it benefits our clients. That has helped us build trust and loyalty among students worldwide.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Commitment;
