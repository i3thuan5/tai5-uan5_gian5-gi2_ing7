
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('ing7:翻譯結果')

class 翻譯結果 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.腔口 === this.props.腔口
      && nextProps.語句 === this.props.語句) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    debug('rendering ', this.props.查詢結果)
    return (
        <div className='main container'>
        <h3>結果：</h3>
        <div id='輸出'>{this.props.查詢結果['訊息']}</div>
        </div>
      )
  }
}

export default Transmit.createContainer(翻譯結果, {
  queries: {
    查詢結果 ({後端網址, 腔口, 語句}) {
      if (後端網址===undefined)
        return Promise.resolve({
  	        '查詢腔口': 腔口,
  	        '查詢語句': 語句,
            '訊息': '連線中……',
          })
      return superagent.post(後端網址+'%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
  	    .set('Content-Type', 'application/x-www-form-urlencoded')
  		  .send({
  	          '查詢腔口': 腔口,
  	          '查詢語句': 語句,
  	        })
          .then(({text}) => ({
  	          '查詢腔口': 腔口,
  	          '查詢語句': 語句,
            '訊息': text,
          }))
          .catch((err) => ({
  	          '查詢腔口': 腔口,
  	          '查詢語句': 語句,
            '訊息': '發生錯誤',
            '內容': err
          }))
    }
  }
})
