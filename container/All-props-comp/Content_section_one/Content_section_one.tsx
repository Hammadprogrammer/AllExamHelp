import React from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';
import styles from './Content_section_one.module.scss';

// 1. Define the Interface for your props
interface ContentSectionProps {
  mainHeading: string;
  description: string;
}

// 2. Apply the interface to the component
const ContentOne: React.FC<ContentSectionProps> = ({ mainHeading, description }) => {
  
  if (!mainHeading && !description) return null;

  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          <div className={styles.textContent}>
            {mainHeading && (
              <h2 className={styles.mainHeading}>
                {mainHeading}
              </h2>
            )}
            
            {description && (
              <p className={styles.description}>
                {description}
              </p>
            )}

            <div className={styles.buttonGroup}>
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link 
                href="https://wa.me/yournumber" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryBtn}
              >
                Chat With Us
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src="/contentone.jpeg" 
              alt={mainHeading || "Human Expertise Tutors"} 
              loading="lazy"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentOne;