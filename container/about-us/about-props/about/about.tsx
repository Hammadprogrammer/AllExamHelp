"use client";
import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import { motion } from 'framer-motion';

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
      <motion.div 
        className={`${styles.container} ${imageLeft ? styles.imageLeft : styles.imageRight}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Image Side */}
        <motion.div 
          className={styles.imageSide}
          initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            width={500}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          className={styles.textSide}
          initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;