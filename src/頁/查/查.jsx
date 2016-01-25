
import React from 'react'
import {Link} from 'react-router'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'
import 翻譯結果 from '../../元素/翻譯/翻譯結果'
import 合成結果 from '../../元素/合成/合成結果'

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
    	語句:this.props.params.ku || '你好嗎？我很好！',
    	翻譯正規化結果: ''
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
  更新翻譯正規化結果 (翻譯正規化結果) {
    this.setState({翻譯正規化結果})
  }
  render () {
    let {腔口, 語句} = this.state
	let 全部腔口 = this.props.翻譯支援腔口.map(
	  (腔口)=>(
	    <option key={腔口} value={腔口}>{腔口}</option>
		)
	)
	return (
        <div className='main container'>
		<select onChange={this.換腔口.bind(this)} value={腔口}>
		{全部腔口}
		</select>
        <textarea id='語句' defaultValue={語句} onKeyUp={this.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
          腔口={腔口}
          語句={語句}
          更新翻譯正規化結果={this.props.更新翻譯正規化結果}/>
        {this.顯示合成結果()}
        </div>
      )
  }
  顯示合成結果()
  {
    let {腔口}=this.state
    let {合成支援腔口}=this.props
	debug(合成支援腔口)
	debug(腔口)
	debug(合成支援腔口.indexOf(腔口))
    if(合成支援腔口.indexOf(腔口)!=-1)
    {
      return (
        <合成結果 後端網址={this.props.後端網址}
          腔口={腔口}
          語句={this.state.翻譯正規化結果}/>
          )
     }
    return (
      <h3>QQ</h3>
      )
  }
}


export default Transmit.createContainer(查, {
  queries: {
    翻譯支援腔口 ({後端網址}) {
      if (後端網址===undefined)
        return Promise.resolve([])
      return superagent.get(後端網址+'正規化翻譯支援腔口')
          .then(({body}) => (
			body.腔口
		  ))
          .catch((err) => (['發生錯誤']))
    },
    合成支援腔口 ({後端網址}) {
      if (後端網址===undefined)
        return Promise.resolve([])
      return superagent.get(後端網址+'語音合成支援腔口')
          .then(({body}) => (
			body.腔口
		  ))
          .catch((err) => (['發生錯誤']))
    }
  
  }
})
