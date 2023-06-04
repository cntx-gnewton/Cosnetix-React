import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import DesktopHome from './teleporthq/pages/desktop-home'
import ProfilePage from './teleporthq/pages/profile-page'
import HomePage from './teleporthq/pages/home-page'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route component={DesktopHome} exact path="/desktop-home" />
        <Route component={ProfilePage} exact path="/profile-page" />
        <Route component={HomePage} exact path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
