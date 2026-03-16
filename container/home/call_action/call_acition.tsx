import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Hire Someone to Take My Class Now and Grab a Flat <span>50% Off</span>on Your First Order</>}
      description="Register now and book your online consultation for your online class, exam, quiz and assignments with our real-time experts today! Your online class success awaits."
      btnText="Request a FREE quote now!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
