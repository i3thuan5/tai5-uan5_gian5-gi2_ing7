
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('ing7:查')

class 查 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    debug('rendering ', this.props.查詢結果)
    return (
        <div className='main container'>
        <textarea id='輸入' defaultValue='漂亮a'></textarea>
        <br/>
        <input type='button' id='翻譯' value='翻譯'/>
        <br/>
        <div id='輸出'>{this.props.查詢結果['訊息']}</div>
        </div>
      )
  }
}

export default Transmit.createContainer(查, {
  queries: {
    查詢結果 ({params, 後端網址}) {
    	debug('query %o',params)
      return superagent.post(後端網址+'%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
  	    .set('Content-Type', 'application/x-www-form-urlencoded')
  		  .send({
//  	          '查詢語句': params.k,
  	          '查詢語句': '漂亮',
  	        })
          .then(({text}) => ({
  	          '查詢語句': '漂亮',
            '訊息': text,
          }))
          .catch((err) => ({
            '關鍵字': '漂亮',
            '結果': -1,
            '訊息': '發生錯誤',
            '內容': err
          }))
    }
  }
})
