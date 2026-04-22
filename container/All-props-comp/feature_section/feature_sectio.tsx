"use client";

import React from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './feature_section.module.scss';

// Interface for single Feature Card
interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// Interface for the whole Section Props
interface FeaturesSectionProps {
  mainHeading: React.ReactNode;
  subText: React.ReactNode;
  features: FeatureItem[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  mainHeading, 
  subText, 
  features = [] 
}) => {
  return (
    <section className={styles.featuresSection}>
      <Container maxWidth="lg">
        {/* Main Heading from Props */}
        <motion.h2 
          className={styles.mainHeading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {mainHeading}
        </motion.h2>
        
        {/* Sub-text from Props */}
        <motion.div 
          className={styles.subText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subText}
        </motion.div>

        <div className={styles.gridContainer}>
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h5 className={styles.cardHeading}>{item.title}</h5>
              <p className={styles.cardDescription}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;