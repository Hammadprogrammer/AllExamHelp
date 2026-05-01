"use client";
import React from 'react';
import styles from './header.module.scss';
import { motion } from 'framer-motion';

const ExpertHeader = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Best Instructors For You</h1>
          <p className={styles.subtitle}>We're best online education you can join.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertHeader;
