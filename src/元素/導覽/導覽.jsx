
import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import './導覽.css';

class ToLam extends React.Component {
  render () {
    return (
      <div className='app bar container'>
        <h1 className='title segment'>
          <Link to='/'>
            寫啥物！？臺灣言語服務用法
          </Link>
        </h1>
        <ul className='ui main menu'>
          <li className='item'><Link to='/'>按怎講</Link></li>
        </ul>
        <div></div>
      </div>
      );
  }
}

export default Transmit.createContainer(ToLam, { query: {} });
