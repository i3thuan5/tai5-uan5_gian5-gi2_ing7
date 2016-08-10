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
        <p>本專案是提供語言工具，像是文字正規化、語音合成等Web-based服務</p>
        <p>為了方便大家使用，預計每個語言都有專門的網站，操作更順手</p>
        <ul>
          <li>
            <a href='http://xn--7zrr5mu7u.xn--v0qr21b.xn--kpry57d/'>寫啥物-臺語發音網站</a>
            <a href='http://xn--p8s96olm5c.xn--v0qr21b.xn--kpry57d'>鬥拍字-臺語漢字臺羅產生工具</a>
          </li>
          <li>
            其他語言先至<Link to='/%E8%AC%9B'>按怎講</Link>使用，也歡迎到<a href='https://g0v.hackpad.com/f4rSgcFTIzz'>我想幫忙</a>提供意見
          </li>
        </ul>
      </div>
    );
  }
}
