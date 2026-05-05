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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>We Want Your</span>
            <h2 className={styles.title}>Privacy & Academic Integrity!</h2>
            <p className={styles.description}>
Get online exam help from our experts. We know how embarrassing it can be to order an exam help service online, so our service is designed to be discreet from start to finish. Our professionals work under nondisclosure agreements, and your personal data is never shared with third parties. All information communicated is also secured, using the latest secure encryption technologies. There is no need to worry about whether you order an exam taker or have live help for a test online, because your privacy is always guaranteed 100%.            </p>
           
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              {/* Ensure the path to your image is correct */}
              <Image src="/about1.jpg" alt="Privacy and Integrity" width={250} height={250} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntegritySection;