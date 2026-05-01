"use client";
import React from 'react';
import styles from './experts_list.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

import VerifiedIcon from '@mui/icons-material/Verified';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ShieldIcon from '@mui/icons-material/Shield';

const ExpertsList = () => {
  return (
    <section className={styles.expertsListSection}>
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
              <Image src="/about2.jpg" alt="Experts team" width={600} height={500} />
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
            <span className={styles.subtitle}>Our Quality</span>
            <h2 className={styles.title}>Online Exam Experts?</h2>
            <p className={styles.intro}>
              Our experts aren’t just freelancers or base-level tutors— they’re seasoned academic professionals who have been screened and trained. They each offer their own mix of:
            </p>

            <div className={styles.listContainer}>
              <div className={styles.listItem}>
                <div className={styles.iconBox}>
                  <VerifiedIcon />
                </div>
                <div className={styles.text}>
                  <h3>Qualified Experts</h3>
                  <p>All experts have college degrees or better from a reputable university. All that we work with are academically successful in their fields of study.</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconBox}>
                  <TaskAltIcon />
                </div>
                <div className={styles.text}>
                  <h3>Targeted Planning</h3>
                  <p>We have you covered in over 10 0+ academic disciplines ranging from STEM to business to the arts, as well as over 1000 academic subcategories, each with a dedicated subject area expert.</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconBox}>
                  <ShieldIcon />
                </div>
                <div className={styles.text}>
                  <h3>Round the Clock Availability</h3>
                  <p>We respect you and your privacy; we take confidentiality and ethics in academia seriously. Discreet and 100% confidential and for me to know your identity is secret to me.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExpertsList;
