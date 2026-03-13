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
      text: "I was trying to balance a job and classes, but this take my online class service made it all so much easier. The tutors were clear in their explanations and quickly helped me catch up. Highly recommended for busy students!",
      author: "Order # 28383 | Editing"
    },
    {
      text: "I was working as a student, so I barely had time to study. Their flexible pay someone to take my online class solutions helped bring my grades up without adding more stress to my schedule. Amazing experience!",
      author: "Order # 9921 | Engineering"
    },
    {
      text: "I was struggling with my assignments and exam preparation, and I got exactly what I needed. The tutors are very knowledgeable, professional and patient. My results improved a lot!",
      author: "Order # 4452 | History"
    },
        {
      text: "This service is great for busy students. The tutors are always on point, and the signup procedures are very easy to follow. I finally feel good about my grades again.",
      author: "Order # 4452 | History"
    },    {
      text: "I recommend this tutoring platform to anyone! They assisted me with coursework as I worked a part-time job. The one-on-one take my online class support was incredibly helpful.",
      author: "Order # 4452 | History"
    }
  ];

  const faqs = [
    { q: "Is it possible to pay someone to take online class, at low cost?",a: "Ans. There are a number of excellent platforms on the market; however, we take pride in offering very competitive rates. We know that students are on a tight budget. We are budget-friendly as a platform, ensuring you won't break the bank!" },
    { q: "How I can pay someone take my online class for me?", a: "Ans. Purchasing on our site is super easy and fast. We have created an easy-to-understand platform where you can get suggestions from an education expert for your online lesson and transparent steps." },
    { q: "Can I choose the expert who assists me in my class?", a: "Ans. Absolutely. When you ask us to hire someone to take online class, your data and privacy are secured. Our systems are encrypted, and we work under high levels of confidentiality. No resale; you get ownership and academic security per project since each one is different." },
    { q: "Can I speak directly with the tutor?", a: "Ans. Your instructor can guide you and reach out to the instructor to help clarify all your doubts about your subject and web-based assignments. You are allowed to get in touch with the tutor." },
    { q: "Who will take my online class for me?", a: "Ans. These are very learned teachers all round. They will also help you with your online exams, tests, and quizzes according to what you authorize." }
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
        <h3 className={styles.heading}>Hear from our happy clients</h3>
        <p className={styles.subHeading}>
          Our students’ success speaks for itself. Read what they have to say about their online education journey with us.
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
        <h2 className={styles.heading}>Frequently asked questions </h2>
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