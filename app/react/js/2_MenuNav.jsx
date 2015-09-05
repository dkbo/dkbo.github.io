var MenuNav = React.createClass({
	render : function(){
		var s = this.props.s;
      return(
        <nav id="menunav" >
          <ul>  
            <li  className="s-hide" onClick={this.props.showMenu}>選單</li>
            {io.connected ? <li>Online {s.onlinePlayers}</li> : <li>單機</li>}
          </ul>  
        </nav>
        )
    }
});