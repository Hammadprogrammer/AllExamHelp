import React from 'react';
import { Container } from '@mui/material';
import styles from './Content_section_one.module.scss';

const ContentSectionOne = () => {
  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          <div className={styles.textContent}>
            {/* Requirement: H2 */}
            <h2 className={styles.mainHeading}>
              Hire Someone To Do My Nursing Exam Hesi A2
            </h2>
            
            <p className={styles.description}>
              When I took the exam for the Certified Nursing Assistant position I knew I was going to 
              do my HESI A2 Entrance Exam. There are many people that take time off their job 
              and they get this certification so they can be a CNA for a few years. Others might 
              take the exam and then go back to school and get a certificate in Nursing. In either 
              case there are some expenses incurred.
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>Contact Us</button>
              <button className={styles.secondaryBtn}>Chat With Us</button>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src="/contentone.jpeg" 
              alt="Nursing Professional Study Group" 
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentSectionOne;