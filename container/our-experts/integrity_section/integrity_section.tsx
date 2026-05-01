"use client";
import React from 'react';
import styles from './integrity_section.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IntegritySection = () => {
  return (
    <section className={styles.integritySection}>
      <div className={styles.container}>
        <div className={styles.flexWrapper}>
          
          {/* Left Content */}
          <motion.div 
            className={styles.contentSide}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>Trust & Security</span>
            <h2 className={styles.title}>Privacy & Academic Integrity!</h2>
            <p className={styles.description}>
              We understand that your privacy is paramount. At All Exam Help, we maintain strict confidentiality protocols to protect your personal information and academic data. Your identity is never shared with third parties, and all communications are encrypted.
            </p>
            <p className={styles.description}>
              Academic integrity is at the core of our services. While we provide expert guidance and support, we encourage students to use our services as a learning aid. Our goal is to empower you with knowledge and confidence to handle your academic challenges independently.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image src="/ac3.jpg" alt="Privacy and Integrity" width={600} height={450} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntegritySection;
