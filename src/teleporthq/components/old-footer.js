import React from 'react'

import PropTypes from 'prop-types'

import './old-footer.css'

const OldFooter = (props) => {
  return (
    <div className={`old-footer-footer ${props.rootClassName} `}>
      <div className="old-footer-container">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="old-footer-image"
        />
      </div>
      <div className="old-footer-container1">
        <div className="old-footer-frame4">
          <span className="old-footer-text">
            <span>Working Hours</span>
          </span>
          <span className="old-footer-text02">
            <span>
              <span>Mon to Fri: 7am - 6pm</span>
              <br></br>
              <span>Sat: 9am - 7pm</span>
              <br></br>
              <span>Sun: 9am - 6pm</span>
            </span>
          </span>
        </div>
        <div className="old-footer-frame1">
          <span className="old-footer-text09">
            <span>Explore</span>
          </span>
          <span className="old-footer-text11">
            <span>
              <span>Home</span>
              <br></br>
              <span>About Us</span>
              <br></br>
              <span>Services</span>
              <br></br>
              <span>Contact Us</span>
            </span>
          </span>
        </div>
        <div className="old-footer-frame3">
          <span className="old-footer-text20">
            <span>Keep in Touch</span>
          </span>
          <div className="old-footer-content">
            <div className="old-footer-frame11">
              <span className="old-footer-text22">
                <span>Address :</span>
              </span>
              <span className="old-footer-text24">
                <span>24A Kingston St, Los Vegas NC 28202, USA.</span>
              </span>
            </div>
            <div className="old-footer-frame2">
              <span className="old-footer-text26">
                <span>Mail :</span>
              </span>
              <span className="old-footer-text28">
                <span>support@doctors.com</span>
              </span>
            </div>
            <div className="old-footer-frame31">
              <span className="old-footer-text30">
                <span>Phone :</span>
              </span>
              <span className="old-footer-text32">
                <span>(+22) 123 - 4567 - 900</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="old-footer-copyright">
        <span className="old-footer-text34">
          <span> Copyright 2023 Cosnetix LLC</span>
        </span>
      </div>
    </div>
  )
}

OldFooter.defaultProps = {
  Bg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e91b99b8-d431-4fb8-8dd3-9aead7bb751d/5f32d2d8-f927-4d30-a691-bfd867833cf9?org_if_sml=194',
  Bg_alt: 'Bg2268',
  image_alt: 'image',
  image_src: '69e55d92-0a09-450b-8621-d6254931c624',
  image_alt1: 'image',
  image_src1: '/cosnetixlogo.jpg',
  rootClassName: '',
}

OldFooter.propTypes = {
  Bg_src: PropTypes.string,
  Bg_alt: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OldFooter
