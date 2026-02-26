"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Divider } from '@mui/material';
import { 
  Email, Phone, Facebook, Instagram, X, 
  ChevronRight, LocationOn
} from '@mui/icons-material';
import styles from './footer.module.scss';

const Footer = () => {
  // SSG safe way to get year
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Do My Online Class", url: "/services/online-class-help" },
    { name: "Online Exam", url: "/services/online-exam-help" },
    { name: "Assignment Help", url: "/services/online-assignment-help" },
    { name: "Awards & Reviews", url: "/reviews" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Refund Policy", url: "/refund-policy" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" },
  ];

  return (
    <footer className={styles.footerWrapper}>
      <Container maxWidth="lg">
        <div className={styles.footerGrid}>
          
          {/* Column 1: Logo and About */}
          <div className={styles.footerCol}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <Image 
                  src="/done.png" 
                  alt="Hire Class Buddy Logo" 
                  width={160} 
                  height={50} 
                  className={styles.footerLogo}
                  priority 
                />
              </Link>
            </div>
            <p className={styles.description}>
              HireClassBuddy.com is a reputable platform providing top-notch academic assistance. 
              Our skilled specialists manage online lessons and tests to ensure your success.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <nav aria-label="Quick links">
              <ul className={styles.linkList}>
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.url} className={styles.footerLink}>
                      <ChevronRight className={styles.arrow} /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <nav aria-label="Legal links">
              <ul className={styles.linkList}>
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.url} className={styles.footerLink}>
                      <ChevronRight className={styles.arrow} /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.socialBox}>
              <Link href="#" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="Twitter"><X /></Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Connect with Us</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Email /> <a href="mailto:info@hireclassbuddy.com">info@hireclassbuddy.com</a>
              </div>
              <div className={styles.contactItem}>
                <Phone /> <a href="tel:+447400465932">+44 7400 465932</a>
              </div>
              <div className={styles.contactItem}>
                <LocationOn /> <span>124 City Road, London, EC1V2NX</span>
              </div>
            </div>

            <p className={styles.paymentHeading}>We Accept Major Cards</p>
            <div className={styles.paymentIcons}>
              <Image 
                src="/paymenticon.png" 
                alt="Visa, Mastercard, American Express accepted" 
                width={220} 
                height={35} 
              />
            </div>
          </div>

        </div>

        <Divider className={styles.divider} />

     

        <div className={styles.copyrightSection}>
          <p suppressHydrationWarning>
            Copyright © {currentYear} Hire Class Buddy. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;