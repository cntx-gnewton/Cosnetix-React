import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div id="prduct" className="product-card-product-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="product-card-image"
      />
      <div className="product-card-container">
        <div className="product-card-container1">
          <h3 className="product-card-text">
            <span>Product Name</span>
            <br></br>
          </h3>
          <strong className="product-card-text3">
            <span>Product Type</span>
            <br></br>
          </strong>
        </div>
        <span className="product-card-text6">
          <span>Product Description</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

ProductCard.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default ProductCard
