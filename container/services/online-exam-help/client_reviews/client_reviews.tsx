"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", // Example image
      name: "Ryan T.",
      location: "New York",
      stars: 5,
      reviewText: "Professional, quick, and trustworthy. Studying became much smoother with online exam support, and it played a big role in enabling me to score more than I expected."
    },
    {
      image: "/t4.jpg", 
      name: "Sophia L.",
      location: "Texas",
      stars: 5,
      reviewText: "Awesome help and support! The team made my experience of writing the exam comfortable, anxiety-free, and hugely successful. Very satisfied."
    },
    {
      image: "/t1.jpg",
      name: "Michael R.",
      location: "Florida",
      stars: 5,
      reviewText: "Was able to trust the experts, responded rapidly and safely. I got good marks thanks to them. All exam help is far the best online exam support.!!!"
    },
    {
      image: "/t4.jpg",
      name: "Jessica M.",
      location: "California",
      stars: 5,
      reviewText: "Was able to trust the experts, responded rapidly and safely. I got good marks thanks to them. All exam help is far the best online exam support.!!!"
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="Hear from Our Happy Clients"
      description="Awesome quality and service! The exam help was accurate, private, and helped my self-confidence. Would recommend to anyone wanting great results."
      buttonText="Contact Us"
      buttonLink="/contact-us"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;