"use client";
import React from 'react';
import { Container, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './client_reviews.module.scss';
import Link from 'next/link';

interface Review {
  image: string;
  name: string;
  location: string;
  stars: number;
  reviewText: string;
}

interface ClientReviewsProps {
  reviews: Review[];
  badgeTitle?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ClientReviews = ({ 
  reviews,
  badgeTitle = "Client Reviews",
  mainTitle = "Hear from Our Happy Clients",
  description = "Awesome quality and service! The exam help was accurate, private, and helped my self-confidence. Would recommend to anyone wanting great results.",
  buttonText = "Contact Us",
  buttonLink = "/contact-us"
}: ClientReviewsProps) => {
  return (
    <section className={styles.reviewsSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          {/* Static Content Side */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.smallHeadingWrapper}>
              <span className={styles.smallHeading}>{badgeTitle}</span>
              <svg className={styles.squiggle} viewBox="0 0 160 15" fill="none">
                <path 
                  d="M2 10c15-10 30-10 45 0s30 10 45 0 30-10 45 0" 
                  stroke="#7ED957" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
            <h2 className={styles.mainHeading}>{mainTitle}</h2>
            <p className={styles.description}>
              {description}
            </p>
            <Link href={buttonLink}>
            <Button className={styles.contactBtn} variant="contained">
              {buttonText} <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Button>
            </Link>
          </motion.div>

          {/* Slider Side */}
          <motion.div 
            className={styles.sliderWrapper}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: `.${styles.customPaginationDots}` }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.flexCard}>
                    <div className={styles.imageBox}>
                      <Image 
                        src={review.image} 
                        alt={review.name} 
                        width={180} 
                        height={180} 
                        className={styles.clientImg} 
                      />
                    </div>
                    
                    <div className={styles.contentBox}>
                      <div className={styles.stars}>
                        {[...Array(review.stars)].map((_, i) => (
                          <StarIcon key={i} sx={{ fontSize: 22 }} />
                        ))}
                      </div>
                      <p className={styles.reviewText}>"{review.reviewText}"</p>
                      <div className={styles.clientMeta}>
                        <h4 className={styles.name}>{review.name}</h4>
                        <span className={styles.location}>{review.location}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.customPaginationDots}></div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default ClientReviews;