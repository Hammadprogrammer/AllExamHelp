import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Limited-Time Bundle Discount – Save Up to 50% on Multiple Assignments! </>}
      description="Stay ahead in your classwork! Order two assignments and get a third one free — perfect for managing your workload without extra cost."
      btnText="Book Your Slot Now!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
