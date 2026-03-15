"use client";

import React from 'react';
import { Container } from '@mui/material';
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
        <h3 className={styles.mainHeading}>{mainHeading}</h3>
        
        {/* Sub-text from Props */}
        <div className={styles.subText}>
          {subText}
        </div>

        <div className={styles.gridContainer}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h5 className={styles.cardHeading}>{item.title}</h5>
              <p className={styles.cardDescription}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;