import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './pages/landing'
import Profile from './pages/profile';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/profile/'>
          <Profile />
        </Route>
      </Router>
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))