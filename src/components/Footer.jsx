/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import bookimg1 from '../assets/fr1.webp'
import bookimg2 from '../assets/fr2.webp'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import linkenden from '../assets/linkeden.png'


// eslint-disable-next-line react/display-name
export default function () {
  return (
    <>
    <div className='footercontainer'>
        <div className="bookdemo-con">
            <div className="book-text">
                <div className="heding">
                    <h1>Book a Demo</h1>
                </div>
                <div className="sub-heding">
                    <p>Transform Your Lead</p>
                    <p>Management Today - Get</p>
                    <p>Started With <a href="#">UPONLY One!</a></p>
                    <p></p>
                </div>
                <div className="btn">
                    <button>Book Know</button>
                </div>
            </div>
            <div className="right-img">
                <img src={bookimg1} alt="bookimg1"  className='img1'/>
                <img src={bookimg2} alt="bookimg2" className='img2' />
            </div>
        </div>
        <div className="footer-con">
            <div className="footer-sec">
                <h3>Company</h3>
                <a href="#" style={{marginTop:'10px'}}>About Us</a>
                <a href="#">Career</a>
                <a href="#">Our Blogs</a>
                <a href="#">Product And Pricing</a>
            </div>
            <div className="footer-sec">
                <h3>Products</h3>
                <a href="#" style={{marginTop:'10px'}}>Privacy Policy</a>
                <a href="#">Features</a>
                <a href="#">Services</a>
                <a href="#">Sales Softwere</a>
            </div>
            <div className="footer-sec">
                <h3>Help Center</h3>
                <a href="#" style={{marginTop:'10px'}}>knowledge Base</a>
                <a href="#">Support</a>
                <a href="#">Book Demo</a>
                <a href="#">Terms & Condition</a>
            </div>
            <div className="footer-sec">
                <h3>Get In Touch</h3>
                <p style={{marginTop:'10px'}}>Address - M-0042, Ground Floor,</p>
                <p>Akshar Business Park, Plot no.3</p>
                <p>Vashi-Navi Mumbai-400793</p>
                <p>Email id - <a href="mailto:info@uponlytech.com">info@uponlytech.com</a></p>
                <p>Contact no - <a href="tel:02246052303">02246052303</a></p>
            </div>
            
        </div>
        <hr className='footer-hr'/>
        <div className="copyright-sec">
            <div className="copyright-text">
                <p>@2024 UPONLY Technologies</p>
            </div>
            <div className="social-media">
                <img src={fb} alt="facebook" />
                <img src={insta} alt="instagram" />
                <img src={linkenden} alt="linkenden" />
            </div>
        </div>
    </div>
    </>
  )
}
