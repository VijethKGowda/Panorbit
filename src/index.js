import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Landing from './pages/landing'
import Profile from './pages/profile';

const App = () => {
  return (
    <HashRouter>
      <div className='font-pan'>
        <Router>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/profile/'>
            <Profile />
          </Route>
        </Router>
      </div>
    </HashRouter>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))