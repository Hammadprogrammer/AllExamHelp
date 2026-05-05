"use client";
import React from 'react';
import styles from './timezone_section.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TimezoneSection = () => {
  return (
    <section className={styles.timezoneSection}>
      <div className={styles.container}>
        <div className={styles.flexWrapper}>
          
          {/* Left Image */}
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              {/* Keeping your original image path */}
              <Image src="/ac2.jpg" alt="Global support" width={600} height={450} />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className={styles.contentSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>Available 24/7 Around the Clock</span>
            <h2 className={styles.title}>Regardless of the Time Zone You are in</h2>
            <p className={styles.description}>
Our squad of pros is spread across countries and time zones, so we’re here 24/7, patrolling the free essay writing space. Have an early-morning exam? A weekend deadline? A pop quiz you never saw coming? We’ve got you covered. 24/7 with a flexible schedule makes sure you’re never in your career at a time when you’re really at a make-or-break place academically. No matter if you are from the USA, Australia, Canada, or any other country, All Exam Help is at your fingertips any time, anywhere.            </p>
          
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TimezoneSection;