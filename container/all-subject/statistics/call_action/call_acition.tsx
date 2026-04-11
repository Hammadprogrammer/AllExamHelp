import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Flat 50% Off Your Next Assignment this Week Only – Grab it Now! </>}
      description="Don’t miss out on this limited-time offer! Get 50% off your next order and access reliable, professional online Statistics class help for less."
      btnText='Request a free quote now!'
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
