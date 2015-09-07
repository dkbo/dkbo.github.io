var MenuNav = React.createClass({
	render : function(){
		var s = this.props.s;
      return(
        <nav id="menunav" >
          <ul>  
            <li onClick={this.props.showMenu}>選單</li>
            {io.connected ?<li  onClick={this.props.hideChat}>聊天</li> : null}
            {io.connected ? <li>Online {s.onlinePlayers} 人</li> : <li>單機</li>}
          </ul>  
        </nav>
        )
    }
});