import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Ready to Excel in Your Math Classes? Book Your Session Today and Grab an Exclusive 50% Off for All Newbies! </>}
      description="Take your learning to the next level with our dedicated tutors who ensure every topic is mastered. New signups get 10% off to start their academic journey with confidence. Don’t wait — boost your grades now!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
