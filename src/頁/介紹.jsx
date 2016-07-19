import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 翻譯結果 from '../元素/翻譯/翻譯結果';

var debug = Debug('ing7:介紹');

export default class 介紹 extends React.Component {

  render () {
    return (
      <div className='main container'>
        <p>本專案是提供臺灣母語的資訊技術，像是正規化翻譯、語音合成等Web-based服務</p>
        <p>為了方便大家使用，每個語言獨立一頁，操作更順手</p>
        <ul>
          <li>
            <a href='http://xn--7zrr5mu7u.xn--v0qr21b.xn--kpry57d/'>臺語-寫啥物！？</a>
          </li>
          <li>
            其他語言先至<Link to='/%E8%AC%9B'>按怎講</Link>使用，如有需要，也可以到<a href='https://g0v.hackpad.com/f4rSgcFTIzz'>我想幫忙</a>
          </li>
        </ul>
      </div>
    );
  }
}
