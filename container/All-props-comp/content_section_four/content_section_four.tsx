import React from 'react';
import styles from './content_section_four.module.scss';

interface ContentFourProps {
  heading: string;
  description: string;
  subHeading: string;
  subDescription: string;
  image1: string;
  image2: string;
}

const ContentFour: React.FC<ContentFourProps> = ({ 
  heading, 
  description, 
  subHeading, 
  subDescription, 
  image1, 
  image2 
}) => {
  return (
    <section className={styles.contentFourSection}>
      <div className={styles.container}>
        
        {/* First Row: H2 + Image 1 */}
        <div className={styles.contentRow}>
          <div className={styles.textCol}>
            <h2 className={styles.mainHeading}>{heading}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={`${styles.imageCol} ${styles.topImg}`}>
            <img src={image1} alt="Guaranteed Exam Success" />
          </div>
        </div>

        {/* Second Row: H3 + Image 2 */}
        <div className={styles.contentRow}>
          <div className={styles.textCol}>
            <h3 className={styles.subHeading}>{subHeading}</h3>
            <p className={styles.description}>{subDescription}</p>
          </div>
          <div className={`${styles.imageCol} ${styles.bottomImg}`}>
            <img src={image2} alt="Expert Tutors Guidance" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentFour;