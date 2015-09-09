let Menu = React.createClass({
  getInitialState(){
    return {
      menuRightBoxWheel: 0,
      menuLeftBoxWheel: 0,
      menuIndex: 0
    }
  },
  //選單選項載入
  menuItem(menuItem){
    if(this.state.menuIndex == menuItem.id)
      return <li className='xx-dark-text-shadow' style={{borderColor : 'white'}}>{menuItem.title}</li>;
    else
      return <li className='xx-dark-text-shadow' style={{borderColor : 'transparent'}}onClick={this.menuSelect.bind('null',menuItem.id)}>{menuItem.title}</li>;
  },
  //選單
  menuSelect(x){
    this.setState({menuIndex : x , menuRightBoxWheel : 0});
  },
  //處理選單選項移動
  handleMenuIndexMove(x){
    let val = x + this.state.menuIndex;
    if( val >= 0 && val < init.menuTitle.length){
      this.menuSelect(val);
    }
  },
  menuRightWheel(e){
    let [scrollSpeed,delta,rw,rbw]=[
      32,
      e.deltaY  > 0  ? e.deltaY : -e.deltaY,
      this.refs.right.clientHeight,
      this.refs.rightBox.clientHeight,
    ];
    let [x , y] = [
      rbw + (this.state.menuRightBoxWheel - scrollSpeed*(e.deltaY / delta)),
      -scrollSpeed *e.deltaY / delta +this.state.menuRightBoxWheel,
    ];
    if(x +scrollSpeed > rw && y <= 0){
      this.setState({menuRightBoxWheel : y})
    }
  },
  menuRightTouchMove(e){
    e.preventDefault();
    let [pos,rw,rbw] = [
      this.props.getTouchPos(e),
      this.refs.right.clientHeight,
      this.refs.rightBox.clientHeight, 
    ];
    let [x,y] = [
      rbw + (this.state.menuRightBoxWheel + (pos.y-init.startTouch.y)),
      pos.y-init.startTouch.y,
    ];
    init.startTouch = pos;  
    if( x > rw && this.state.menuRightBoxWheel +y <= 0){
      this.setState({menuRightBoxWheel: this.state.menuRightBoxWheel+y});
    }
  },
  menuLeftTouchMove(e){
    if(e.view.innerWidth < 768 ){
      e.preventDefault()
      let pos = this.props.getTouchPos(e),x = pos.x-init.startTouch.x;
      init.startTouch = pos;
      if(this.state.menuLeftBoxWheel + x <= 0){
        this.setState({menuLeftBoxWheel: this.state.menuLeftBoxWheel+x});
      }
    }
  },
  handleKeyDown(e){
    if(this.props.s.menuDisplay){
      switch(e.keyCode){
        case 38:
          this.handleMenuIndexMove(-1);
          break;
        case 87:
          this.handleMenuIndexMove(-1);
          break;
        case 40:
          this.handleMenuIndexMove(1);
          break;
        case 83:
          this.handleMenuIndexMove(1);
          break;
      }
    }
  },
  componentDidMount(){
      $(window).on('keydown',this.handleKeyDown);
  },
  componentWillUnmount(){
      $(window).off('keydown',this.handleKeyDown);
  },
  render(s = this.props.s){ 
    return(
      <div id='menu'>
        <div id='left' className='col xx12 s3 xx-np xx-ng' onTouchMove={this.menuLeftTouchMove} >
          <ul style={transform(`translateX(${this.state.menuLeftBoxWheel}px)`)}>
            {init.menuTitle.map(this.menuItem)}
          </ul>
        </div>
        <div id='right' className='col xx12 s9 xx-np xx-ng' ref='right' onTouchMove={this.menuRightTouchMove}>
          <div id='rightBox' onWheel={this.menuRightWheel} ref='rightBox' style={transform(`translateY(${this.state.menuRightBoxWheel}px)`)}>
            {init.menuText[this.state.menuIndex]}
          </div>
        </div>
      </div>
    )
  },
});