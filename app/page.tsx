import React from 'react'
import Hero from '../container/home/hero_section/hero_section'
import UniSection from '@/container/home/uni_section/uni_section'
import FeaturesSection from '@/container/home/feature_section/feature_section'
import CallAction from '@/container/home/call_action/call_acition'
import ContentSectionOne from '@/container/home/content_section_one/Content_section_one'
import StatsSection from '@/container/home/stats_section/stats_section'
import ContentSectionTwo from '@/container/home/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'

const page = () => {
  return (
   <>
   <Hero/>
   <UniSection/>
   <FeaturesSection/>
   <ContentSectionOne/>
   <CallAction/>
   <StatsSection/>
    <ContentSectionTwo/>
    <ProcessSection/>
   </>
  )
}

export default page