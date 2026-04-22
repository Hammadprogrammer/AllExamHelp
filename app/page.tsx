import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/home/hero_section/hero_section'
import OurServiceSection from '@/container/home/our_service/our_service'
import ContentSectionOne from '@/container/home/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/home/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'
import ContentSectionTwoHome from '@/container/home/content_section_two/content_section_two'
import AboutTeamHome from '@/container/home/about_team/about_team'
import ContentSectionThree from '@/container/home/content_section_three/content_section_three'
import WhyStudentHireSection from '@/container/home/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/home/get_quote/get_quote'
import ContentSectionFour from '@/container/home/content_section_four/content_section_four'
import ContentSectionFive from '@/container/home/content_section_five/content_section_five'
import ClientReviewsHome from '@/container/home/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Take My Online Class, Pay Someone to Take My Online Class",
  description: "Stuck with Take My Online Class? Fret not, we have Got Your back. Just Request Us if You want to Pay Someone to Take My Online Class and Ace Your Online Class Grades.",
}

const page = () => {
  return (
    <>
      <HeroSection />
      <OurServiceSection />
      <ContentSectionOne />
      <CounterSectionHome />
      <ExamSection />
      <ContentSectionTwoHome />
      <AboutTeamHome />
      <WhyStudentHireSection />
      <ContentSectionThree />
    
      <FeatureSectionHome />
      <TrustedByHome />
      <ContentSectionFour />
      <GetQuoteHome />
      <ContentSectionFive />
      <ClientReviewsHome />
    </>
  )
}

export default page

