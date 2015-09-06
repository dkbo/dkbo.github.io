var PlayerChat = React.createClass({
getInitialState : function(){
  return {
    playerChatOpacity : 1,
    chatMsg : [],
    chatBoxTop : 0
  }
},
componentDidMount : function(){
  if(io.connected){
    io.on('player chat',this.playerChat)
  }
},
playerChat : function(msg){
  let m = this.state.chatMsg;
  m.push(msg)
  this.setState({chatMsg : m });
  let mh = this.refs.messageBox.clientHeight;
  let ch = this.refs.chatBox.clientHeight;
  let top = mh -ch > 0 ? -(mh-ch) : 0;
  this.setState({chatBoxTop: top});
},
chatMsgShow : function(msg){
  return <li>{msg}</li>
},
cancelMessage : function(){
  this.refs.inputMessage.value = '';
  handleControl();
},
enterMessage : function(){
  let x = this.refs.inputMessage.value; 
  io.emit('enter message',x);
  this.refs.inputMessage.value = '';
},
handleKeyDown : function(e){
  init.chatInputSelect=true;
  switch(e.keyCode){
    case 27:
      this.cancelMessage();
      break;
    case 13:
      this.enterMessage();
      break;

  }
},
render : function(){
      return(
        <div id="PlayerChat" style={{opacity: this.state.playerChatOpacity}}>
          <div ref="chatBox" id="chatBox">
            <ul style={transform("translateY("+this.state.chatBoxTop+"px)")} ref="messageBox">
              {this.state.chatMsg.map(this.chatMsgShow)}
            </ul>
           </div> 
          <input ref="inputMessage" onKeyDown={this.handleKeyDown}  />
        </div>
        )
    }
});

