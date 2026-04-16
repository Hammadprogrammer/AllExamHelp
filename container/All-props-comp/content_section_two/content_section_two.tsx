import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import styles from './content_section_two.module.scss';

// Default values set ki hain taake undefined error na aaye
const ContentTwo = ({ 
  heading = "Default Heading", 
  description = "Default description text goes here." 
}) => {
  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
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

          <div className={styles.textContent}>
            {/* Conditional check: Agar heading hai tabhi render kare */}
            {heading && <h2 className={styles.mainHeading}>{heading}</h2>}
            
            {description && <p className={styles.description}>{description}</p>}

            <div className={styles.buttonGroup}>
              <Link href="/contact-us" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link href="https://wa.me/12292028857"  className={styles.secondaryBtn}>          
                Chat With Us
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentTwo;