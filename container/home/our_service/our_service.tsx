"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "Online Exam Help",
      description: "Expert guidance and support to tackle online exams confidently and achieve better grades.",
      image: "/stow.jpg",
      link: "/online-exam-help"
    },
    {
      title: "Proctored Exam Help",
      description: "Expert assistance for tests taken under proctor-supervised conditions.",
      image: "/sseven.jpg",
      link: "/proctored-exam-help"
    },
    {
      title: "Online Test & Quizzes",
      description: "Assistance with organizing test materials, interpreting subjects, and efficiently completing test requirements.",
      image: "/seleven.jpg",
      link: "/online-tests-quizzes"
    },
    {
      title: "GED Test Help",
      description: "Research, structure and take GED test at a professional level according to certification standards.",
      image: "/sten.jpg",
      link: "/online-ged-test"
    },
    {
      title: "GRE Test Help",
      description: "We are offering you the best experts for GRE test preparation for your GRE certification completion.",
      image: "/sfour.jpg",
      link: "/online-gre-test"
    },
    {
      title: "ATI TEASE Test Help",
      description: "Reliable assistance to complete the online ATI TEASE test accurately and on time.",
      image: "/s10.jpg",
      link: "/online-teas-test"
    },
    {
      title: "PMP Exam Help",
      description: "Our qualified and professional experts will help you pass your PMP certification exam with higher grades.",
      image: "/s12.jpg",
      link: "/online-pmp-exam"
    },
    {
      title: "GMAT Test Help",
      description: "Help understanding lessons, getting through GMAT Test, and get your online certification for you.",
      image: "/seight.jpg",
      link: "/online-gmat-exam"
    },
    {
      title: "HESI Exam Help",
      description: "Assistance with researching, structuring, and formatting your HESI exam for a clean, professional appearance.",
      image: "/s11.jpg",
      link: "/online-hesi-exam"
    },
    {
      title: "PSI Exam Help",
      description: "Receive tailored support for PSI exam taken via professionals with secure and stable performance.",
      image: "/Sone.jpg",
      link: "/online-psi-exam"
    },
    {
      title: "Online Course Help",
      description: "Expert assistance for online courses to help you complete assignments and achieve better grades.",
      image: "/ac5.jpg",
      link: "/online-course-help"
    },
    {
      title: "Online Class Help",
      description: "Professional support for online classes to ensure you stay on track and succeed.",
      image: "/contentone.jpeg",
      link: "/online-class-help"
    },
    {
      title: "CompTIA Exams",
      description: "Specialized help for CompTIA certification exams to advance your IT career.",
      image: "/cfive2.jpg",
      link: "/comptia-exams"
    },
    {
      title: "Insurance Exam",
      description: "Expert guidance for insurance licensing exams to help you pass with confidence.",
      image: "/ac3.jpg",
      link: "/insurance-exam"
    },
    {
      title: "Real Estate Exam",
      description: "Professional assistance for real estate licensing exams to kickstart your career.",
      image: "/ac4.jpg",
      link: "/real-estate-exam"
    },
    {
      title: "Online TEAS Test",
      description: "Comprehensive support for TEAS test preparation to help you excel in nursing school admissions.",
      image: "/c2three.jpg",
      link: "/online-teas-test"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Hire Someone to Take My Exam"
      description="We provide 24/7 assistance for all forms of online classes, courses, or examinations, including proctored exams, quizzes, and other exam types, with a 100% success guarantee.
"
    />
  );
};

export default OurServiceSection;