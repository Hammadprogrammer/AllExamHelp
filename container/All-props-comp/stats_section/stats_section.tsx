import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import styles from './stats_section.module.scss';

// Define the interface for props
interface StatsSectionProps {
  heading: ReactNode;      // ReactNode allows for <span> or <strong> tags
  description: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ heading, description }) => {
  return (
    <section className={styles.statsSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          {/* Text Content Area */}
          <div className={styles.textContent}>
            <h3 className={styles.mainHeading}>
              {heading}
            </h3>
            
            <p className={styles.description}>
              {description}
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

          {/* Image Area */}
          <div className={styles.imageContent}>
            <Image 
              src="/discount.png" 
              alt="Support and Experts Stats"
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