
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 查 from './頁/查/查';
import 介紹 from './頁/介紹/介紹';
import 鬥相共 from './頁/鬥相共';
import './app.css';

import Debug from 'debug';
Debug.enable('ing7:*');

const root = document.getElementById('app');
let history = browserHistory;

render(
  <Router history={history}>
          <Route path='/' component={網站 }>
              <IndexRoute component={介紹}/>
              <Route path='%E4%BB%8B%E7%B4%B9' component={介紹}/>
              <Route path='%E9%AC%A5%E7%9B%B8%E5%85%B1' component={鬥相共}/>
              //'%E8%AC%9B' == '講'
              <Route path='%E8%AC%9B(/:khiunn/:ku)' component={查}/>
              <Route path='%E8%AC%9B(/:khiunn)' component={查}/>
              <Route path='%E8%AC%9B' component={查}/>
          </Route>
      </Router>,
      root
);
