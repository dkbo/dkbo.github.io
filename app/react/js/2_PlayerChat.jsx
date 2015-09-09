const PlayerChat = React.createClass({
  getInitialState(){
    return {
      chatMsg : [],
      chatBoxTop : 0
    }
  },
  componentDidMount(){
    if(io.connected){
      io.on('player chat',this.playerChat)
    }
  },
  playerChat(msg){
    let m = this.state.chatMsg;
    m.push(msg)
    this.setState({chatMsg : m });
    let mh = this.refs.messageBox.clientHeight;
    let ch = this.refs.chatBox.clientHeight;
    let top = mh -ch > 0 ? -(mh-ch) : 0;
    this.setState({chatBoxTop: top});
  },
  chatMsgShow(msg){
    return <li><mark>{msg.name}</mark> {msg.val}</li>
  },
  cancelMessage(){
    this.refs.inputMessage.value = '';
    this.refs.inputMessage.blur();
    handleControl();
  },
  enterMessage(){
    let x = this.refs.inputMessage.value.trim();
    if(!x){
        
    }
    else{
      io.emit('enter message',x);
      this.refs.inputMessage.value = '';
    } 
  },
  handleKeyUp(e){
    switch(e.keyCode){
      case 27:
        this.cancelMessage();
        break;
      case 13:
        this.enterMessage();
        break;
    }
  },
  handleMouseDown(){
    init.chatInputSelect=true;
  },
  render(s = this.props.s){
    let x = s.mapFade ? s.playerChatOpacity : 0;
    return(
      <div id="PlayerChat" className="xx10 xx10o1 s6 s6o1 m4 m4o1 l3 l3o1" style={{opacity: x }}>
        <div ref="chatBox" id="chatBox">
          <ul style={transform("translateY("+this.state.chatBoxTop+"px)")} ref="messageBox">
            {this.state.chatMsg.map(this.chatMsgShow)}
          </ul>
        </div> 
        <input ref="inputMessage" onMouseDown={this.handleMouseDown} onKeyUp={this.handleKeyUp} type="text" />
      </div>
    )
  },
});

