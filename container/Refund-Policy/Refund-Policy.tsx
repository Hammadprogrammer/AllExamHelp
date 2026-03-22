"use client"
import React from 'react';
import Link from 'next/link';
import styles from '../privacy-policy/privacy-policy.module.scss'

const RefundPolicy = () => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <main className={styles.container}>
          <div className={styles.card}>
            
            <header className={styles.headerSection}>
              <h1 className={styles.title}>Refund Policy – Hire Class Buddy</h1>
            </header>

            <div className={styles.section}>
              <p className={styles.text}>
                At <strong>Hire Class Buddy</strong> (we, our, or us), we aim to develop the high quality of online tutoring and academic support services. Our vision is to assist students in becoming better in their discipline, confidence, and performance. This refund policy includes information on the reasons why a refund can be given, how this can be requested and how we can be just and fair when it comes to settling any dispute. The acceptance and consent to the terms in this policy are made by use of our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Eligibility for Refunds</h2>
              <p className={styles.text}>
                The refunds would be granted mainly on services that have not been rendered as they were promised or where there is a clear failure on our part to render the services as per the agreement. The requests should be made within the next seven (7) days of the planned session/service date. Such services, which have received some delivery or have been attended in part or fully, are not usually refundable at all. Nonetheless, partial credits can be taken under exceptional conditions, like technical problems during a live meeting or the inability to provide the agreed material. Every case of a refund request is considered on a case-by-case basis to promote fairness.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>How to Request a Refund</h2>
              <p className={styles.text}>
                In order to get a refund, students are to contact our support team through the use of the following tools: email 
                <Link href="mailto:info@hireclassbuddy.com" className={styles.contactLinkInline}>
                  <strong> info@hireclassbuddy.com </strong>
                </Link> 
                or phone 
                <Link href="tel:+447400465932" className={styles.contactLinkInline}>
                  <strong> +44 7400 465932</strong>
                </Link>.
                By posting a request, you should provide your complete name, booked service, date of the session, as well as an elaborate description of the problem. By providing this information, we are able to appraise your request in a fast and efficient way. Your request will be considered by our team within the time period of 1 business day, and will be answered or you will be asked to give more information within 3-5 business days.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Refund Process</h2>
              <p className={styles.text}>
                When a refund is granted, it will be returned by the method of payment used to make the original payment unless otherwise. It can take between 5 and 10 business days, depending on your bank or payment provider, to pull back the amount in your account. We also have the right to check the context of every refund request, such as checking the logs of sessions, communications, and submitted materials. We will ensure that all the refunds are resolved in a clear and just way.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Non-Refundable Circumstances</h2>
              <p className={styles.text}>
                No refunds will be made on services already fully completed, received or attended by the student. Also, a student is not entitled to a refund because of insignificant problems, the reorganization of the student schedule, or the personal choice of the student. Any request that is made beyond the seven-day window is also said to be non-refundable, unless in extraordinary cases.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Bringing in Cases and Adjustments Exceptionally</h2>
              <p className={styles.text}>
                Although we have a precise refund policy, we understand that there are unexpected situations, which may arise, including technical breakdown, health crisis or any other extraordinary circumstances. Under these circumstances, students should reach out to our support team as soon as possible. These cases are assessed on a case-by-case basis and in some cases, we will refund, reschedule or give credit to future services so that there are no victims among students.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Company Dedication to Student Satisfaction</h2>
              <p className={styles.text}>
                Our mission at Hire Class Buddy is to deliver a high-quality, supportive and professional tutoring experience. Although a clear policy of refunds is established, we also consider the amicable solution of concerns and provide more support when required, as well as make students feel valued and supported during the learning process.
              </p>
            </div>

            <section className={styles.contactBox}>
              <h2 className={styles.subHeading}>Contact Us</h2>
              <p className={styles.text}>
                Our motto is to offer the best in terms of tutoring and academic support services to all students in a safe, fair and transparent environment. For any questions about this refund policy, issues about a session, or help with a refund request, contact us:
              </p>
              <div style={{ marginTop: '20px' }}>
                <p className={styles.text}>
                  <strong>Email: </strong>
                  <Link href="mailto:info@hireclassbuddy.com" className={styles.contactLink}>
                    info@hireclassbuddy.com
                  </Link>
                </p>
                
                <p className={styles.text} style={{ marginTop: '10px' }}>
                  <strong>Phone: </strong> 
                  <Link href="tel:+447400465932" className={styles.contactLink}>
                    +44 7400 465932
                  </Link>
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default RefundPolicy;