"use client"
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './privacy-policy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy – Hire Class Buddy</title>
        <meta name="description" content="Feeling overwhelmed by upcoming exams? Hire Class Buddy offers professional exam tutors for hire to boost your confidence and help you excel in your exams." />
      </Head>

      <div className={styles.mainWrapper}>
        <main className={styles.container}>
          <div className={styles.card}>
            
            <header className={styles.headerSection}>
              <h1 className={styles.title}>Privacy Policy</h1>
            </header>

            <div className={styles.section}>
              <p className={styles.text}>
                Welcome to <strong>Hire Class Buddy</strong>. We do care about your privacy and we understand that we must take care of your trust at Hire Class Buddy. When you access our website or avail our services, you become bound by these terms as stated in this policy. All users are strongly advised to read this Privacy Policy to understand how their information is managed.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Information We Collect</h2>
              <p className={styles.text}>
                In order to give users a customized and efficient learning experience, we gather some information about the users. It contains your personal information like your name, email address, phone number and any other details that you might have included when registering, communicating with us or when you book your tutoring sessions. We can also gather the usage data, including the pages you read, the time you take to read the page, and the route that you are taking on our site. To make payments, we can get the required payment information, which is safely transferred using safe and encrypted payment gateways to maintain full security.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>How We Use Your Information</h2>
              <p className={styles.text}>
                The data gathered is spent mainly to offer and support our tutoring and academic services. We apply it to communicate with you about scheduling, updates and feedback about your progress. The data you provide will enable us to customize our tutoring services to your particular learning requirements and will offer useful learning materials and enhance the overall functionality and effectiveness of our site.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Protecting Data and Securing its Safety</h2>
              <p className={styles.text}>
                We are concerned about the safety of your personal information. We apply security standards, such as secure servers, encrypted connections, and limited access to personal information, that are implemented in the industry. User information is only accessed by authorized personnel. We have a regular system check-up and update to avoid unauthorized access, data breach or misuse of information and in the event that your data gets in the wrong hands, it is still secure.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Sharing Your Information</h2>
              <p className={styles.text}>
                There are no situations when Hire Class Buddy sells, rents, or trades your personal data to any third party. We can only provide information to third-party service providers who support us with hosting of sites, payment processing or analytics and only to the degree that they are needed to achieve their services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>The Cookies and Tracking Technology</h2>
              <p className={styles.text}>
                Our site can employ cookies and other tracking efforts to provide a better user experience, traffic analysis of the site and to facilitate the functionality of our site. Cookies assist us in knowing what our users like, to store information about the users' login passwords, and even give them a better user experience. Managing cookies or disabling cookies is at your choice of browser settings, you may find that some of our features do not operate correctly when cookies are disabled.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Your Rights and Choices</h2>
              <p className={styles.text}>
                It is an entitlement of the users to provide and destroy, correct or amend their personal information. Alternatively, you can choose not to get promotional mailings or marketing-related messages by using the instructions of unsubscribing in the mails. In case you would like to revise, update or delete your personal information, you may also do so by reaching out to us at the email address given below. We will ensure that we respect your privacy and act in a timely manner on any request concerning your data.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Children’s Privacy</h2>
              <p className={styles.text}>
                The Hire Class Buddy services are planned to be used by users of 13 years and older. We do not purposely gather personal data on children who are below 13. In case we come to know that we have gathered information of a child younger than 13 without parental consent, then we will delete the information as soon as possible.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subHeading}>Amendments to This Privacy Policy</h2>
              <p className={styles.text}>
                We can revise this Privacy Policy occasionally to align with its practices, legal and service provision. Changes will be updated and displayed on this page and a new effective date will be updated. Users are advised to read this Privacy Policy on a regular basis to be updated on our protection of their information and its usage.
              </p>
            </div>

            <section className={styles.contactBox}>
              <h2 className={styles.subHeading}>Contact Us</h2>
              <p className={styles.text}>
                In case of any queries, issues or demands as to this Privacy Policy or how your personal data is processed, then contact us at:
              </p>
              <div style={{ marginTop: '20px' }}>
                <p className={styles.text}>
                  <strong>Email: </strong>
                  <Link href="mailto:info@hireclassbuddy.com" className={styles.contactLink}>
                    info@hireclassbuddy.com
                  </Link>
                </p>
                <p className={styles.text} style={{ marginTop: '10px' }}>
                  <strong>Phone: </strong> +1 (XXX) XXX-XXXX
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;