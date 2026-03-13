import React from 'react';
import { Container } from '@mui/material';
import Link from 'next/link'; // Optimized linking ke liye
import styles from './Content_section_one.module.scss';

const ContentSectionOne = () => {
  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          <div className={styles.textContent}>
            {/* Image se li gayi New Heading */}
            <h2 className={styles.mainHeading}>
              100% Human Expertise – Pay Someone to Take My Class
            </h2>
            
            {/* Image ka pehla paragraph */}
            <p className={styles.description}>
             All our take my online class requests are conducted by real, qualified tutors — not a bot or an automated system. Higher and secure grades need personalized guidance and human insights; that's our belief. With years of experience, our tutors are masters in their subjects and skilled to take online classes on your behalf with a commitment. Our professionals will help you enhance your confidence and achieve academic success. With personalized explanations, one-on-one focus, and interactive help on hand whenever they need it, we make sure that every student receives a human-first approach as per their unique online class needs.
            </p>

       

            <div className={styles.buttonGroup}>
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link href="https://wa.me/yournumber" className={styles.secondaryBtn}>
                Chat With Us
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src="/contentone.jpeg" 
              alt="100% Human Expertise Tutors" 
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentSectionOne;