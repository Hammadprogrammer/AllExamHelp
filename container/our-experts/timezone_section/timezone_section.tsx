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
              <Image src="/ac4.jpg" alt="Global support" width={600} height={450} />
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
            <span className={styles.badge}>24/7 Availability</span>
            <h2 className={styles.title}>Regardless of the Time Zone You are in</h2>
            <p className={styles.description}>
              Our global network of experts spans multiple time zones, ensuring that there is always someone available to help you, no matter where you are in the world. Whether it's a late-night study session or an early-morning exam, we've got you covered.
            </p>
            <p className={styles.description}>
              We provide continuous support and monitoring for your online courses and exams. You can reach out to us at any time, and our team will respond promptly to ensure your academic journey stays on track. Your success is our priority, around the clock.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TimezoneSection;
