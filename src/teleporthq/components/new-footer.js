import React from 'react'

import PropTypes from 'prop-types'

import Footer from './footer'
import './new-footer.css'

const NewFooter = (props) => {
  return (
    <div className={`new-footer-container ${props.rootClassName} `}>
      <Footer className=""></Footer>
    </div>
  )
}

NewFooter.defaultProps = {
  rootClassName: '',
}

NewFooter.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewFooter
