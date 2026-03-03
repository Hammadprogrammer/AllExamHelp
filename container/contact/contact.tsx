"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';

const ContactHero = () => {
  return (
    <div className={styles.main}>
      <section className={styles.container}>
        <div className={styles.bgGlow}></div>

        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContent}
        >
          <div className={styles.promoBadge}>
            <span>CONTACT</span> 24/7 Premium Student Support
          </div>
          
          <h1 className={styles.title}>
            Have a Question? <br />
            <span className={styles.highlight}>Connect with Experts</span>
          </h1>
          
          <p className={styles.description}>
            Whether it's a proctored exam, a nursing portal task, or a complex 
            assignment, our team is ready to assist you. Drop us a message and 
            get an instant response.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>📍</div>
              <span>Global Support</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>⚡</div>
              <span>Fast Response</span>
            </div>
          </div>

          <div className={styles.actionArea}>
            <button className={styles.btnPrimary}>Talk to an Expert</button>
            <button className={styles.btnSecondary}>Help Center</button>
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.imageSection}
        >
          {/* Animated Border Wrapper (Same as your Review Section) */}
          <div className={styles.animatedBorder}>
            <div className={styles.imageContainer}>
              <Image 
                src="/contact.png" // Replace with your image
                alt="Contact Support Illustration"
                width={580}
                height={420}
                className={styles.mainImg}
                priority
              />
            </div>
          </div>

          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={styles.floatingCard}
          >
            <div className={styles.statusDot}></div>
            <p><strong>Online</strong> Experts Available</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactHero;