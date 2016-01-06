
import React from 'react'
import {render} from 'react-dom'
import Router, {Route, IndexRoute} from 'react-router'
import HuanGing from './Iah/HuanGing/HuanGing'
import App from './App/App'
import 查 from './頁/查/查'
import Iong from './Iah/Iong/Iong'
import Mia from './Iah/Mia/Mia'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import './app.css'

import Debug from 'debug'
Debug.enable('ing7:*')

const root = document.getElementById('app')

//if (window.location.pathname === '/') {
  //render(<HuanGing/>, root)
//} else {
  let history = createBrowserHistory()
  render(
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={查}/>
        <Route path='k(/:k)' component={查}/>
        <Route path='iong' component={Iong}/>
        <Route path='mia' component={Mia}/>
      </Route>
    </Router>, root)
//}
