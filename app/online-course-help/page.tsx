import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/online-course-help/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-exam-help/our_service/our_service'
import ContentSectionOne from '@/container/services/online-course-help/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/online-exam-help/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'
import ContentSectionTwoHome from '@/container/services/online-exam-help/content_section_two/content_section_two'
import AboutTeamHome from '@/container/services/online-exam-help/about_team/about_team'
import ContentSectionThree from '@/container/services/online-exam-help/content_section_three/content_section_three'
import WhyStudentHireSection from '@/container/home/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/home/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-exam-help/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Online Course Help Service - Online Course Taker for Hire",
  description: "Top-Notch Online Course Help from Professional Experts. Enjoy Our Exclusive Plagiarism Free Online Course Help Available at the Best Prices and Round the Clock Service.",
}



const page = () => {
  return (
    <>
      <HeroSection />
      <OurServiceSection />
      <CounterSectionHome />
      <ContentSectionTwoHome />
      <AboutTeamHome />
      <ContentSectionOne />
      <ExamSection />
      <WhyStudentHireSection />
      <ContentSectionThree />
      <FeatureSectionHome />
      <TrustedByHome />
      <GetQuoteHome />
      <ClientReviewsHome />
    </>
  )
}

export default page

