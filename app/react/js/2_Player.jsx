var Player = React.createClass({
    render : function(){
      var s = this.props.s;
      let style = {
        transform : "translateY("+s.top+"px) translateX("+s.left +"px)",
        oTransform : "translateY("+s.top+"px) translateX("+s.left +"px)",
        msTransform : "translateY("+s.top+"px) translateX("+s.left +"px)",
        WebkitTransform : "translateY("+s.top+"px) translateX("+s.left +"px)",
        backgroundPosition : s.manMoveAnimate*init.man.sizeX+"px "+s.manMoveImg*(-init.man.sizeY)+"px"
      };
      return(
        <div id="player" style={style} />
      )
    }
});

