"use client";
import React from 'react';
import styles from './privacy-policy.module.scss';

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacySection}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Privacy Policy</h1>
        
        <p className={styles.introText}>
          We take your privacy and personal information seriously in All Exam Help. The privacy policy is our statement of how we gather, use, and protect your information when you utilize our services. Through All Exam Help, you agree to the practices as outlined in this policy.
        </p>

        <div className={styles.policyContent}>
          
          {/* Section 1 */}
          <div className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>In order to offer our confidential online examination services, we gather the following forms of information:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> This is your name, email, and contact number. We communicate with you using this to give updates on your service requests.</li>
              <li><strong>Exam Related Data:</strong> We gather information that is required to log in to your online exam site, including usernames and passwords. This information is just deployed to fulfill your requested service.</li>
              <li><strong>Payment information:</strong> All financial transactions are managed by third-party payment processors. We do not keep your credit card or banking information or have direct access to it.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we gather in the following ways:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To obtain and submit your online exams and academic activities according to your request.</li>
              <li><strong>Communication:</strong> To help support your customers, send updates on the service and reply to their</li>
              <li><strong>Security:</strong> To confirm that you are who you are and to safeguard your information against any type of unauthorized access.</li>
            </ul>
            <p className={styles.footerNote}>Your personal information is never sold, rented, or traded to third parties.</p>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <h2>3. Information Protection and Secrecy.</h2>
            <p>Our highest priority is your trust. To secure your data, we have put in place strong security measures:</p>
            <ul>
              <li><strong>Confidentiality:</strong> All data that you submit (such as your identity and exam credentials) is handled with utmost confidentiality. Our professionals are strictly subject to nondisclosure.</li>
              <li><strong>Data Encryption:</strong> We encrypt data using industry-standard encryption protocols when transmitting and storing information.</li>
              <li><strong>Limited Access:</strong> The information about you is available to authorized personnel only who have a direct interest in your request.</li>
            </ul>
            <p className={styles.footerNote}>Your service has finished, and a reasonable time has elapsed. On any follow-up, your exam credentials are permanently removed from our systems.</p>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <h2>4. Third-Party Services</h2>
            <p>
              We can take advantage of third-party solutions, like payment processors, to make our business run. It is under the privacy policies of these third parties that they use your information. You can refer to their policies to know more.
            </p>
          </div>

          {/* Section 5 */}
          <div className={styles.section}>
            <h2>5. Your Consent</h2>
            <p>
              Through our services, you agree to our privacy policy for collecting and using your information. Unless you accept this policy, you should not use our services.
            </p>
          </div>

          {/* Section 6 */}
          <div className={styles.section}>
            <h2>6. Amendments to This Privacy Policy.</h2>
            <p>
              We can always change or amend this privacy policy. Among the major changes, we will inform you of the existence of the new policy by publishing it on our site. The fact that you are still using our services after we make any changes suggests that you have accepted the policy as updated.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
