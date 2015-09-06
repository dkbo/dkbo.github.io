var Map = React.createClass({
    render : function(){
      var s = this.props.s;
      return(
        <div id="map" onClick={handleControl} style={{opacity : s.mapFade ,zIndex : s.mapZindex ,background: s.map.bg,WebkitTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", msTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", transform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)",width: s.mapSizeX*s.map.col,height: s.mapSizeY*s.map.row}} >
          <MapGrid s={s} />
          <MapObject s={s} />
          <OnlinePlayers s={s} />
          <Npc  s={s}  />
          <Player s={s} />    
        </div>  
      )
    }
});

