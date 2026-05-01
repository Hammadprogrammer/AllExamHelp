"use client";
import React from 'react';
import styles from './Refund-Policy.module.scss';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={styles.refundSection}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.mainTitle} variants={itemVariants}>Refund Policy</motion.h1>
        
        <motion.p className={styles.introText} variants={itemVariants}>
          We will ensure that at All Exam Help you succeed. We have created a refund policy that will give you the confidence and the peace of mind when using our services.
        </motion.p>

        <div className={styles.policyContent}>
          
          {/* Section 1 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>Our Guarantee</h2>
            <p>
              We are confident in the experience of our specialists and will ensure that you pass your exam. In case, due to any circumstances, we cannot pass you, you have the right to get all your money back.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>Eligibility for a Refund</h2>
            <p>Refunds will be given on the following terms:</p>
            <ul>
              <li><strong>Non-Passing Grade:</strong> In case our expert fails to get a passing grade on the exam in accordance with the terms that were agreed upon in your service contract.</li>
              <li><strong>Service Failure:</strong> In case we cannot perform the service because we have a problem on our side.</li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>Non-refundable Situations</h2>
            <p>We are not obliged to give a refund where:</p>
            <ol>
              <li><strong>Client-Side Problems:</strong> In case your failure to pass the exam can be attributed to technical issues on your side, like a bad internet connection, a malfunctioning computer, or an unexpected power outage.</li>
              <li><strong>Breaking of Terms:</strong> You break any of the terms provided in our service contract, such as providing the wrong login details or interfering with the exam in any manner.</li>
            </ol>
          </motion.div>

          {/* Section 4 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>How to Request a Refund</h2>
            <p>
              <strong>Requesting a refund:</strong> Within a certain timeframe (e.g., 72 hours) of the exam completion, you have to reach our customer support team to obtain a refund. You will be required to give evidence of the non-passing test or a description of the breakdown of service. Your request will be checked by our team, and a refund will be processed in a time-sensitive way.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default RefundPolicy;
