import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard3 from './feature-card3'
import './features.css'

const Features = (props) => {
  return (
    <div className={`features-container ${props.rootClassName} `}>
      <FeatureCard3
        title="Personalized "
        description="Our recommendations are catered to your specific phenotypic and genetic traits. "
        rootClassName="rootClassName4"
        className=""
      ></FeatureCard3>
      <FeatureCard3
        title="Evidence-Based"
        description="Cosnetix uses both phenotypic traits and genetics to back it’s skincare recommendations."
        rootClassName="rootClassName3"
        className=""
      ></FeatureCard3>
      <FeatureCard3
        title="Evidence-Based"
        description="Cosnetix uses both phenotypic traits and genetics to back it’s skincare recommendations."
        rootClassName="rootClassName7"
        className=""
      ></FeatureCard3>
      <FeatureCard3
        title="Easy-to-Use"
        description="Our service consists of three easy steps. Take our 3 minute skincare diagnostic, upload your genetics, and get your recommendations!"
        rootClassName="rootClassName8"
        className=""
      ></FeatureCard3>
      <FeatureCard3
        title="Time Efficiency"
        description="Rather than wasting time doing your own research on what products to buy, we provide you with personalized recommendations instantly!"
        rootClassName="feature-card3-root-class-name1"
        className=""
      ></FeatureCard3>
      <FeatureCard3
        title="Choices"
        description="We provide you with multiple current skincare product recommendations across the market."
        rootClassName="rootClassName5"
        className=""
      ></FeatureCard3>
    </div>
  )
}

Features.defaultProps = {
  rootClassName: '',
}

Features.propTypes = {
  rootClassName: PropTypes.string,
}

export default Features
