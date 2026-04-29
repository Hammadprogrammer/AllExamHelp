import React from 'react';
import Image from 'next/image';
import styles from './welcome.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* 1. Main Background Image */}
      <div className={styles.bgLayer}>
        <Image 
          src="/bg-shape-1.png" 
          alt="background" 
          fill 
          priority 
        />
      </div>

      {/* 2. Content Container */}
      <div className={styles.contentContainer}>
        
        {/* Left Side: Text */}
        <div className={styles.leftText}>
          <div className={styles.textContent}>
            <span className={styles.badge}>Welcome to</span>
            <h1>All Exam <span>Help</span></h1>
            <p>
              At All Exam Help, we are an examination and test provider offering 
              online exam and test support to all users. With years of experience 
              and a team of expert exam helpers, we help students and professionals 
              realize their academic potential.
            </p>
            <div className={styles.ctaButton}>
              <span>Get Started</span>
            </div>
          </div>
        </div>

        {/* Right Side: Single Image */}
        <div className={styles.rightImage}>
          <div className={styles.imgContainer}>
            <Image src="/about2.jpg" alt="about" fill />
            
            {/* 4 Year Badge on top of image */}
            <div className={styles.yearBadge}>
              <span className={styles.number}>4</span>
              <span className={styles.text}>Years</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;