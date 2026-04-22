import React from 'react';
import styles from './content_section_three.module.scss';

interface ContentProps {
  heading1: string;
  description1: string;
  heading2: string;
  description2: string;
  image1: string;
  image2: string;
}

const ContentThree: React.FC<ContentProps> = ({ 
  heading1, description1, heading2, description2, image1, image2 
}) => {
  return (
    <section className={styles.contentThreeSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Text Side */}
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h2 className={styles.mainHeading}>{heading1}</h2>
              <p className={styles.description}>{description1}</p>
            </div>
            
            <div className={styles.contentBlock}>
              <h3 className={styles.subHeading}>{heading2}</h3>
              <p className={styles.description}>{description2}</p>
            </div>
          </div>

          {/* Image Side */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src={image1} alt="Exam Success" />
            </div>
            <div className={styles.imageWrapper}>
              <img src={image2} alt="Online Tutors" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentThree;