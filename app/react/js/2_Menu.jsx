var Menu = React.createClass({
getInitialState : function(){
    return {
      menuRightBoxWheel: 0,
      menuLeftBoxWheel: 0,
      menuIndex: 0
    }
},
//選單選項載入
menuItem : function(menuItem) {
    if(this.state.menuIndex == menuItem.id)
      return <li className="xx-dark-text-shadow" style={{borderColor : "white"}}>{menuItem.title}</li>;
    else
      return <li className="xx-dark-text-shadow" style={{borderColor : "transparent"}}onClick={this.menuSelect.bind('null',menuItem.id)}>{menuItem.title}</li>;
},
//選單
menuSelect : function(x){
 this.setState({menuIndex : x , menuRightBoxWheel : 0});
},
//處理選單選項移動
handleMenuIndexMove : function(x){
  var val = x + this.state.menuIndex;
   if( val >= 0 && val < init.menuTitle.length){
   this.menuSelect(val);
}
},
menuRightWheel : function(e){
  var scrollSpeed = 32;
  var delta = e.deltaY  > 0  ? e.deltaY : -e.deltaY;
  var rw = this.refs.right.clientHeight;
  var rbw = this.refs.rightBox.clientHeight;
  var x = rbw + (this.state.menuRightBoxWheel - scrollSpeed*(e.deltaY / delta))  
  var y = -scrollSpeed *e.deltaY / delta +this.state.menuRightBoxWheel
 if( x +scrollSpeed >  rw && y <= 0)
  this.setState({menuRightBoxWheel : y})
},
menuRightTouchMove : function(e){
    e.preventDefault();
    var pos = this.props.getTouchPos(e);
    var rw = this.refs.right.clientHeight;
    var rbw = this.refs.rightBox.clientHeight;
    var y = pos.y-init.startTouch.y;
    var x = rbw + (this.state.menuRightBoxWheel +  y);
    init.startTouch = pos;  
    if( x > rw && this.state.menuRightBoxWheel +y <= 0)
    this.setState({menuRightBoxWheel: this.state.menuRightBoxWheel+y});
},
menuLeftTouchMove : function(e){
    if(e.view.innerWidth < 768 ){
    e.preventDefault()
    var pos = this.props.getTouchPos(e);
    var x = pos.x-init.startTouch.x;
    init.startTouch = pos;
    if(this.state.menuLeftBoxWheel + x <= 0)
    this.setState({menuLeftBoxWheel: this.state.menuLeftBoxWheel+x});
  }
},
handleKeyDown : function(e){
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
componentDidMount: function () {
    $(window).on('keydown',this.handleKeyDown);
},
componentWillUnmount : function(){
    $(window).off('keydown',this.handleKeyDown);
},
    render : function(){
      var s = this.props.s;
      return(
        <div id="menu">
          <div id="left" className="col xx12 s3 xx-np xx-ng" onTouchMove={this.menuLeftTouchMove} >
            <ul style={transform("translateX("+this.state.menuLeftBoxWheel+"px)")}>
              {init.menuTitle.map(this.menuItem)}
            </ul>
          </div>
          <div id="right" className="col xx12 s9 xx-np xx-ng" ref="right" onTouchMove={this.menuRightTouchMove}>
            <div id="rightBox" onWheel={this.menuRightWheel} ref="rightBox" style={transform("translateY("+this.state.menuRightBoxWheel+"px)")}>
              {init.menuText[this.state.menuIndex]}
            </div>
          </div>
        </div>
        )
    }
});