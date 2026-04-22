"use client";
import React from 'react';
import { Container, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

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

const ClientReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <section className={styles.reviewsSection}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          
          {/* Static Content Side */}
          <div className={styles.leftContent}>
            <div className={styles.smallHeadingWrapper}>
              <span className={styles.smallHeading}>Client Reviews</span>
              <svg className={styles.squiggle} viewBox="0 0 160 15" fill="none">
                <path 
                  d="M2 10c15-10 30-10 45 0s30 10 45 0 30-10 45 0" 
                  stroke="#7ED957" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
            <h2 className={styles.mainHeading}>Hear from Our Happy Clients</h2>
            <p className={styles.description}>
              Awesome quality and service! The exam help was accurate, private, and helped my self-confidence. Would recommend to anyone wanting great results.
            </p>
            <Link href="/contact-us">
            <Button className={styles.contactBtn} variant="contained">
              Contact Us <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Button>
            </Link>
          </div>

          {/* Slider Side */}
          <div className={styles.sliderWrapper}>
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
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ClientReviews;