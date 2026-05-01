"use client";
import React from 'react';
import Image from 'next/image';
import styles from './welcome.module.scss';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* 1. Main Background Image */}
      <div className={styles.bgLayer}>
        <Image 
          src="/bg-shape-1.png" 
          alt="background" 
          fill 
          priority 
        />
      </div>

      {/* 2. Content Container */}
      <motion.div 
        className={styles.contentContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        {/* Left Side: Text */}
        <motion.div 
          className={styles.leftText}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.textContent}>
            <span className={styles.badge}>Welcome to</span>
            <h1>All Exam <span>Help</span></h1>
            <p>
              At All Exam Help, we are an examination and test provider offering 
              online exam and test support to all users. With years of experience 
              and a team of expert exam helpers, we help students and professionals 
              realize their academic potential.
            </p>
            <div className={styles.ctaButton}>
              <span>Get Started</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Single Image */}
        <motion.div 
          className={styles.rightImage}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.imgContainer}>
            <Image src="/about2.jpg" alt="about" fill />
            
            {/* 4 Year Badge on top of image */}
            <motion.div 
              className={styles.yearBadge}
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, x: "-50%", y: "-50%" }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <span className={styles.number}>Years Of Experience</span>
              {/* <span className={styles.text}>Years</span> */}
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;