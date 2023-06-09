import React from 'react'

import PropTypes from 'prop-types'

import Link1 from './link1'
import './search-bar.css'

const SearchBar = (props) => {
  return (
    <div className={`search-bar-search-bar ${props.rootClassName} `}>
      <div className="search-bar-container">
        <h3 className="search-bar-text"> Marketplace</h3>
      </div>
      <div className="search-bar-container1">
        <div className="search-bar-frame26">
          <div className="search-bar-frame23">
            <img
              alt="Frame142129"
              src="/external/frame142129-1a8.svg"
              className="search-bar-frame14"
            />
            <span className="search-bar-text1">
              <span className="">Search Products</span>
              <br className=""></br>
            </span>
          </div>
        </div>
        <Link1
          button="Filters"
          rootClassName="link1-root-class-name4"
          className=""
        ></Link1>
      </div>
    </div>
  )
}

SearchBar.defaultProps = {
  Frame14_alt: 'Frame142129',
  heading: 'Profile Marketplace',
  Frame14_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e91b99b8-d431-4fb8-8dd3-9aead7bb751d/bf8b7faf-0412-4603-ab4a-fb5985e8178d?org_if_sml=1449',
  rootClassName: '',
}

SearchBar.propTypes = {
  Frame14_alt: PropTypes.string,
  heading: PropTypes.string,
  Frame14_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SearchBar
