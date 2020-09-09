import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter as Router, Route, HashRouter, Switch } from "react-router-dom";

import Landing from './pages/landing'
import Profile from './pages/profile';

const App = () => {
  return (
    <HashRouter>
      <div className='font-pan'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/profile/:id'>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    </HashRouter>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))