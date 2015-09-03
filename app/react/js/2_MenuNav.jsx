var MenuNav = React.createClass({
render : function(){
      return(
        <nav id="menunav" className="s-hide">
          <ul>  
            <li onClick={this.props.showMenu}>選單</li>
          </ul>  
        </nav>
        )
    }
});