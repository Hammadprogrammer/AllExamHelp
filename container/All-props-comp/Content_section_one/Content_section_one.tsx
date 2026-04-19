"use client";
import React from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Content_section_one.module.scss';


// 1. Define the Interface for your props
interface ContentSectionProps {
  mainHeading?: string;
  description?: string;
  heading1?: string;
  description1?: string;
  heading2?: string;
  description2?: string;
  image1?: string;
  image2?: string;
}

// 2. Apply the interface to the component
const ContentOne: React.FC<ContentSectionProps> = ({ 
  mainHeading, 
  description,
  heading1, 
  description1, 
  heading2, 
  description2, 
  image1, 
  image2 
}) => {
  
  const h1 = heading1 || mainHeading;
  const d1 = description1 || description;

  return (
    <motion.section 
      className={styles.contentSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="lg">
        {/* Desktop: two-column flex. Mobile: stacked with image→text→image→text→btn order */}
        <div className={styles.flexContainer}>

          {/* ── LEFT COLUMN (desktop) ── */}
          <div className={styles.textContent}>

            {/* Block 1 text – order 2 on mobile */}
            <div className={`${styles.textBlock} ${styles.textBlock1}`}>
              {h1 && (
                <h2 className={styles.mainHeading}>{h1}</h2>
              )}
              {d1 && (
                <p className={styles.description}>{d1}</p>
              )}
            </div>

            {/* Block 2 text – order 4 on mobile */}
            {(heading2 || description2) && (
              <div className={`${styles.textBlock} ${styles.textBlock2}`}>
                {heading2 && (
                  <h2 className={styles.mainHeading}>{heading2}</h2>
                )}
                {description2 && (
                  <p className={styles.description}>{description2}</p>
                )}
              </div>
            )}

            {/* Buttons – order 5 on mobile */}
            <div className={styles.buttonGroup}>
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link
                href="https://wa.me/12292028857"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                Chat With Us
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN (desktop) ── */}
          <div className={styles.imageWrapper}>
            {/* Image 1 – order 1 on mobile */}
            {(image1 || !image2) && (
              <div className={`${styles.imageBox} ${styles.imageBox1}`}>
                <img
                  src={image1 || "/contentone.jpeg"}
                  alt={h1 || "Student Success"}
                  loading="lazy"
                />
              </div>
            )}
            {/* Image 2 – order 3 on mobile */}
            {image2 && (
              <div className={`${styles.imageBox} ${styles.imageBox2}`}>
                <img
                  src={image2}
                  alt={heading2 || ""}
                  loading="lazy"
                />
              </div>
            )}
          </div>

        </div>
      </Container>
    </motion.section>
  );
};

export default ContentOne;