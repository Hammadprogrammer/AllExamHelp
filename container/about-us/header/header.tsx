"use client";
import React from 'react';
import Link from 'next/link';
import styles from './heder.module.scss';
import { motion } from 'framer-motion';

interface BreadcrumbProps {
  title: string;
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, currentPage }) => {
  return (
    <section className={styles.breadcrumbSection}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{title}</h1>
        <div className={styles.links}>
          <Link href="/">
            Home
          </Link>
          <span>:</span>
          <span className={styles.active}>{currentPage}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Breadcrumb;