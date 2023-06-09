import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './dna-lottie.css'

const DNALottie = (props) => {
  return (
    <div className={`dna-lottie-container ${props.rootClassName} `}>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_hg5xbabk.json"
        loop
        hover
        speed="1"
        autoplay
        background="transparent"
        className="dna-lottie-lottie-node"
      ></Player>
    </div>
  )
}

DNALottie.defaultProps = {
  rootClassName: '',
}

DNALottie.propTypes = {
  rootClassName: PropTypes.string,
}

export default DNALottie
