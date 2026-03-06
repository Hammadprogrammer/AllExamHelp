import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import styles from './stats_section.module.scss';

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          {/* Text Content Area - Mobile pe ye pehle (upar) show hoga */}
          <div className={styles.textContent}>
            <h3 className={styles.mainHeading}>
              Are You Looking to Pay Someone to Do My Class? Our Tutors are at Your Service
            </h3>
            
            <p className={styles.description}>
             Sign up with us and send your class details. We will assign a subject specialist to handle your class and all pending work. Discuss your subject with us via live chat and get a plan for you with the best quotation.
            </p>

            <div className={styles.btnGroup}>
              <Link href="/contact-us" className={styles.contactBtn}>
                Contact Us
              </Link>
               <Link href="https://wa.me/923118270539" className={styles.secondaryBtn}>        
              <button className={styles.chatBtn}>
                Chat With Us
              </button>
              </Link>
            </div>
          </div>

          {/* Image Area - Mobile pe ye baad mein (niche) show hoga */}
          <div className={styles.imageContent}>
            <Image 
              src="/discount.png" 
              alt="24/7 Support and Experts Stats"
              width={550}
              height={450}
              priority
              className={styles.statsImg}
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default StatsSection;