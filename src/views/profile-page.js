import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ProfileBanner from '../components/profile-banner'
import Footer from '../components/footer'
import './profile-page.css'

const ProfilePage = (props) => {
  return (
    <div className="profile-page-container">
      <Helmet>
        <title>ProfilePage - exported project</title>
        <meta property="og:title" content="ProfilePage - exported project" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <ProfileBanner></ProfileBanner>
      <div className="profile-page-container1">
        <div className="profile-page-points">
          <div className="profile-page-frame3">
            <div className="profile-page-text">
              <div className="profile-page-text01">
                <span className="profile-page-text02">
                  Complete Questionnaire 
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <span className="profile-page-text03">
                Take our Phenotypic SkinCare Diagnostic
              </span>
            </div>
            <button type="button" className="button profile-page-button">
              Questionnaire
            </button>
            <img
              alt="Line2303"
              src="/external/line2303-trnr.svg"
              className="profile-page-line"
            />
          </div>
          <div className="profile-page-frame31">
            <div className="profile-page-text04">
              <div className="profile-page-text05">
                <span className="profile-page-text06">
                  Upload Your Genetics
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <span className="profile-page-text07">
                <span>Use your DNA report from any previous genetic test</span>
              </span>
            </div>
            <button type="button" className="button profile-page-button1">
              Upload DNA File
            </button>
            <img
              alt="Line2303"
              src="/external/line2303-trnr.svg"
              className="profile-page-line1"
            />
          </div>
          <div className="profile-page-frame4">
            <div className="profile-page-text09">
              <div className="profile-page-text10">
                <span className="profile-page-text11">
                  <span>
                    Get Your Recommendations!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <span className="profile-page-text13">
                <span>
                  We recommend a wide range of current skincare products based
                  on your genetics and skin profile
                </span>
              </span>
            </div>
          </div>
          <img
            alt="Line2304"
            src="/external/line2304-461t.svg"
            className="profile-page-line2"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default ProfilePage
