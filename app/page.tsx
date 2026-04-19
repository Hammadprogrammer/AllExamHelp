import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/home/hero_section/hero_section'
import OurServiceSection from '@/container/home/our_service/our_service'
import ContentSectionOne from '@/container/home/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/home/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'
import ContentSectionTwo from '@/container/All-props-comp/content_section_two/content_section_two'
import AboutTeamHome from '@/container/home/about_team/about_team'

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
      <ContentSectionTwo />
      <AboutTeamHome />
    </>
  )
}



export default page
