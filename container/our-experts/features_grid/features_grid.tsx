"use client";
import React from 'react';
import styles from './features_grid.module.scss';
import { motion } from 'framer-motion';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import QuizIcon from '@mui/icons-material/Quiz';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ComputerIcon from '@mui/icons-material/Computer';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
  { icon: <AssignmentIcon />, title: "Assignment Help", text: "Get professional assistance with your academic assignments and research papers." },
  { icon: <HomeWorkIcon />, title: "Homework Help", text: "Struggling with daily homework? Our experts are here to help you solve every problem." },
  { icon: <QuizIcon />, title: "Quizzes Help", text: "Ace your online quizzes with the help of our subject matter specialists." },
  { icon: <LaptopMacIcon />, title: "Tests Help", text: "Comprehensive support for all types of academic tests across various subjects." },
  { icon: <SchoolIcon />, title: "HESI TEAS Help", text: "Specialized coaching and assistance for nursing entrance exams like HESI and TEAS." },
  { icon: <ExitToAppIcon />, title: "EXIT Exam Help", text: "Guidance and support for final exit exams to ensure you graduate successfully." },
  { icon: <ComputerIcon />, title: "Online Exam Help", text: "Real-time assistance for proctored and non-proctored online examinations." },
  { icon: <SecurityIcon />, title: "PSI Exam Help", text: "Expert support for professional certification exams, including PSI assessments." }
];

const FeaturesGrid = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>What We Specifically Offer for You</h2>
          <p className={styles.subtitle}>Explore our wide range of professional academic help services.</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
