"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section 
      className={styles.faqWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Content Card */}
      <motion.div 
        className={styles.leftCard}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={styles.title}>{mainTitle}</h2>
        <p className={styles.text}>
          {description}
        </p>
        <button className={styles.btn}>{buttonText}</button>
      </motion.div>

      {/* Accordion List */}
      <motion.div 
        className={styles.accordionContainer}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {faqList.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div 
              key={faq.id} 
              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            >
              <div 
                className={`${styles.header} ${isOpen ? styles.active : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.qText}>
                  <strong>{faq.id}:</strong> {faq.question}
                </span>
                <span className={styles.icon}>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    className={styles.bodyWrapper}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className={styles.body}>
                      <p className={styles.aText}>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;