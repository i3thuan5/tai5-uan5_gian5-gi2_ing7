import React from 'react';
import { Link } from 'react-router';

export default class 介紹 extends React.Component {

  render () {
    return (
      <div className='main'>
        <p>臺灣言語服務用法是提供語言工具的網站，目前功能有：</p>
        <p>
          1. 文字正規化<br/>
          2. 語音合成
        </p>
        
        <p>
          計劃每個語言都有專門的網站：
        </p>
        <p>
          臺語<a href='http://寫啥物.意傳.台灣/'>寫啥物</a>
        </p>
        <p>
         客語 - 製作中
        </p>
        <p>
         族語需要語料，請大家<Link to='/%E9%AC%A5%E7%9B%B8%E5%85%B1'>幫忙</Link>
        </p>
        
      </div>
    );
  }
}
