"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './content_section_five.module.scss';

interface ContentFiveProps {
  heading: string;
  description: string;
  subHeading: string;
  subDescription: string;
  image1: string;
  image2: string;
}

const ContentFive: React.FC<ContentFiveProps> = ({ 
  heading, 
  description, 
  subHeading, 
  subDescription, 
  image1, 
  image2 
}) => {
  return (
    <section className={styles.contentFiveSection}>
      <div className={styles.container}>
        
        {/* Top Block: Text Left, Image Right */}
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
            className={`${styles.imageCol} ${styles.imgTop}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img src={image1} alt="Professional Exam Taker" />
          </motion.div>
        </div>

        {/* Bottom Block: Text Left, Image Full Width/Offset */}
        <div className={`${styles.contentRow} ${styles.bottomRow}`}>
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
            className={`${styles.imageCol} ${styles.imgBottom}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={image2} alt="Student Studying" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContentFive;