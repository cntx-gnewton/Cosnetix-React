import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import WhyCosnetix from '../components/why-cosnetix'
import Features from '../components/features'
import NewFooter from '../components/new-footer'
import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <Header></Header>
      <div id="home" className="home-page-hero">
        <h1 className="home-page-text">
          YOUR DNA, YOUR PERFECT SKINCARE MATCH
        </h1>
        <button className="home-page-button button">Get Started</button>
      </div>
      <div className="home-page-container1">
        <img alt="image" src="/dnabody.jpeg" className="home-page-image" />
        <WhyCosnetix rootClassName="why-cosnetix-root-class-name"></WhyCosnetix>
        <Features rootClassName="features-root-class-name"></Features>
      </div>
      <div id="start" className="home-page-get-started">
        <div className="home-page-container2">
          <h1 className="home-page-text1">
            Magnificent things are very simple
          </h1>
          <span className="home-page-text2">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-page-btn-group">
            <button className="home-page-button1 button">Get Started</button>
            <button className="home-page-button2 button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;w=400"
          className="home-page-image1"
        />
      </div>
      <NewFooter rootClassName="new-footer-root-class-name"></NewFooter>
    </div>
  )
}

export default HomePage
