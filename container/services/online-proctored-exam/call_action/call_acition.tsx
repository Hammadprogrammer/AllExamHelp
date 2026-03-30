import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Register now for take my online proctored exam for me! Book now and Grab 25% Off at your first purchase!</>}
      description="If a proctored exam is pushing you off your work, fret not, just sign up with us and improve your grades with a hassle-free experience. Talk to our experts now, book your order and enjoy your day out!"
      btnText="Request a FREE quote today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
