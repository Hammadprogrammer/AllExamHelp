import React from 'react'
import RefundPolicy from '@/container/Refund-Policy/Refund-Policy'
import Breadcrumb from '@/container/about-us/header/header'

export const metadata = {
  title: "Refund Policy | All Exam – Money Back Guarantee",
  description: "Review All Exam’s Refund Policy to learn about eligibility, terms, and conditions for refunds. We ensure fair policies and customer satisfaction for our services.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title="Refund Policy" currentPage="Refund Policy" />
      <RefundPolicy/>
    </div>
  )
}

export default page