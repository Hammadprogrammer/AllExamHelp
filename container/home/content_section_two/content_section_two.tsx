import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import styles from './content_section_two.module.scss';

const ContentSectionTwo = () => {
  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          {/* Image Area - Yeh mobile par hamesha upar show hoga */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/contenttwo.jpg" 
              alt="GED Graduation Success" 
              width={600}
              height={450}
              className={styles.mainImg}
              priority
            />
          </div>

          {/* Text Content Area - Yeh mobile par image ke niche aayega */}
          <div className={styles.textContent}>
            <h2 className={styles.mainHeading}>
              Pay someone to take my online GED exam for me? The GED test shows a candidate's college and job preparedness.
            </h2>
            
            <p className={styles.description}>
              This made up of around 4 sections or tests that are designed by the experts to measure your 
              reading, thinking, and writing & problem-solving abilities. If you are 16 & above & are 
              not enrolled in the school yet then this exam can be beneficial for you as it can assess 
              your proficiency in the high school standard subjects. It is an opportunity for getting 
              more education, better salaries jobs, and better rewarding career.
            </p>

            <div className={styles.buttonGroup}>
              {/* Requirement: Connection to contact-us page */}
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <button className={styles.secondaryBtn}>
                Chat With Us
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentSectionTwo;