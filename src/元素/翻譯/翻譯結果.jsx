
import React from 'react';
import Transmit from 'react-transmit';
import {Link} from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';
import 無合成模型 from '../合成/無合成模型';

var debug = Debug('ing7:翻譯結果');

class 翻譯結果 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props); }

  componentWillReceiveProps (nextProps) {
    if (nextProps.腔口 === this.props.腔口
      && nextProps.語句 === this.props.語句) return;
    this.props.setQueryParams(nextProps);
  }

  顯示合成結果()
  {
    let { 腔口, 合成支援腔口 } = this.props;
    if (合成支援腔口.indexOf(腔口) != -1)
    {
      return (
        <合成結果 後端網址={this.props.後端網址}
          腔口={this.props.腔口}
          語句={this.props.查詢結果.翻譯正規化結果}/>
          );
    }

    return (
      <無合成模型/>
      );
  }

  render () {
    debug(this.props.查詢結果.綜合標音);
    let 綜合標音 = this.props.查詢結果.綜合標音.map(
      (綜音,i)=>(
        <div key={i}>{Object.keys(綜音).map(
          (b,j)=>(<div key={j}>{b}:{綜音[b]}<br/></div>)
        )}</div>
      )
    );
    return (
        <div className='main container'>
          <h3>結果：</h3>
          <div id='輸出'>
            {this.props.查詢結果.翻譯正規化結果}
            {this.顯示合成結果()}
            <br/>
            {綜合標音}
          </div>
        </div>
      );
  }
}

export default Transmit.createContainer(翻譯結果, {
  queries: {
    查詢結果({ 後端網址, 腔口, 語句 }) {
      if (後端網址 === undefined)
        return Promise.resolve({
          '查詢腔口': 腔口,
          '查詢語句': 語句,
          '翻譯正規化結果': '連線中……',
          '綜合標音': [],
        });
      return superagent.post(後端網址 + '%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
          .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
              '查詢腔口': 腔口,
              '查詢語句': 語句,
            })
          .then(({ body }) => (Promise.resolve({
            '查詢腔口': 腔口,
            '查詢語句': 語句,
            '翻譯正規化結果': body.翻譯正規化結果,
            '綜合標音': body.綜合標音,
          })))
          .catch((err) => (Promise.resolve({
            '查詢腔口': 腔口,
            '查詢語句': 語句,
            '翻譯正規化結果': '發生錯誤',
            '綜合標音': [],
            '內容': err,
          })));
    },

    合成支援腔口({ 後端網址 }) {
      if (後端網址 === undefined)
        return Promise.resolve([]);
      return superagent.get(後端網址 + '語音合成支援腔口')
          .then(({ body }) => (
            body.腔口
          ))
          .catch((err) => (['發生錯誤']));
    },
  },
});
