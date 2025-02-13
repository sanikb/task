// eslint-disable-next-line no-unused-vars
import React from 'react'
import humanimg from '../assets/unlockimg.png'
import human1 from '../assets/human1.png'
import human2 from '../assets/human2.png'

export default function HumanCapital() {
    return (
        <>
            <div className='human-container'>
                <div className="main-title">
                    <p>Unlocking the Power Of Human Capital</p>
                    <p>Management</p>
                </div>
                <div className="humam-content">
                    <div className="human-text-content">
                        <p>Human Capital Management (HCM) is a strategic
                            workforce management approach to developing
                            and managing an organization&apos;s talent pool,
                            focusing on maximizing employee value and
                            contributions towards the success of your
                            organization. HCM encompasses various aspects,
                            including recruitment, onboarding, talent
                            management, payroll management, benefits
                            administration, time and attendance tracking, and
                            separation, all aimed at enhancing productivity,
                            employee satisfaction, and overall business
                            performance.
                            U</p>
                    </div>
                    <div className="human-img-con">
                        <img src={humanimg} alt="" />
                    </div>
                </div>
            </div>
            <div className="uponly-goals">
                <div className="goal-head">
                    <h1>UPONLY Goals</h1>
                </div>
                <div className="goal-container">
                    <div className="goal-box"><img src={human1} alt="goal-img" /></div>
                    <div className="goal-box"><img src={human2} alt="goal-img" /></div>
                    <div className="goal-box"><img src={human1} alt="goal-img" /></div>
                </div>

            </div>
        </>
    )
}
