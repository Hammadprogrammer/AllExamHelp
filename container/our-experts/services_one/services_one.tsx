"use client";
import React from 'react';
import styles from './services_one.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesOne = () => {
  return (
    <section className={styles.servicesSection}>
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
            <span className={styles.badge}>EXPERT HELP</span>
            <h2 className={styles.title}>Best Exam Help Services</h2>
            <p className={styles.description}>
              Here at All Exam Help, we understand how difficult it can be to face academic challenges, whether you are a student or an instructor, and especially when you're facing stress, tight schedules, or subjects that you just don’t get, which is why we've assembled a team of expert exam takers, academic specialists, and subject-matter professionals to help you succeed. The right way, the most efficient way, and with your personal privacy 100% guaranteed.
            </p>
            {/* <p className={styles.description}>
              Whether you're struggling with complex subjects or simply need someone to manage your online tests, our specialists are ready to jump in. We offer a wide range of services tailored to meet individual student requirements, ensuring a personalized experience for every client.
            </p> */}
          </motion.div>

          {/* Right Images */}
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.mainImage}>
                <Image src="/about.jpg" alt="Student studying" width={400} height={500} />
              </div>
              <div className={styles.smallImage1}>
                <Image src="/cfive2.jpg" alt="Team meeting" width={250} height={200} />
              </div>
              <div className={styles.iconBox}>
                <div className={styles.iconInner}>
                  <span>99%</span>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
