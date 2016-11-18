import React, {Component, PropTypes} from 'react';

export default class MenuNav extends Component {
	constructor(props) {
		super(props)

	}
	shouldComponentUpdate() {
		return false
	}
	render(){
    return(
      <nav id="menunav" >
        <ul>
          <li onClick={this.props.menuOpen} >選單</li>
          {/* {io.connected ?<li  onClick={this.props.hideChat}>聊天</li> : null} */}
          {/* {io.connected ? <li>Online {s.onlinePlayers} 人</li> : <li>單機</li>} */}
        </ul>
      </nav>
    )
  }
}
MenuNav.propTypes = {
	menuOpen: PropTypes.func.isRequired
}
