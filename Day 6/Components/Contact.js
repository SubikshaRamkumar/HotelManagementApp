import React from 'react'
import './Cssfiles/Contact.css'
// import { Link } from 'react-router-dom';
// import Navbar from '../navbar/Navbar'
import Header from './Header'
function Contact() {
  return (
    <div><Header type='noBack' home='nohome' />
      <div className='contact-us'>

        <body className='conbody'>
          <section>

            <div class="section-header">
              <div class="com">
                <h2 style={{ color: '#ADD8E6' }}>Contact Us</h2>

              </div>
            </div>

            <div class="com">
              <div class="row">

                <div class="contact-info">
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-home"></i>
                    </div>

                    <div class="contact-info-content">
                      <h4>Address</h4>
                      <p>25,Sri Prasanna avenue anaikadu<br /> Tirupur  <br />564823</p>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-phone"></i>
                    </div>

                    <div class="contact-info-content">
                      <h4>Phone</h4>
                      <p>875-344-0972</p>
                    </div>
                  </div>

                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-envelope"></i>
                    </div>

                    <div class="contact-info-content">
                      <h4>Email</h4>
                      <p>scenicsolituderesort@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div class="contact-form">
                  <form action="" id="contact-form">
                    <h2>Send Message</h2>
                    <div class="input-box">
                      <input type="text" required="true" name=""></input>
                      <p>Full Name</p>
                    </div>

                    <div class="input-box">
                      <input type="email" required="true" name=""></input>
                      <p>Email</p>
                    </div>

                    <div class="input-box">
                      <textarea required="true" name=""></textarea>
                      <p>Your Message...</p>
                    </div>

                    <div class="input-box">
                      <input type="submit" value="Send" name="" style={{ backgroundColor: '#000055 ', color: '#ADD8E6', borderRadius: '50px' }}></input>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </body>
      </div>
    </div>

  )
}

export default Contact