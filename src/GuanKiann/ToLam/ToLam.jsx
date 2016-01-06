
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import './ToLam.css'

class ToLam extends React.Component {
  render () {
    return (
      <div className='app bar container'>
        <h1 className='title segment'>
          <Link to='app'>
            <i className='logo'>
              <u>i taigi</u>
            </i>
          </Link>
        </h1>
        <ul className='ui main menu'>
          <li className='item'>
            <Link to='/k' params={{k: ''}}>怎樣講</Link>
          </li>
          <li className='item'><Link to='/l'>用</Link></li>
          <li className='item'><Link to='/t'>用</Link></li>
          <li className='item'><Link to='/iong'>用</Link></li>
          <li className='item'><Link to='/mia'>用</Link></li>
        </ul>
        <div></div>
      </div>
      )
  }
}

export default Transmit.createContainer(ToLam, { query: {} })
