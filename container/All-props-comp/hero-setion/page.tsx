"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './hero_section.module.scss';

// TypeScript Interface for Props
interface HeroProps {
  heading: React.ReactNode;
  subText: React.ReactNode;
  bullets: string[];
}

const Hero: React.FC<HeroProps> = ({ heading, subText, bullets = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Need Help");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Online Class Help",
    "Assignment Help",
    "Exam Help",
    "Quiz Help"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.heroSection}>
        {/* LEFT CONTENT (Data comes from Props) */}
        <div className={styles.contentSide}>
          <h1 className={styles.mainHeading}>{heading}</h1>
          
          <div className={styles.subText}>{subText}</div>

          <ul className={styles.bulletList}>
            {bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className={styles.buttonGroup}>
            <Link href="/contact-us" className={styles.btnPrimary}>
              Contact Us
            </Link>
            <Link href="https://wa.me/yournumber" className={styles.btnSecondary}>
              Chat With Us
            </Link>
          </div>
        </div>

        {/* RIGHT LEAD FORM */}
        <div className={styles.formContainer}>
          <h4 className={styles.formHeading}>
            EVERYTHING YOU NEED, IN A BUDGET!
          </h4>
          
          <form className={styles.leadForm} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter your Name" name="name" required />
            <input type="email" placeholder="Enter your Email" name="email" required />
            <input type="tel" placeholder="Enter your Phone Num" name="phone" required />
            
            <div className={styles.customSelectWrapper} ref={dropdownRef}>
              <div 
                className={`${styles.selectedBox} ${isOpen ? styles.active : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{selected}</span>
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
              </div>
              
              {isOpen && (
                <ul className={styles.optionsList}>
                  {options.map((option) => (
                    <li 
                      key={option} 
                      className={styles.optionItem}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input type="hidden" name="service" value={selected} />
            <button type="submit" className={styles.submitBtn}>
              SIGN UP NOW
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;