"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export interface SlideData {
  topText?: string;
  heading: React.ReactNode;
  subText: React.ReactNode;
  bgImage: string;
  bullets?: string[];
}

interface HeroProps {
  slides?: SlideData[];
  // Backwards compatibility props
  topText?: string;
  heading?: React.ReactNode;
  subText?: React.ReactNode;
  bullets?: string[];
  bgImages?: string[];
}

const defaultBgImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.5
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0.5,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  })
};

const childVariants: Variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Hero: React.FC<HeroProps> = ({ 
  slides,
  topText,
  heading, 
  subText, 
  bullets = [],
  bgImages = defaultBgImages 
}) => {
  const [tuple, setTuple] = useState([0, 0]); // [page, direction]
  const page = tuple[0];
  const direction = tuple[1];

  // If `slides` array is provided, use it. Otherwise, create slides from legacy props to maintain backwards compatibility.
  const actualSlides: SlideData[] = slides && slides.length > 0 
    ? slides 
    : bgImages.map(img => ({
        topText,
        heading,
        subText,
        bgImage: img,
        bullets
      }));

  const slideIndex = ((page % actualSlides.length) + actualSlides.length) % actualSlides.length;
  const current = actualSlides[slideIndex];

  const paginate = (newDirection: number) => {
    setTuple([page + newDirection, newDirection]);
  };

  // Background slider logic
  useEffect(() => {
    if (actualSlides.length <= 1) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [page, actualSlides.length]);

  if (actualSlides.length === 0) return null;

  return (
    <div className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#061f3a] group py-8 md:py-0">
      {/* Background Images Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${current.bgImage}')` }}
        />
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="col-start-1 row-start-1 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
          >
            {/* Left Side - Text Content Slider */}
            <div className="flex-1 w-full lg:pr-10 flex flex-col justify-center text-left py-6 md:py-10">
              {current.topText && (
                 <motion.div variants={childVariants} className="mb-4">
                    <span className="text-[#FFC107] font-bold text-base sm:text-lg md:text-xl relative inline-block pb-2 tracking-wider">
                      {current.topText}
                      <svg className="absolute -bottom-1 left-0 w-full h-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,10 Q12.5,20 25,10 T50,10 T75,10 T100,10" fill="none" stroke="#10b981" strokeWidth="4" />
                      </svg>
                    </span>
                 </motion.div>
              )}
              
              <motion.h1 variants={childVariants} className="text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-1xl font-extrabold mb-4 text-white">
                {current.heading}
              </motion.h1>
              
              <motion.div variants={childVariants} className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-2xl lg:mx-0 leading-relaxed font-medium">
                {current.subText}
              </motion.div>

                <motion.div variants={childVariants} className="mb-8 flex flex-col items-start">
                  <ul className="space-y-3 text-left">
                    {current.bullets && current.bullets.map((point, index) => (
                      <li key={index} className="text-sm sm:text-base md:text-lg font-medium text-white tracking-wide flex items-start">
                        <span className="shrink-0 w-2 h-2 bg-[#10b981] rounded-full mt-1.5 mr-3"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              <motion.div variants={childVariants}>
                <Link 
                  href="/contact/" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#10b981] rounded-lg hover:bg-[#059669] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  Get Started ➜
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Lead Form */}
            <motion.div variants={childVariants} className="w-full max-w-md lg:mx-0 relative z-20">
              {/* Deal of the Day Badge */}
              <div className="absolute -top-5 left-6 bg-[#FFC107] text-white font-bold py-2 px-6 rounded-t-xl rounded-br-xl shadow-lg z-20">
                Deal of the Day
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 pt-10 sm:pt-12 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-[#3b82f6] text-lg md:text-xl font-bold relative inline-block uppercase tracking-wide pb-2 z-10">
                    GET 60% FLAT DISCOUNT!
                    <svg className="absolute -bottom-2 left-0 w-full h-3 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q12.5,20 25,10 T50,10 T75,10 T100,10" fill="none" stroke="#10b981" strokeWidth="3" />
                    </svg>
                  </h3>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      name="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400 text-gray-800 text-sm"
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      name="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400 text-gray-800 text-sm"
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone No" 
                      name="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400 text-gray-800 text-sm"
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 text-white font-bold text-lg rounded-lg transition-all mt-4 bg-[#7DD3FC] hover:bg-[#38bdf8] shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Get Instant Quote
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Arrows */}
      {actualSlides.length > 1 && (
        <>
          <button 
            onClick={() => paginate(-1)} 
            className="hidden md:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/80 transition-all z-30"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => paginate(1)} 
            className="hidden md:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/80 transition-all z-30"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}

          </div>
  );
};

export default Hero;