import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';

interface AboutProps {
  badge: string;
  title: string;
  descriptions: string[];
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
  backgroundColor?: string;
}

const AboutSection: React.FC<AboutProps> = ({
  badge,
  title,
  descriptions,
  imageUrl,
  imageAlt,
  imageLeft = false,
  backgroundColor = '#ffffff'
}) => {
  return (
    <section 
      className={styles.aboutSection}
      style={{ backgroundColor }}
    >
      <div className={`${styles.container} ${imageLeft ? styles.imageLeft : styles.imageRight}`}>
        
        {/* Image Side */}
        <div className={styles.imageSide}>
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            width={500}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>

        {/* Text Side */}
        <div className={styles.textSide}>
          <div className={styles.textContent}>
            <span className={styles.badge}>{badge}</span>
            <h2 className={styles.title}>{title}</h2>
            
            <div className={styles.descriptions}>
              {descriptions.map((description, index) => (
                <p key={index} className={styles.description}>
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;