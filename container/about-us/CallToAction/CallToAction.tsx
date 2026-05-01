import React from 'react';
import styles from './CallToAction.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Column: Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageBox}>
              <Image 
                src="/cta1.jpg" 
                alt="CTA Image" 
                width={600} 
                height={500}
                className={styles.mainImg}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className={styles.textColumn}>
            <div className={styles.bgCircle}></div>
            <div className={styles.content}>
              <h2 className={styles.title}>Call-to-Action</h2>
              <p className={styles.description}>
                Already successful with your online tests? Join hands with All Exam Help now and lead a stress-free academic life.
              </p>
              
              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <CheckCircleIcon className={styles.icon} />
                  <span>Regular Updates</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircleIcon className={styles.icon} />
                  <span>Weekly Updates</span>
                </div>
              </div>

              <Link href="/contact-us" className={styles.getStartedBtn}>
                Get Started →
              </Link>
              
              <p className={styles.footerNote}>
                Get in touch now for trusted, confidential exam help!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
