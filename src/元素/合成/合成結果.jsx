
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('ing7:合成結果')
var base64 = require('base64-js')

class 合成結果 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.腔口 === this.props.腔口
      && nextProps.語句 === this.props.語句) return
    this.props.setQueryParams(nextProps)
  }

  render () {
  //  debug((this.props.查詢結果['合成結果']))
  //  debug(new Buffer(this.props.查詢結果['合成結果'],'binary').toString('base64'))
    return (
        <div className='main container'>
        <h3>合成結果：</h3>
		<audio controls>
		  <source type="audio/wav"
	  	   src={this.props.後端網址
	  	     +'語音合成?查詢腔口='+this.props.腔口
	  	     +'&查詢語句='+this.props.語句}/>
		</audio> 
        <h3>合成結果：</h3>
		<audio controls>
		  <source type="audio/wav"
	  	   src={'data:audio/wav;base64,'
	  	   +new Buffer(this.props.查詢結果['合成結果']).toString('base64') }/>
		  Your browser does not support the audio element.
		</audio> 
        </div>
      )
  }
}

export default Transmit.createContainer(合成結果, {
  queries: {
    查詢結果 ({後端網址, 腔口, 翻譯正規化結果}) {
      if (後端網址===undefined)
        return Promise.resolve({
  	          '狀態': '連線中……',
          })
      return superagent.post(後端網址+'語音合成')
  	    .set('Content-Type', 'application/x-www-form-urlencoded')
  		  .send({
  	          '查詢腔口': 腔口,
  	          '查詢語句': 翻譯正規化結果,
  	        })
          .then(({text}) => ({
  	          '狀態': '成功',
  	          '查詢腔口': 腔口,
  	          '查詢語句': 翻譯正規化結果,
              '合成結果': text,
          }))
          .catch((err) => ({
  	          '狀態': '失敗',
  	          '查詢腔口': 腔口,
  	          '查詢語句': 翻譯正規化結果,
              '合成結果': '',
          }))
    }
  }
})
