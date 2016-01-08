
import React from 'react'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'
import 翻譯結果 from '../../元素/翻譯結果/翻譯結果'

var debug = Debug('ing7:查')

export default class 查 extends React.Component {

  render () {
    debug('rendering ')
    return (
        <div className='main container'>
        <textarea id='輸入' defaultValue='漂亮a' onKeyUp={this.props.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
          語句={this.props.params.k}/>
        </div>
      )
  }
}
