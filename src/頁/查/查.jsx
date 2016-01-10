
import React from 'react'
import {Link} from 'react-router'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'
import 翻譯結果 from '../../元素/翻譯結果/翻譯結果'
var Select = require('react-select');

var debug = Debug('ing7:查')

class 查 extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址) return
    this.props.setQueryParams(nextProps)
  }
  
  constructor (props) {
    super(props)
    this.state = {
		腔口:this.props.params.khiunn || '閩南語',
    	語句:this.props.params.ku || ''
    }
  }
  換腔口 (_select) {
    let 腔口=_select.target.value
    this.setState({腔口})
    this.props.跳到腔口語句(腔口,this.state.語句)
  }
  跳到語句 (textarea) {
    let 語句=textarea.target.value
    this.setState({語句})
    this.props.跳到腔口語句(this.state.腔口,語句)
  }
  render () {
    debug ('22 %o',this.props.支援腔口)
    let {腔口,語句} = this.state
	let 全部腔口 = [];
    let {支援腔口}=this.props
    支援腔口.forEach(
	  (腔口)=>(全部腔口.push(
	    <option value={腔口}>{腔口}</option>
		))
	)
	return (
        <div className='main container'>
		<select onChange={this.換腔口.bind(this)} value={腔口}>
		{全部腔口}
		</select>
        <textarea id='語句' defaultValue={this.props.params.ku} onKeyUp={this.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
          腔口={腔口}
          語句={語句}/>
        </div>
      )
  }
}


export default Transmit.createContainer(查, {
  queries: {
      支援腔口 ({後端網址}) {
    	debug('query 22',)
      return superagent.get(後端網址+'正規化翻譯支援腔口')
          .then(({body}) => (
			body.腔口
		  ))
          .catch((err) => ({
            '訊息': '發生錯誤'
          }))
    }
  
  }
})
