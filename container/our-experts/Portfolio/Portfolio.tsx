"use client";
import React from 'react';
import styles from './Portfolio.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Relax and Succeed",
      bgColor: "#e8f7f2", // Light green
      btnColor: "#4a4a4a", // Dark grey
      image: "/p1.png", 
      btnText: "Join With Us →",
      url: "/online-exam-help",
      description: "We do it all for you—just sit back, relax, and enjoy your success."
    },
    {
      title: "Online PMP Exam",
      bgColor: "#edf2ff", 
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →",
      url: "/online-pmp-exam",
      description: "We match you with the best exam taker available for your requirements."
    },
    {
      title: "GED Exams",
      bgColor: "#edf2ff", // Light blue
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →",
      url: "/online-ged-test",
      description: "Tell us the subject, date, time, and platform"
    },

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
          <span className={styles.topTitle}>How to</span>
          <h2 className={styles.mainTitle}>Get Started</h2>
          <p className={styles.subtitle}>How does it work? Getting help with exams is really simple!</p>
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
                <p className={styles.cardDescription}>{item.description}</p>
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


      </motion.div>
    </section>
  );
};

export default Portfolio;
