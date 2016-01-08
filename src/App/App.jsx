import React from 'react'
import Transmit from 'react-transmit'
import Router from 'react-router'

import ToLam from '../GuanKiann/ToLam/ToLam'

import './App.css'

class App extends React.Component {

  constructor () {
    super()
  }

  跳到語句 (textarea) {
    console.log(this.props.history)
    this.props.history.replaceState(null, '/k/閩南語/' + textarea.target.value)
  }

  render () {
    return (
        <div className='app background'>
          <header className='app header'>
            <ToLam/>
          </header>
          {React.cloneElement(this.props.children, 
            {跳到語句: this.跳到語句.bind(this), 後端網址: 'http://140.109.16.144/'}
          )}
          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_ing7/blob/master/LICENSE'>授權條款</a></li>
              <li className='item'><a href='https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_ing7'>GitHub</a></li>
            </ul>
          </footer>
        </div>
      )
  }
}

export default Transmit.createContainer(App, { queries: {} })
