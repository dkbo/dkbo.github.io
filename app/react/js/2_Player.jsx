var Player = React.createClass({
	componentDidMount: function () {
   		var playerCanvas = document.getElementById('player');
    	init.player =  playerCanvas.getContext('2d');
  },
    render : function(){
      var s = this.props.s;
      return(
        <div>
          <canvas id="player" width={s.map.col} height={s.map.row} />   
        </div>  
      )
    }
});

