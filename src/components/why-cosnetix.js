import React from 'react'

import PropTypes from 'prop-types'

import './why-cosnetix.css'

const WhyCosnetix = (props) => {
  return (
    <div className={`why-cosnetix-container ${props.rootClassName} `}>
      <h1 className="why-cosnetix-text">{props.heading}</h1>
      <span className="why-cosnetix-text1">{props.text}</span>
    </div>
  )
}

WhyCosnetix.defaultProps = {
  heading: 'Why Cosnetix?',
  rootClassName: '',
  text: 'Our service offers personalized skincare recommendations based on your genetic makeup, supported by scientific evidence. This approach eliminates the need for trial and error when trying out ineffective products, saving you both time and money. Furthermore, we customize our recommendations to meet your specific requirements, allowing us to suggest a diverse range of skincare products, regardless of brand.',
}

WhyCosnetix.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default WhyCosnetix
