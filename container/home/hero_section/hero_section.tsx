import React from 'react';
import styles from './hero_section.module.scss';

// Next.js (SSG) focus: Content static hai isliye ye server par hi render ho jayega.
const Hero: React.FC = () => {
  return (
    <div className={styles.main}>
    <section className={styles.heroSection}>
      {/* LEFT CONTENT */}
      <div className={styles.contentSide}>
        <h1 className={styles.mainHeading}>
          Get A Full-Course Assistance From Our <span>Qualified Experts!</span>
        </h1>
        
        <p className={styles.subText}>
          The solutions we offer are result-generating. We have proven our 
          excellence through our quality service.
        </p>

        <ul className={styles.bulletList}>
          <li>Don't Miss Deadlines - or You Get a Full Refund</li>
          <li>100% Original & Custom - Always In-depth research</li>
          <li>Money-Back Guaranty - if you are not satisfied</li>
        </ul>

        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary}>Contact Us</button>
          <button className={styles.btnSecondary}>Chat With Us</button>
        </div>
      </div>

      {/* RIGHT LEAD FORM */}
      <div className={styles.formContainer}>
        <h4 className={styles.formHeading}>
          EVERYTHING YOU NEED, IN A BUDGET!
        </h4>
        
        {/* Form handling usually needs 'use client', but the UI remains static */}
        <form className={styles.leadForm}>
          <input type="text" placeholder="Enter your Name" name="name" required />
          <input type="email" placeholder="Enter your Email" name="email" required />
          <input type="tel" placeholder="Enter your Phone Num" name="phone" required />
          
          <select defaultValue="" name="service" required>
            <option value="" disabled>Select Need Help</option>
            <option value="Online Class">Online Class Help</option>
            <option value="Assignment">Assignment Help</option>
            <option value="Exam">Exam Help</option>
            <option value="Quiz">Quiz Help</option>
          </select>

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