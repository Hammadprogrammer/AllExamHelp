import React from 'react'
import { Metadata } from 'next'
import Breadcrumb from '@/container/about-us/header/header'
import ContactInformation from '@/container/contact/contactinformation/contactinformation'
import ContactForm from '@/container/contact/contact_from/contact_from'

export const metadata: Metadata = {
  title: 'Contact Us | Fast Support and Expert Guidance Available 24/7',
  description: 'Have questions or need assistance? Contact our support team anytime. We’re available 24/7 to provide fast, reliable, and stress-free help.',
}

const page = () => {
  return (
    <div>
      <Breadcrumb title="Contact Us" currentPage="Contact Us" />
      <ContactInformation />
      <ContactForm />
    </div>
  )
}

export default page