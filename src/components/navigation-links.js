import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link
        button="Home"
        rootClassName="link-root-class-name1"
        className=""
      ></Link>
      <Link
        button="About"
        rootClassName="link-root-class-name"
        className=""
      ></Link>
      <Link
        button="Features"
        rootClassName="link-root-class-name2"
        className=""
      ></Link>
      <Link
        button="Team"
        rootClassName="link-root-class-name3"
        className=""
      ></Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Features',
  text: 'About',
  text3: 'Team',
  text2: 'Pricing',
  text4: 'Blog',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
