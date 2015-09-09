const Index = React.createClass({
  handleKeyDown(e){
    switch(e.keyCode){
      case 13:
        this.enterNickName();
        break;
    }
  },
  enterNickName(x=this.refs.nickname.value.trim()){
    if(!x){
    
    }
    else if(x.length<3){

    }
    else{
      io.emit('nickname',x);
      init.NameInputSelect = false;
      rt.handleStart();
    }
  },
  handleMouseDown(){
    init.NameInputSelect = true;
  },
  componentDidMount(){
    if(io.connected){
      init.NameInputSelect = true;
      this.refs.nickname.focus();
    }
  },
  render(s=this.props.s){
    return(
      <div  id='index' style={{opacity : s.indexShow}}>
        <div id='indexBox'  style={{opacity : s.indexBoxShow}}>
          {!io.connected ?<ul onClick={handleControl}>
            {init.indexBox.map(this.props.indexBox)}
          </ul> :
          <div>
            <label className='xx12  xx-center' htmlFor='gamename' >請輸入暱稱</label>
            <input ref='nickname' className='xx10 xx10o1 xx-center' id='gamename' type='text'  onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyDown} placeholder='尊姓大名?' />
          </div> }
        </div>
        <Loadbox style={{opacity : s.loadBoxShow}} />
      </div> 
    )
  }
});
