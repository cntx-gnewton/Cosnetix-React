import React from 'react'

import PropTypes from 'prop-types'

import './susi-buttons.css'

const SusiButtons = (props) => {
  return (
    <div className="susi-buttons-btn-group">
      <button type="button" className="susi-buttons-login button">
        {props.Login}
      </button>
      <button type="button" autoFocus className="susi-buttons-register button">
        {props.Register}
      </button>
    </div>
  )
}

SusiButtons.defaultProps = {
  Login: 'Login',
  Register: 'Register',
}

SusiButtons.propTypes = {
  Login: PropTypes.string,
  Register: PropTypes.string,
}

export default SusiButtons
