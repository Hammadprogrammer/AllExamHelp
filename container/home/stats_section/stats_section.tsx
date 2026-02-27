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
              Order Now & Get <span>50% Discount</span> On Your 1st Online Class Order
            </h3>
            
            <p className={styles.description}>
              Reach out to one of our Customer Service Representatives today and hire 
              someone to do online class. We'll work with you to create a plan that meets 
              your individual needs and give you a quote for online class services. 
              Never worry about saying take my online class for me again!
            </p>

            <div className={styles.btnGroup}>
              <Link href="/contact-us" className={styles.contactBtn}>
                Contact Us
              </Link>
              <button className={styles.chatBtn}>
                Chat With Us
              </button>
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