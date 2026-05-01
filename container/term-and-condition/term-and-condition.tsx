"use client";
import React from 'react';
import styles from './term-and-condition.module.scss';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
    <section className={styles.termsSection}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.mainTitle} variants={itemVariants}>Terms and Conditions</motion.h1>
        
        <motion.p className={styles.introText} variants={itemVariants}>
          Welcome to All Exam Help. In using and gaining access to our services, you sign and agree to the terms and conditions listed below. Please read them carefully.
        </motion.p>

        <div className={styles.policyContent}>
          
          {/* Section 1 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>1. Service Description</h2>
            <p>
              All Exam Help offers professional, confidential aid to busy students in need of online test, exam, and certification help. Online exam-taking, test preparation, and other related academic support are some of our services.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>2. User Obligations</h2>
            <p>Through our services, you are agreeing to:</p>
            <ul>
              <li><strong>Give correct information:</strong> It is your duty to give all the required and proper information about your exam that includes logins, exam schedules, and other details.</li>
              <li><strong>Know academic policies:</strong> You know and are obliged to comply with academic integrity policies at your educational institution. All Exam Help is a service with no attachment to any institution, and we have no responsibility towards the disciplinary measures of your institution that may be imposed on you.</li>
              <li><strong>Make sure it is compatible with the platform:</strong> You should make sure that your computer and internet connection fit the technical specs of your exam platform. Any problems caused by a bad network or hardware problems cannot be blamed on us.</li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>3. Anonymity and security.</h2>
            <p>
              It has been our priority to respect your privacy. Your personal data and academic information that you provide to us is to be kept in strict confidence. Your identity will never be revealed, and your information will never be used in any other way except to provide the service you have requested. Communication and data transfers are all secured to ensure your privacy.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>4. Payments and Refunds</h2>
            <ul>
              <li><strong>Payment:</strong> The service should be rendered only when all the payments are made. We allow different payment methods, which are listed on our site.</li>
              <li><strong>Refunds:</strong> In case we fail to provide a passing mark, we will provide a refund or reservice as stipulated in the original service contract between us. Your service agreement specifies certain refund policies. Failure due to technical problems on your behalf (i.e., poor internet connection, system failure) will not be refunded.</li>
            </ul>
          </motion.div>

          {/* Section 5 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>5. Warranty and Liability Disclosure.</h2>
            <p>
              All Exam Help does not guarantee any particular score and only offers its services as is, unless there is an agreement between the service and the customer. We have a history of success due to experience and expertise. We do not cause any technical problems, system malfunctions, or unexpected events that could happen during the exam, such as platform crashes or server errors, etc.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>6. Governing Law</h2>
            <p>
              Such terms and conditions will be subject to and interpreted by the jurisdiction in which All Exam Help is registered without reference to its conflict of law regulations.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>7. Changes to Terms</h2>
            <p>
              All Exam Help may at any time alter these terms and conditions. Any changes will be communicated to you by placing the new terms on this page. The fact that you still use the service after such modifications means that you have accepted the new terms.
            </p>
          </motion.div>

          {/* Headingless sections from screenshot */}
          <motion.div className={styles.section} variants={itemVariants}>
            <h2>How Our Service Works</h2>
            <p>
              Our service is easy and simple to get started with. The first step is to contact us with the information about your online test, the subject, the date, and the time of the test. Then we will offer you a specific quote, a clear service agreement, and a clear description of the terms and guarantees. After the contract is signed and payment is made, we will send a qualified professional on our team specialized in the field you need. Our professional will arrange with you the access to the exam platform at the appointed time to provide a pleasant and stress-free process in all aspects.
            </p>
          </motion.div>

          <motion.div className={styles.section} variants={itemVariants}>
            <h2>We are committed to quality and to success.</h2>
            <p>
              We care about your success at All Exam Help. We have a team of extremely experienced professionals, experts in their own fields. They are not merely test-takers, but they are experts in their subject matter who have profound knowledge of the question formats and types of questions on exams. This knowledge enables us to produce quality results without any doubt. We are confident in our work, to the extent that we promise you passing grades, and therefore, you can be fully confident that your academic ambitions are in good hands. Our most important goal is to assist you in passing the certification exam in order to progress with your career or education without cramming and test anxiety.
            </p>
          </motion.div>

          <motion.div className={styles.section} variants={itemVariants}>
            <h2>Unmatched Customer Support</h2>
            <p>
              We are of the opinion that great service does not begin and end with the exam. This is why we provide our customers with unparalleled customer service during the entire process. We also have a support team ready to answer your questions and to discuss your concerns with you before, during, and after the exam. We stay in touch to update you on the progress, so you are fully informed, and you experience no worries whatsoever. We strive to develop a working relationship with trust and reliability so that we become your partner whenever you have any future academic requirements. You are not a client with All Exam Help; you are a partner in success.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
