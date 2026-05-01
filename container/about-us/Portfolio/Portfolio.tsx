"use client";
import React from 'react';
import styles from './Portfolio.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Online Exam Help",
      bgColor: "#e8f7f2", // Light green
      btnColor: "#4a4a4a", // Dark grey
      image: "/p1.png", 
      btnText: "Join With Us →",
      url: "/online-exam-help"
    },
    {
      title: "Online PMP Exam",
      bgColor: "#edf2ff", 
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →",
      url: "/online-pmp-exam"
    },
    {
      title: "GED Exams",
      bgColor: "#edf2ff", // Light blue
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →",
      url: "/online-ged-test"
    },
    {
      title: "Proctored Exam Help",
      bgColor: "#e8f7f2", // Light green
      btnColor: "#4a4a4a", // Dark grey
      image: "/p1.png",
      btnText: "Join With Us →",
      url: "/proctored-exam-help"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={styles.portfolioSection}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <span className={styles.topTitle}>Our</span>
          <h2 className={styles.mainTitle}>Portfolio</h2>
          <p className={styles.subtitle}>For years, we have been helping thousands of students and professionals with:</p>
        </motion.div>

        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card} 
              style={{ backgroundColor: item.bgColor }}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>• {item.title}</h3>
                <Link href={item.url}>
                  <button 
                    className={styles.joinBtn}
                    style={{ backgroundColor: item.btnColor }}
                  >
                    {item.btnText}
                  </button>
                </Link>
              </div>
              <div className={styles.cardImage}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={250} 
                  height={200} 
                  className={styles.img}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.footerText} variants={itemVariants}>
          Our portfolio speaks for itself, with clients from varying academic disciplines who can attest to our ability to excel in even the most challenging of subjects. We have been the game changer for several academic and career stories, right from college freshmen to working professionals.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Portfolio;
