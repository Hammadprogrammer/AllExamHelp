import React from 'react'
import type { Metadata } from 'next'

import PrivacyPolicy from '@/container/privacy-policy/privacy-policy'

export const metadata: Metadata = {
  title: "Privacy Policy | All Exam – Secure & Confidential Services",
  description: "Read the Privacy Policy of All Exam to understand how we collect, use, and protect your personal information. Your data and confidentiality are our top priority.",
}


const page = () => {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page
