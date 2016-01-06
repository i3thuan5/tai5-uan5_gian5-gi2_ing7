
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:Kong')

class Kong extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    debug('rendering %o', this.props.kongData)
    return (
        <div className='main container'>
        講
          <nav className='navigation'>
            揣
          </nav>
          <div className='kong content'>
          	konn5
          </div>
          <aside className='right column'>
            <div className='ui segment'>
              <Link to='lun' params={{k: this.props.params.k}}>來討論</Link>
            </div>
          </aside>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, {
  queries: {
    kongData ({params, 後端網址}) {
      if (params === undefined || params.k === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供關鍵字'
        })
      }
      return superagent.get(後端網址 + '平臺項目列表/揣列表?關鍵字=' + params.k)
        //.then(({body}) => body['列表'][0]['外語項目編號'])
        //.then((id) => superagent.get(後端網址 + '平臺項目/看對應內容?平臺項目編號=' + id))
        .then(({body}) => ({
          '關鍵字': params.k,
          '結果': body['列表'].length,
          '內容': body
        }))
        .catch((err) => ({
          '關鍵字': params.k,
          '結果': -1,
          '訊息': '發生錯誤',
          '內容': err
        }))
    }
  }
})
