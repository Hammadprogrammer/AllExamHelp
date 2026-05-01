"use client";
import React, { useState, useEffect } from 'react';
import styles from './contact_from.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation check for all fields
    if (formData.name && formData.email && formData.phone && formData.message) {
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Auto hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.formSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.subtitle}>Send Us Message</span>
          <h2 className={styles.title}>
            Have Any Questions! <span>Say Hello</span>
            <svg className={styles.squiggle} viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#4CAF50" strokeWidth="2" />
            </svg>
          </h2>
        </motion.div>

        {/* Form Box with Shadow */}
        <motion.div 
          className={styles.formBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name *</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone *</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone" 
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message *</label>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send
            </button>
          </form>
        </motion.div>

      </motion.div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className={styles.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.popupContent}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <CheckCircleIcon className={styles.popupIcon} />
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We will get back to you soon!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
