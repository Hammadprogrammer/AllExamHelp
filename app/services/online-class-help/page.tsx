import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/online-class/hero_section/page'
import Features from '@/container/online-class/feature_section/feature_section'
import ContentSectionOne from '@/container/online-class/Content_section_one/Content_section_one'
import CallActionSection from '@/container/online-class/call_action/call_acition'
import Stats_section from '@/container/online-class/stats_section/stats_section'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Do My Class, Pay for Online Class Help, Do My Online Class",
  description: "Searching for Pay for Online Class Help? We are here to ace your grades with success. Our Do My Class experts are here to help. The service is completely private and secure.",
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
    </>
  )
}

export default page
