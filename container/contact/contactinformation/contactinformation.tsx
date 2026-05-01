"use client";
import React from 'react';
import Image from 'next/image';
import styles from './contactinformation.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { motion } from 'framer-motion';

const ContactInformation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className={styles.contactInfoSection}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className={styles.contentWrapper}>
          
          {/* Left Side: Text and Cards */}
          <div className={styles.leftSide}>
            <motion.div className={styles.header} variants={itemVariants}>
              <span className={styles.subtitle}>Need Any Helps ?</span>
              <h2 className={styles.title}>Contact for Information</h2>
              <p className={styles.description}>
                Need expert help with your online exams or tests? 
                Contact our support team anytime — We're here 24/7 to guide you toward 
                stress-free, guaranteed exam success!
              </p>
            </motion.div>

            <div className={styles.cardsGrid}>
              {/* Location Card */}
              <motion.div className={styles.card} variants={itemVariants}>
                <a href="https://www.google.com/maps/search/?api=1&query=55+Main+Street+2nd+Block+New+York" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  <div className={`${styles.iconBox} ${styles.locationIcon}`}>
                    <LocationOnIcon />
                  </div>
                  <h3>Locations</h3>
                  <p>55 Main Street, 2nd Block, New York</p>
                </a>
              </motion.div>

              {/* Email Card */}
              <motion.div className={styles.card} variants={itemVariants}>
                <a href="mailto:info@allexamhelp.com" className={styles.cardLink}>
                  <div className={`${styles.iconBox} ${styles.emailIcon}`}>
                    <EmailIcon />
                  </div>
                  <h3>Email Us</h3>
                  <p>info@allexamhelp.com</p>
                </a>
              </motion.div>

              {/* Hotline Card */}
              <motion.div className={styles.card} variants={itemVariants}>
                <a href="tel:+12123476533" className={styles.cardLink}>
                  <div className={`${styles.iconBox} ${styles.phoneIcon}`}>
                    <PhoneInTalkIcon />
                  </div>
                  <h3>Hotlines</h3>
                  <p>+12123476533</p>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Single Image */}
          <motion.div 
            className={styles.rightSide}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.imageContainer}>
              <Image 
                src="/contact1.png" 
                alt="Contact Information" 
                width={500} 
                height={500}
                className={styles.mainImage}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactInformation;
