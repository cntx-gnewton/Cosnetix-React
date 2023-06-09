import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBar from '../components/search-bar'
import ProductCard from '../components/product-card'
import './marketplace.css'

const Marketplace = (props) => {
  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Marketplace - exported project</title>
        <meta property="og:title" content="Marketplace - exported project" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="marketplace-body">
        <SearchBar rootClassName="search-bar-root-class-name"></SearchBar>
        <ProductCard></ProductCard>
      </div>
    </div>
  )
}

export default Marketplace
