import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import styles from './uni_section.module.scss';

const UniSection = () => {
  const portals = [
    { name: "Pearson", src: "/uni1.webp" },
    { name: "Instructure", src: "/uni2.svg" },
    { name: "Blackboard", src: "/uni3.webp" },
    { name: "Canvas", src: "/uni4.svg" },
    { name: "Google Classroom", src: "/uni5.svg" },
    { name: "Brightspace", src: "/uni6.svg" },
  ];

  // Tripled for seamless infinite loop on wide screens
  const extendedPortals = [...portals, ...portals, ...portals];

  return (
    <div className={styles.main}>
    <section className={styles.portalsSection}>
      <Container maxWidth="lg">
        {/* Requirement: Heading changed to h4 */}
        <h4 className={styles.mainHeading}>
          One-Stop Online Exam Solution for All Major Exam Portals
        </h4>
      </Container>
      
      <div className={styles.marqueeWrapper}>
        <div className={styles.sliderTrack}>
          {extendedPortals.map((portal, index) => (
            <div key={index} className={styles.portalIcon}>
              <div className={styles.imageBox}>
                <Image 
                  src={portal.src} 
                  alt={portal.name}
                  fill 
                  sizes="(max-width: 768px) 100px, 160px"
                  className={styles.actualImage}
                  priority={index < 6}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default UniSection;