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
              Do My Class for Me is a 100% Confidential Service: Your Privacy is Our Priority
            </h2>
            
            <p className={styles.description}>
              When you hire our online tutors, your privacy is always guaranteed. We do not share your login credentials, invoice information and personal identifiers with anyone. Data security for every request is 100% secure. With us, you can focus solely on your other goals while we take care of you, maintaining your grades while protecting all required personal data. We provide you with expert guidance in a trusted, secure environment so that all you have to think about is reaching your goals without fear. 
            </p>

            <div className={styles.buttonGroup}>
              {/* Requirement: Connection to contact-us page */}
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link href="https://wa.me/923118270539" className={styles.secondaryBtn}>          
                Chat With Us
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentSectionTwo;