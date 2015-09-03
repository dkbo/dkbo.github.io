var NPCMessage = React.createClass({
render : function(){
      var s = this.props.s;
      return(
        <div className="chat" onClick={this.props.handleChat} style={{opacity: s.chatOpacity}}>
          {s.messageName} : {s.message}
          <ul>
            {s.chatSelectArray.map(this.props.chatArray)}
          </ul>
        </div>

        )
    }
});