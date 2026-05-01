"use client";
import React from 'react';
import styles from './CallToAction.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.contentWrapper}>
          
          {/* Left Column: Image */}
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageBox}>
              <Image 
                src="/cta1.jpg" 
                alt="CTA Image" 
                width={600} 
                height={500}
                className={styles.mainImg}
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.bgCircle}></div>
            <div className={styles.content}>
              <h2 className={styles.title}>Call-to-Action</h2>
              <p className={styles.description}>
                Already successful with your online tests? Join hands with All Exam Help now and lead a stress-free academic life.
              </p>
              
              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <CheckCircleIcon className={styles.icon} />
                  <span>Regular Updates</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircleIcon className={styles.icon} />
                  <span>Weekly Updates</span>
                </div>
              </div>

              <Link href="/contact-us" className={styles.getStartedBtn}>
                Get Started →
              </Link>
              
              <p className={styles.footerNote}>
                Get in touch now for trusted, confidential exam help!
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
