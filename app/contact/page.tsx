import React from 'react'
import Breadcrumb from '@/container/about-us/header/header'
import ContactInformation from '@/container/contact/contactinformation/contactinformation'
import ContactForm from '@/container/contact/contact_from/contact_from'

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