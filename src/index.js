
import React from 'react'
import {render} from 'react-dom'
import Router, {Route, IndexRoute} from 'react-router'
import HuanGing from './Iah/HuanGing/HuanGing'
import App from './App/App'
import Kong from './Iah/Kong/Kong'
import Lun from './Iah/Lun/Lun'
import The from './Iah/The/The'
import Iong from './Iah/Iong/Iong'
import Mia from './Iah/Mia/Mia'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import './app.css'

import Debug from 'debug'
Debug.enable('itaigi:ABo')

const root = document.getElementById('app')

//if (window.location.pathname === '/') {
  //render(<HuanGing/>, root)
//} else {
  let history = createBrowserHistory()
  render(
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Kong}/>
        <Route path='k(/:k)' component={Kong}/>
        <Route path='l(/:k)' component={Lun}/>
        <Route path='t(/:k)' component={The}/>
        <Route path='iong' component={Iong}/>
        <Route path='mia' component={Mia}/>
      </Route>
    </Router>, root)
//}
