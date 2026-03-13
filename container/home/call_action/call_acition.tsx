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
            Hire Someone to Take My Class Now and Grab a Flat <span>50% Off</span>  on Your First Order
          </h3>
          
          <p className={styles.subHeading}>
          Register now and book your online consultation for your online class, exam, quiz and assignments with our real-time experts today! Your online class success awaits.
          </p>

          <div className={styles.buttonWrapper}>
            <Link href="/contact-us" className={styles.ctaButton}>
            Request a FREE quote now!
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallAction;