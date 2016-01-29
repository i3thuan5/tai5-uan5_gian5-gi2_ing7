
import React from 'react';
import Transmit from 'react-transmit';
import {Link} from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';

var debug = Debug('ing7:合成結果');

class 合成結果 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props); }

  componentWillReceiveProps (nextProps) {
    if (nextProps.腔口 === this.props.腔口
      && nextProps.語句 === this.props.語句) return;
    this.props.setQueryParams(nextProps);
  }

  render () {
    let 合成音檔 = document.getElementById('合成音檔');
    if (合成音檔)
    {
      合成音檔.load();
    }

    return (
        <div className='main container'>
        <h3>合成結果：</h3>
        <audio controls autoPlay id="合成音檔">
          <source type="audio/wav"
             src={this.props.後端網址
               + '語音合成?查詢腔口=' + this.props.腔口
               + '&查詢語句=' + this.props.語句}/>
        </audio>
        </div>
      );
  }
}

export default Transmit.createContainer(合成結果, {
  queries: {
  },
});
