import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import styles from './call_action.module.scss';
import Link from 'next/link';

interface CallActionProps {
  heading: ReactNode;
  description: string;
  // Made these optional with '?'
  btnText?: string;        
  btnLink?: string;       
}

const CallAction: React.FC<CallActionProps> = ({ 
  heading, 
  description, 
  btnText, 
  btnLink = "/contact-us" 
}) => {
  return (
    <section className={styles.ctaSection}>
      <Container maxWidth="lg">
        <div className={styles.contentWrapper}>
          <h3 className={styles.mainHeading}>
            {heading}
          </h3>
          
          <p className={styles.subHeading}>
            {description}
          </p>

          {/* Only render this div if btnText exists */}
          {btnText && (
            <div className={styles.buttonWrapper}>
              <Link href={btnLink} className={styles.ctaButton}>
                {btnText}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CallAction;