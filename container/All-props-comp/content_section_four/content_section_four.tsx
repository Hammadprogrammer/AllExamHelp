"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './content_section_four.module.scss';

interface ContentFourProps {
  heading: string;
  description: string;
  subHeading: string;
  subDescription: string;
  image1: string;
  image2: string;
}

const ContentFour: React.FC<ContentFourProps> = ({ 
  heading, 
  description, 
  subHeading, 
  subDescription, 
  image1, 
  image2 
}) => {
  return (
    <section className={styles.contentFourSection}>
      <div className={styles.container}>
        
        {/* First Row: H2 + Image 1 */}
        <div className={styles.contentRow}>
          <motion.div 
            className={styles.textCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.mainHeading}>{heading}</h2>
            <p className={styles.description}>{description}</p>
          </motion.div>
          <motion.div 
            className={`${styles.imageCol} ${styles.topImg}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img src={image1} alt="Guaranteed Exam Success" />
          </motion.div>
        </div>

        {/* Second Row: H3 + Image 2 */}
        <div className={styles.contentRow}>
          <motion.div 
            className={styles.textCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.subHeading}>{subHeading}</h3>
            <p className={styles.description}>{subDescription}</p>
          </motion.div>
          <motion.div 
            className={`${styles.imageCol} ${styles.bottomImg}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={image2} alt="Expert Tutors Guidance" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContentFour;