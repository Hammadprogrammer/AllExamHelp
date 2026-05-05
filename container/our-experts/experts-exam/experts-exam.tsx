"use client";
import React from 'react';
import styles from './experts-exam.module.scss';
import { motion } from 'framer-motion';

// Material-UI Icons
import SecurityIcon from '@mui/icons-material/Security';
import QuizIcon from '@mui/icons-material/Quiz';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StraightenIcon from '@mui/icons-material/Straighten';

const ExpertsExam = () => {
  const services = [
    {
      icon: <SecurityIcon />,
      title: "Proctored Exam Help",
      description: "Experience high grades like never before. Our staff is skilled at using lockdown browsers and proctoring systems, making sure that you have the best performance and complete privacy."
    },
    {
      icon: <QuizIcon />,
      title: "Online Tests & Quizzes",
      description: "From timed quizzes to weekly assignments, our experts are ready to ensure timely and accurate help across all of your exams, including high scores and stress-free submission."
    },
    {
      icon: <CardMembershipIcon />,
      title: "GED Test Help",
      description: "Struggling with the GED? Our certified professionals can prepare you or even take the test on your behalf, solving all four GED subjects with success rates of up to 99%."
    },
    {
      icon: <AssignmentIcon />,
      title: "GRE Test Help",
      description: "From the Verbal and Quantitative sections to the updated Analytical Writing tasks, our GRE experts have you covered with complete support and help you master the GRE and achieve your top score."
    },
    {
      icon: <HomeWorkIcon />,
      title: "ATI TEAS Test Help",
      description: "Prep smarter with experienced TEAS test-takers to make the most of your study time, covering Math, Science, English, and Reading with live coaching or full-service support."
    },
    {
      icon: <MenuBookIcon />,
      title: "PMP Exam Help",
      description: "Receive expert-led support on your Project Management Professional (PMP) exam—ideal for motivated professionals looking for the pay someone to do my online PMP exam and comprehensive exam support."
    },
    {
      icon: <SchoolIcon />,
      title: "GMAT Exam Help",
      description: "Optimize your business school admission chances with help from experts— get the high score you want and focus on your side of the hassle."
    },
    {
      icon: <StraightenIcon />,
      title: "HESI Exam Help",
      description: "Pass the HESI for nursing school? With specialized support for every module, our HESI exam expert will help you increase your scores- and your self-confidence- on test day."
    }
  ];

  return (
    <section className={styles.expertsExamSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>What Our Experts Exam Takers Can Do for You</h2>
          <p className={styles.intro}>
            We offer comprehensive exam support services It means to match your unique academic needs. Here’s what our experts can do to help:
          </p>
        </motion.div>

        <motion.div 
          className={styles.gridContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
                scale: 1.02
              }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsExam;