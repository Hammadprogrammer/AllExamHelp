"use client"
import React, { useState, useEffect } from 'react';
import styles from './testimonial.module.scss';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "I struggled to understand arithmetic concepts, but with the excellent assistance of domyonlineclass.us.com, I achieved high marks.",
      author: "Order # 28383 | Editing"
    },
    {
      text: "The complexity of my engineering assignments was overwhelming, but their guidance turned my grades around completely. Highly professional and always on time!",
      author: "Order # 9921 | Engineering"
    },
    {
      text: "Affordable and professional. They handled my entire history module while I focused on my full-time job. The support team is very helpful.",
      author: "Order # 4452 | History"
    },
        {
      text: "Affordable and professional. They handled my entire history module while I focused on my full-time job. The support team is very helpful.",
      author: "Order # 4452 | History"
    },    {
      text: "Affordable and professional. They handled my entire history module while I focused on my full-time job. The support team is very helpful.",
      author: "Order # 4452 | History"
    }
  ];

  const faqs = [
    { q: "Can I pay someone to do my online class for me at an affordable rate?", a: "Ans. Many platforms on the market provide admirable services, but what makes us stand out is the reasonable pricing. We are aware of the financial constraints faced by students. Our platform has affordable charges, so you can stay within your budget." },
    { q: "How can I hire someone to do my online class in simple steps?", a: "Ans. On our website, placing a purchase is incredibly simple and quick. We have developed an intuitive platform where you may engage an expert for your online lesson and follow a few simple steps." },
    { q: "How much should I pay someone to do my online class?", a: "Ans. For this query, there isn't a single set quantity. Depending on the services you purchase through our platform, you may pay a different cost for online assistance." },
    { q: "Can I communicate directly with the tutor?", a: "Ans. You can instruct and contact the instructor to clarify all your questions about your subject and online assignments. You are permitted to contact the tutor." },
    { q: "Who will take my online class for me?", a: "Ans. Our teachers are extremely knowledgeable in every subject. They will also administer your online exams, tests, and quizzes in accordance with your authorization." }
  ];

  useEffect(() => {
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
        <h3 className={styles.heading}>Testimonials</h3>
        <p className={styles.subHeading}>
          Since its inception, offering top-notch online course assistance. Take note of what our devoted customers have to say about us.
        </p>
        
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
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
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