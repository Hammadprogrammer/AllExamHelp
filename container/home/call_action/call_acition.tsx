import React from 'react';
import { Container } from '@mui/material';
import styles from './call_action.module.scss';
import Link from 'next/link';

const CallAction = () => {
  return (
    <section className={styles.ctaSection}>
      <Container maxWidth="lg">
        <div className={styles.contentWrapper}>
          {/* H3 Heading with 18px on mobile */}
          <h3 className={styles.mainHeading}>
            Pay Someone to Do My Online Exam <br />
            Get <span>25% Off</span> On Your First Order
          </h3>
          
          <p className={styles.subHeading}>
            Let our experts take your online exam while you relax! As a welcome bonus, 
            enjoy a massive 25% off on your very first order.
          </p>

          <div className={styles.buttonWrapper}>
            <Link href="/contact" className={styles.ctaButton}>
            Get your FREE quote fast!
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallAction;