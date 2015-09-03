var Map = React.createClass({
    render : function(){
      var s = this.props.s;
      return(
        <div id="map"  style={{opacity : s.mapFade ,zIndex : s.mapZindex ,background: s.map.bg,WebkitTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", msTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", transform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)",width: s.mapSizeX*s.map.col,height: s.mapSizeY*s.map.row}} >
          <canvas id="grid" width={s.map.col} height={s.map.row} />
          <canvas id="firstCanvas" width={s.map.col} height={s.map.row} />      
          <Npc  x={s.x} y={s.y} width={s.map.col} height={s.map.row}  />
          <canvas id="player" width={s.map.col} height={s.map.row} />
          <canvas id="secondCanvas" width={s.map.col} height={s.map.row} /> 
        </div>  
      )
    }
});
