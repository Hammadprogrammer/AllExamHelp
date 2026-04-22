import React from 'react';
import styles from './content_section_five.module.scss';

interface ContentFiveProps {
  heading: string;
  description: string;
  subHeading: string;
  subDescription: string;
  image1: string;
  image2: string;
}

const ContentFive: React.FC<ContentFiveProps> = ({ 
  heading, 
  description, 
  subHeading, 
  subDescription, 
  image1, 
  image2 
}) => {
  return (
    <section className={styles.contentFiveSection}>
      <div className={styles.container}>
        
        {/* Top Block: Text Left, Image Right */}
        <div className={styles.contentRow}>
          <div className={styles.textCol}>
            <h2 className={styles.mainHeading}>{heading}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={`${styles.imageCol} ${styles.imgTop}`}>
            <img src={image1} alt="Professional Exam Taker" />
          </div>
        </div>

        {/* Bottom Block: Text Left, Image Full Width/Offset */}
        <div className={`${styles.contentRow} ${styles.bottomRow}`}>
          <div className={styles.textCol}>
            <h3 className={styles.subHeading}>{subHeading}</h3>
            <p className={styles.description}>{subDescription}</p>
          </div>
          <div className={`${styles.imageCol} ${styles.imgBottom}`}>
            <img src={image2} alt="Student Studying" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentFive;