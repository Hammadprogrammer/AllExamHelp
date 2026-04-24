"use client";
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';

// MUI Icons Import
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import styles from './get_quote.module.scss';

interface GetQuoteProps {
  topLabel?: string;
  heading?: string;
  description?: string;
  contactHeading?: string;
  contactDescription?: string;
  phone?: string;
  email?: string;
  liveChatText?: string;
  formHeading?: string;
  formDescription?: string;
  btnText?: string;
}

const GetQuote: React.FC<GetQuoteProps> = ({
  topLabel = "Get A Quote",
  heading = "Do My Exam",
  description = "It's a simple way to start your exam support journey and save while boosting your grades.",
  contactHeading = "Place your Order here",
  contactDescription = "We guarantee you get the support you can trust at the moment it's needed the most.",
  phone = "+12123476533",
  email = "info@allexamhelp.com",
  liveChatText = 'Live Chat: Type "Yes" to Start',
  formHeading = "Enjoy a 50% Discount on Signup",
  formDescription = "Sign up today and receive a free quote for our services, plus an instant 50% discount.",
  btnText = "Get Instant Quote",
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/12292028857?text=${message}`, '_blank');
  };

  // SEO: Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": heading,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "All Exam Help",
      "telephone": phone,
      "email": email,
    }
  };

  return (
    <section className={styles.quoteSection} aria-labelledby="form-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.header 
          className={styles.headerArea}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.topLabel}>{topLabel}</span>
          <div className={styles.waveLine} aria-hidden="true">
            <svg width="80" height="10" viewBox="0 0 80 10">
              <path d="M0 5 Q10 0 20 5 T40 5 T60 5 T80 5" stroke="#28a745" fill="none" strokeWidth="2"/>
            </svg>
          </div>
          <h2 id="form-title" className={styles.mainHeading}>{heading}</h2>
          <p className={styles.subText}>{description}</p>
        </motion.header>

        <div className={styles.columnsWrapper}>
          {/* Left Column - Contact Details */}
          <motion.aside 
            className={styles.contactCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.contactHeading}>{contactHeading}</h3>
            <p className={styles.contactDesc}>{contactDescription}</p>

            <address className={styles.addressWrapper}>
              <div className={styles.contactItem}>
                <LocalPhoneIcon className={styles.muiIcon} />
                <span className={styles.contactText}>
                  <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
                </span>
              </div>
              
              <div className={styles.contactItem}>
                <EmailIcon className={styles.muiIcon} />
                <span className={styles.contactText}>
                  <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
                </span>
              </div>

              <div className={styles.contactItem}>
                <WhatsAppIcon className={styles.muiIcon} />
                <span className={styles.contactText}>
                  <strong>{liveChatText}</strong>
                </span>
              </div>
            </address>
          </motion.aside>

          {/* Right Column - Form */}
          <motion.article 
            className={styles.formCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={styles.formHeading}>{formHeading}</h3>
            <p className={styles.formDesc}>{formDescription}</p>
            
            <form onSubmit={handleSubmit} className={styles.quoteForm} aria-label="Lead generation form">
              <div className={styles.inputBox}>
                <label htmlFor="name" className="visually-hidden">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                {btnText}
              </button>
            </form>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};

export default GetQuote;