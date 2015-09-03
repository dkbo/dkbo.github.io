var Menu = React.createClass({
getInitialState : function(){
    return {
      menuRightBoxWheel: 0,
      menuLeftBoxWheel: 0
    }
},
menuRightWheel : function(e){
  var scrollSpeed = 32;
  var delta = e.deltaY  > 0  ? e.deltaY : -e.deltaY;
  var rw = React.findDOMNode(this.refs.right).clientHeight;
  var rbw = React.findDOMNode(this.refs.rightBox).clientHeight;
  var x = rbw + (this.state.menuRightBoxWheel - scrollSpeed*(e.deltaY / delta))  
  var y = -scrollSpeed *e.deltaY / delta +this.state.menuRightBoxWheel
 if( x +scrollSpeed >  rw && y <= 0)
  this.setState({menuRightBoxWheel : y})
},
menuRightTouchMove : function(e){
    e.preventDefault();
    var pos = this.props.getTouchPos(e);
    var rw = React.findDOMNode(this.refs.right).clientHeight;
    var rbw = React.findDOMNode(this.refs.rightBox).clientHeight;
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
    render : function(){
      var s = this.props.s;
      return(
        <div id="menu">
          <div id="left" className="col xx12 s3 xx-np xx-ng" onTouchMove={this.menuLeftTouchMove} >
            <ul style={transform("translateX("+this.state.menuLeftBoxWheel+"px)")}>
              {init.menuTitle.map(this.props.menuItem)}
            </ul>
          </div>
          <div id="right" className="col xx12 s9 xx-np xx-ng" ref="right" onTouchMove={this.menuRightTouchMove}>
            <div id="rightBox" onWheel={this.menuRightWheel} ref="rightBox" style={transform("translateY("+this.state.menuRightBoxWheel+"px)")}>
              {init.menuText[s.menuIndex]}
            </div>
          </div>
        </div>
        )
    }
});