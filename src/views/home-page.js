import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import WhyCosnetix from '../components/why-cosnetix'
import Features from '../components/features'
import NewFooter from '../components/new-footer'
import ProfileBanner from '../components/profile-banner'
import Footer from '../components/footer'
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
        <WhyCosnetix rootClassName="why-cosnetix-root-class-name"></WhyCosnetix>
        <Features rootClassName="features-root-class-name"></Features>
      </div>
      <div id="start" className="home-page-get-started">
        <div className="home-page-container2">
          <h1 className="home-page-text01">
            Magnificent things are very simple
          </h1>
          <span className="home-page-text02">
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
          className="home-page-image"
        />
      </div>
      <NewFooter rootClassName="new-footer-root-class-name"></NewFooter>
      <div className="home-page-container3">
        <Header rootClassName="header-root-class-name1"></Header>
        <ProfileBanner></ProfileBanner>
        <div className="home-page-container4">
          <div className="home-page-points">
            <div className="home-page-frame3">
              <div className="home-page-text09">
                <div className="home-page-text10">
                  <span className="home-page-text11">
                    Complete Questionnaire 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <span className="home-page-text12">
                  Take our Phenotypic SkinCare Diagnostic
                </span>
              </div>
              <button type="button" className="button home-page-button3">
                Questionnaire
              </button>
              <img
                alt="Line2303"
                src="/external/line2303-trnr.svg"
                className="home-page-line"
              />
            </div>
            <div>
              <div className="home-page-text13">
                <div className="home-page-text14">
                  <span className="home-page-text15">
                    Upload Your Genetics
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <span className="home-page-text16">
                  <span>
                    Use your DNA report from any previous genetic test
                  </span>
                </span>
              </div>
              <button type="button" className="button home-page-button4">
                Upload DNA File
              </button>
              <img
                alt="Line2303"
                src="/external/line2303-trnr.svg"
                className="home-page-line1"
              />
            </div>
            <div className="home-page-frame4">
              <div className="home-page-text18">
                <div className="home-page-text19">
                  <span className="home-page-text20">
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
                <span className="home-page-text22">
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
              className="home-page-line2"
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <div className="home-page-blueprint-navigation01">
        <div className="home-page-frame31 home-page-frame31">
          <div className="home-page-frame20">
            <span className="home-page-text24">
              <span>Heading</span>
            </span>
            <div className="home-page-frame19">
              <div className="home-page-frame18">
                <div className="home-page-frame1716">
                  <div className="home-page-iconscheckmarkcircle">
                    <span className="home-page-text26">
                      <span>icon</span>
                    </span>
                  </div>
                </div>
                <span className="home-page-text28">
                  <span>Lorem Ipsum</span>
                </span>
              </div>
              <div className="home-page-frame17">
                <div className="home-page-frame17161">
                  <div className="home-page-iconscheckmarkcircle1">
                    <span className="home-page-text30">
                      <span>icon</span>
                    </span>
                  </div>
                </div>
                <span className="home-page-text32">
                  <span>Lorem Ipsum</span>
                </span>
              </div>
              <div className="home-page-frame16">
                <div className="home-page-frame17162">
                  <div className="home-page-iconscheckmarkcircle2">
                    <span className="home-page-text34">
                      <span>icon</span>
                    </span>
                  </div>
                </div>
                <span className="home-page-text36">
                  <span>Lorem Ipsum</span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="Line2120"
            src="/external/line2120-7z4s.svg"
            className="home-page-line3"
          />
          <div className="home-page-frame26">
            <div className="home-page-frame22">
              <span className="home-page-text38">
                <span>Sub-Heading</span>
              </span>
              <span className="home-page-text40">
                <span>Sub-Heading</span>
              </span>
              <span className="home-page-text42">
                <span>
                  Sub-Heading
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="home-page-text44">
                <span>Sub-Heading</span>
              </span>
              <span className="home-page-text46">
                <span>Sub-Heading</span>
              </span>
            </div>
            <div className="home-page-frame23">
              <img alt="Frame142129" src="/external/Frame142129-1a81.svg" />
              <span className="home-page-text48">
                <span>Lorem Ipsum</span>
              </span>
            </div>
          </div>
          <img
            alt="Line2133"
            src="/external/line2133-wlo.svg"
            className="home-page-line4"
          />
        </div>
        <div className="home-page-frame28">
          <div className="home-page-frame27">
            <span className="home-page-text50">
              <span>Sub-Heading</span>
            </span>
            <span className="home-page-text52">
              <span>Sub-Heading</span>
            </span>
            <span className="home-page-text54">
              <span>Sub-Heading</span>
            </span>
          </div>
          <div className="home-page-frame10">
            <div className="home-page-frame8">
              <img
                alt="Frame92141"
                src="/external/frame92141-93wd.svg"
                className="home-page-frame9"
              />
            </div>
            <div className="home-page-frame7">
              <div className="home-page-frame5">
                <div className="home-page-frame41">
                  <img
                    alt="Frame8113322147"
                    src="/external/frame8113322147-urim.svg"
                    className="home-page-frame811332"
                  />
                  <div className="home-page-frame1">
                    <span className="home-page-text56">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text58">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
                <div className="home-page-frame32">
                  <img
                    alt="Frame8113322153"
                    src="/external/frame8113322153-l4id.svg"
                    className="home-page-frame8113321"
                  />
                  <div className="home-page-frame11">
                    <span className="home-page-text60">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text62">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
                <div className="home-page-frame2">
                  <img
                    alt="Frame8113322159"
                    src="/external/frame8113322159-evua.svg"
                    className="home-page-frame8113322"
                  />
                  <div className="home-page-frame12">
                    <span className="home-page-text64">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text66">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-page-frame6">
                <div className="home-page-frame42">
                  <img
                    alt="Frame8113322166"
                    src="/external/frame8113322166-wjpm.svg"
                    className="home-page-frame8113323"
                  />
                  <div className="home-page-frame13">
                    <span className="home-page-text68">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text70">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
                <div className="home-page-frame33">
                  <img
                    alt="Frame8113322172"
                    src="/external/frame8113322172-lc64.svg"
                    className="home-page-frame8113324"
                  />
                  <div className="home-page-frame14 home-page-frame14">
                    <span className="home-page-text72">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text74">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
                <div className="home-page-frame21">
                  <img
                    alt="Frame8113322178"
                    src="/external/frame8113322178-a0is.svg"
                    className="home-page-frame8113325"
                  />
                  <div className="home-page-frame15">
                    <span className="home-page-text76">
                      <span>Heading</span>
                    </span>
                    <span className="home-page-text78">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
