import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Limited-Time Deal - Top Grades, Low Price - Save up to 50% Off on Premium Take My Online Test this Week Only</>}
      description="Ready to achieve better results? Get started today and let our expert team support you every step of the way. Take the next step now—connect with us for fast, reliable, and professional quiz assistance!"
      btnText="Request a FREE quote today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
