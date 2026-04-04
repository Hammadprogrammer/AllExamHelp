import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Need Fast Answers? Chat With Our Tutors Anytime and Get 50% Off Your Initial Booking. Offer Valid for New Students Only!
</>}
      description="Get instant solutions for homework, quizzes, and presentations with our responsive tutors. Whether it’s a tricky problem or a last-minute assignment, we’ve got you covered. New students enjoy 25% off their first booking - grab this limited offer now!"
      btnText="Request a FREE quote today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
