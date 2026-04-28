import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/subject/philosophy-exam/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-exam-help/our_service/our_service'

import ContentSectionOne from '@/container/subject/philosophy-exam/content_section_one/Content_section_one'

import CounterSectionHome from '@/container/services/online-exam-help/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/subject/philosophy-exam/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/online-exam-help/about_team/about_team'

import WhyStudentHireSection from '@/container/home/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/home/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-exam-help/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Philosophy Exam, Online Philosophy Exam Help at Cheap Prices",
  description: "Struggling with Your Philosophy Exam? Get Expert Online Philosophy Exam Help Anytime with Trusted Tutors to Boost Your Grades and Confidence. Get Exclusive Discount.",
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
      <FeatureSectionHome />
      <TrustedByHome />
      <GetQuoteHome />
      <ClientReviewsHome />
    </>
  )
}

export default page

