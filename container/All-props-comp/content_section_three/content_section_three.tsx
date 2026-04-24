"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './content_section_three.module.scss';

interface ContentProps {
  heading1?: string;
  description1?: string;
  heading2?: string;
  description2?: string;
  image1?: string;
  image2?: string;
  topHeading?: string;
  topDescription?: string;
  features?: { title: string; text: string; }[];
}

const ContentThree: React.FC<ContentProps> = ({ 
  heading1, 
  description1, 
  heading2, 
  description2, 
  image1 = "/sthree.jpg", 
  image2 = "/content_two_1.png",
  topHeading,
  topDescription,
  features
}) => {
  const h1 = topHeading || heading1 || "";
  const d1 = topDescription || description1 || "";

  return (
    <motion.section 
      className={styles.contentThreeSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Text Side */}
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.contentBlock}>
              <h2 className={styles.mainHeading}>{h1}</h2>
              <p className={styles.description}>{d1}</p>
              
              {features && features.length > 0 && (
                <div className={styles.featuresGrid}>
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.featureItem}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    >
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureText}>{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {!features && heading2 && (
              <div className={styles.contentBlock}>
                <h3 className={styles.subHeading}>{heading2}</h3>
                <p className={styles.description}>{description2}</p>
              </div>
            )}
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.imageWrapper}>
              <img src={image1} alt="Exam Success" />
            </div>
            <div className={styles.imageWrapper}>
              <img src={image2} alt="Online Tutors" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContentThree;