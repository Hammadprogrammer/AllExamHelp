"use client"
import React, { useState, useEffect } from 'react';
import styles from './testimonial.module.scss';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Types define karna zaroori hai TypeScript ke liye
interface TestimonialItem {
  text: string;
  author: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

const Testimonial = ({ testimonials, faqs, title, subtitle }: TestimonialProps) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto Slider Logic
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Testimonials Section */}
        <div className={styles.section}>
          <h3 className={styles.heading}>{title || "Hear from our happy clients"}</h3>
          <p className={styles.subHeading}>
            {subtitle || "Our students’ success speaks for itself."}
          </p>
          
          {testimonials.length > 0 && (
            <div className={styles.testimonialCard}>
              <div key={activeSlide} className={styles.fadeText}>
                <FormatQuoteIcon className={styles.quoteIcon} />
                <p className={styles.testimonialText}>
                  "{testimonials[activeSlide].text}"
                </p>
                <div style={{ marginTop: '20px' }}>
                  {[...Array(4)].map((_, i) => <StarIcon key={i} style={{color:'#ffb400', fontSize:'20px'}} />)}
                  <StarHalfIcon style={{color:'#ffb400', fontSize:'20px'}} />
                </div>
                <p style={{ color: '#ff8c00', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '10px' }}>
                  {testimonials[activeSlide].author}
                </p>
              </div>
            </div>
          )}

          <div className={styles.sliderDots}>
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`${styles.dot} ${activeSlide === i ? styles.activeDot : ''}`}
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Frequently asked questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div 
                  className={`${styles.faqHeader} ${activeFaq === index ? styles.activeHeader : ''}`} 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>Q{index + 1}. {faq.q}</span>
                  {activeFaq === index ? 
                    <CloseIcon style={{fontSize: '20px'}} /> : 
                    <AddIcon style={{fontSize: '20px'}} />
                  }
                </div>
                
                <div className={`${styles.answerWrapper} ${activeFaq === index ? styles.isOpen : ''}`}>
                  <div className={styles.answerContent}>
                    <div className={styles.answerPadding}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;