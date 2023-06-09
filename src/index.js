import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DesktopHome from './views/desktop-home'
import ProfilePage from './views/profile-page'
import HomePage from './views/home-page'
import Marketplace from './views/marketplace'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DesktopHome} exact path="/desktop-home" />
        <Route component={ProfilePage} exact path="/profile-page" />
        <Route component={HomePage} exact path="/" />
        <Route component={Marketplace} exact path="/marketplace" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
