// eslint-disable-next-line no-unused-vars
import React from 'react'

const features = [
  { id: "01 |", text: "Automated Workforce Onboarding for Seamless Transitions" },
  { id: "02 |", text: "Comprehensive Lifecycle Management (365 Days) for End-to-End Workforce Visibility" },
  { id: "03 |", text: "Daily In-app Attendance Logging, Location-Tagged for Accurate Time and Attendance Tracking" },
  { id: "04 |", text: "Unified Employee Profiles for Streamlined HR Operations" },
  { id: "05 |", text: "Intuitive Self-Service Portal for Empowered Employees" },
  { id: "06 |", text: "Goal Setting & Progress Monitoring for Enhanced Productivity" },
  { id: "07 |", text: "Efficient Payroll & Benefits Administration for Reduced Administrative Burden" },
  { id: "08 |"  , text: "Streamlined Expense Claims for Simplified Financial Management" }
];

export default function Keyfeatures() {
  return (
    <>
   <div className="features-container">
      <p>Human Captila Management :</p>
      <p>Key Features at a Glance</p>
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <div className="feature-id">{feature.id}</div>
          <div className="feature-text">{feature.text}</div>
        </div>
      ))}
    </div>
    </>
  )
}
