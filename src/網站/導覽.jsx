
import React from 'react';
import { Link } from 'react-router';
import './導覽.css';

export default class ToLam extends React.Component {
  render () {
    return (
      <header className='app header'>
        <div className='app bar container'>
          <h1 className='title segment'>
            <Link to='/'>
              臺灣言語服務用法
            </Link>
          </h1>
          <ul className='ui main menu'>
            <li className='item'><Link to='/%E4%BB%8B%E7%B4%B9'>介紹</Link></li>
            <li className='item'><Link to='/%E8%AC%9B'>功能展示</Link></li>
            <li className='item'><Link to='/%E9%AC%A5%E7%9B%B8%E5%85%B1'>我想幫忙</Link></li>
          </ul>
          <div></div>
        </div>
      </header>
      );
  }
}
