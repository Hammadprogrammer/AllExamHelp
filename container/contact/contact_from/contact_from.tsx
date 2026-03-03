"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './contact_from.module.scss';

const ContactForm = () => {
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.container}>
        
        {/* Left Side: Detailed Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.infoSide}
        >
          <div className={styles.tag}>📩 24/7 STUDENT HELPLINE</div>
          <h2 className={styles.heading}>
            Let’s Handle Your <br /> 
            <span className={styles.goldText}>Academic Work</span>
          </h2>
          <p className={styles.subText}>
            Struggling with deadlines? Fill out the form and our coordinator will reach out via WhatsApp or Email within 5 minutes.
          </p>

          {/* New Trust Grid to fill space */}
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.check}>✔</span>
              <div className={styles.trustText}>
                <strong>100% Confidential</strong>
                <p>Your data is encrypted & never shared.</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.check}>✔</span>
              <div className={styles.trustText}>
                <strong>Plagiarism Free</strong>
                <p>Fresh, original work from scratch.</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.check}>✔</span>
              <div className={styles.trustText}>
                <strong>Refund Policy</strong>
                <p>Satisfaction guaranteed or money back.</p>
              </div>
            </div>
          </div>

          {/* New Content Block: What we cover */}
          <div className={styles.coverage}>
            <h4>Subjects we specialize in:</h4>
            <div className={styles.subjectTags}>
              <span>Nursing</span>
              <span>Engineering</span>
              <span>Law</span>
              <span>Business</span>
              <span>Medicine</span>
              <span>IT & CS</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Interactive Form */}
        <motion.div 
          className={styles.formContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className={styles.animatedBorder}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Instant Quote</h3>
              <form className={styles.mainForm} onSubmit={(e) => e.preventDefault()}>
                <motion.div variants={itemVariant} className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" className={styles.notionInput} />
                </motion.div>

                <motion.div variants={itemVariant} className={styles.inputGroup}>
                  <label>WhatsApp / Email</label>
                  <input type="text" placeholder="How should we contact you?" className={styles.notionInput} />
                </motion.div>

                <motion.div variants={itemVariant} className={styles.inputGroup}>
                  <label>Task Type</label>
                  <select className={styles.notionSelect}>
                    <option>Proctored Exam Help</option>
                    <option>Nursing Portal Assignment</option>
                    <option>Full Class Management</option>
                    <option>Dissertation / Essay</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariant} className={styles.inputGroup}>
                  <label>Deadline & Details</label>
                  <textarea rows={3} placeholder="Tell us about your task and deadline..." className={styles.notionTextarea}></textarea>
                </motion.div>

                <motion.button 
                  variants={itemVariant}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.submitBtn}
                >
                  🚀 Get Help Now
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactForm;