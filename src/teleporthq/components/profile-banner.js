import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './profile-banner.css'

const ProfileBanner = (props) => {
  return (
    <div className="profile-banner-banner">
      <h1 className="profile-banner-text">{props.heading}</h1>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_hg5xbabk.json"
        loop
        hover
        speed="1"
        autoplay
        background="transparent"
        className="profile-banner-lottie-node"
      ></Player>
      <span className="profile-banner-text1">
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
  button: 'Get Started',
  button1: 'Learn More',
  heading: 'Congratulations!',
}

ProfileBanner.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
  heading: PropTypes.string,
}

export default ProfileBanner
