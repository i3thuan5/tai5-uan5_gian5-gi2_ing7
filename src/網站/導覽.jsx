
import React from 'react';
import { Link } from 'react-router';
import './導覽.css';

export default class ToLam extends React.Component {
  render () {
    return (
      <div className='app bar container'>
        <h1 className='title segment'>
            臺灣言語服務用法
        </h1>
        <Link to='/' className="ui button basic primary large">這是啥</Link>
        <Link to='/%E8%AC%9B' className="ui button basic primary large">按怎講</Link>
      </div>
      );
  }
}
