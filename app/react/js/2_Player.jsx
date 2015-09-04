var Player = React.createClass({
    render : function(){
      var s = this.props.s;
      return(
        <div>
          <canvas id="player" width={s.map.col} height={s.map.row} />   
        </div>  
      )
    }
});

