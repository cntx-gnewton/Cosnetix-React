import React from 'react'

import PropTypes from 'prop-types'

import './link.css'

const Link = (props) => {
  return (
    <div className={`link-container ${props.rootClassName} `}>
      <button type="button" autoFocus className="link-link button">
        {props.button}
      </button>
    </div>
  )
}

Link.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

Link.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Link
