import React from 'react'

import PropTypes from 'prop-types'

import './link1.css'

const Link1 = (props) => {
  return (
    <div className={`link1-container ${props.rootClassName} `}>
      <button type="button" autoFocus className="link1-link button">
        {props.button}
      </button>
    </div>
  )
}

Link1.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Link1.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Link1
