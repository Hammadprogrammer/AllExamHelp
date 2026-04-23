"use client"
import React, { useState } from 'react';
import styles from './fqa.module.scss';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  mainTitle: string;
  description: string;
  buttonText: string;
  faqList: FAQItem[];
}

const FAQSection = ({ mainTitle, description, buttonText, faqList }: FAQProps) => {
  // Q1 default open rakhne ke liye 0 set kiya hai
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faqWrapper}>
      {/* Left Content Card - Now Normal (Not Fixed) */}
      <div className={styles.leftCard}>
        <h2 className={styles.title}>{mainTitle}</h2>
        <p className={styles.text}>
          {description}
        </p>
        <button className={styles.btn}>{buttonText}</button>
      </div>

      {/* Accordion List */}
      <div className={styles.accordionContainer}>
        {faqList.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={faq.id} 
              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            >
              <div 
                className={`${styles.header} ${isOpen ? styles.active : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.qText}>
                  <strong>{faq.id}:</strong> {faq.question}
                </span>
                {/* Black Icons */}
                <span className={styles.icon}>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              
              <div className={styles.body}>
                <p className={styles.aText}>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;