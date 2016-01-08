
import React from 'react'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'
import 翻譯結果 from '../../元素/翻譯結果/翻譯結果'
var Select = require('react-select');

var debug = Debug('ing7:查')

export default class 查 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
		腔口:this.props.params.khiunn || '閩南語',
    	語句:this.props.params.ku || ''
    }
  }
  換腔口 (val) {
    let 腔口=val
    this.setState({腔口})
    this.props.跳到腔口語句(腔口,this.state.語句)
  }
  跳到語句 (textarea) {
    let 語句=textarea.target.value
    this.setState({語句})
    this.props.跳到腔口語句(this.state.腔口,語句)
  }
  render () {
    let {腔口,語句} = this.state
	var options = [
	    { value: '四縣腔', label: '四縣腔' },
	    { value: '閩南語', label: '閩南語' }
	];
    return (
        <div className='main container'>
		<Select
		    name="form-field-name"
		    value={腔口}
		    options={options}
		    onChange={this.換腔口.bind(this)}
		    clearable={false}
		/>
        <textarea id='語句' defaultValue={this.props.params.ku} onKeyUp={this.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
          腔口={腔口}
          語句={語句}/>
        </div>
      )
  }
}
