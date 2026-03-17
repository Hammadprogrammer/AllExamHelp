import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './content_section_three.module.scss';

interface FeatureItem {
  title?: string;
  text?: string;
}

interface ContentSectionThreeProps {
  topHeading?: string;
  topDescription?: string;
  features?: FeatureItem[];
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ContentThree = ({ 
  topHeading = "", 
  topDescription = "", 
  features = [], 
  imageSrc = "/content_three.webp",
  buttonText = "Talk to the expert",
  buttonLink = "/contact-us"
}: ContentSectionThreeProps) => {
  // Error handling: Agar features array na ho toh empty array set ho jaye
  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <div className={styles.main}>
      <section className={styles.contentSectionThree}>
        <div className={styles.topFlex}>
          <div className={styles.imageContent}>
            <Image 
              src={imageSrc} 
              alt={topHeading || "Section Image"}
              width={600}
              height={400}
              priority
              className={styles.responsiveImg}
              // SSG Error Fix: Placeholder blur use kar sakte hain agar image heavy ho
            />
          </div>

          <div className={styles.textContent}>
            {topHeading && <h2 className={styles.heading}>{topHeading}</h2>}
            {topDescription && <p className={styles.description}>{topDescription}</p>}
            
            <Link href={buttonLink} className={styles.ctaBtn}>
              {buttonText}
            </Link>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          {safeFeatures.length > 0 ? (
            safeFeatures.map((item, index) => (
              // Key hamesha unique honi chahiye
              <div className={styles.featureItem} key={`content-feat-${index}`}>
                {item?.title && <h4>{item.title}</h4>}
                {item?.text && <p>{item.text}</p>}
              </div>
            ))
          ) : (
            // Empty state handle karna zaroori hai technical error se bachne ke liye
            <div className={styles.noData}>No features provided.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContentThree;