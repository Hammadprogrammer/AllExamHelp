import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>In-House Team of Online Assignment Help is Here to Get You A+ Grades! Get 50% Off on All Your Assignments </>}
      description="Get high-quality, plagiarism-free work at any hour of the day with our expert assignment helpers and score highly. Order today and get a free plagiarism report, fast delivery, and a huge discount on your first order."
      btnText="Request a FREE quote today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
