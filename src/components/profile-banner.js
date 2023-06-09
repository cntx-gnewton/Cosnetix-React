import React from 'react'

import PropTypes from 'prop-types'

import DNALottie from './dna-lottie'
import './profile-banner.css'

const ProfileBanner = (props) => {
  return (
    <div className={`profile-banner-banner ${props.rootClassName} `}>
      <DNALottie></DNALottie>
      <span className="profile-banner-text">
        <span>
          Congratulations on taking the first step towards a healthier you! We
          are excited to help you on your journey
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
    </div>
  )
}

ProfileBanner.defaultProps = {
  rootClassName: '',
  button: 'Get Started',
  button1: 'Learn More',
  heading: 'Congratulations!',
}

ProfileBanner.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  heading: PropTypes.string,
}

export default ProfileBanner
