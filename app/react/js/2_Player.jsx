const Player = React.createClass({
	componentDidMount() {
   		let playerCanvas = document.getElementById('player');
    	init.player =  playerCanvas.getContext('2d');
  },
  render(s = this.props.s){
    return(
      <div>
        <canvas id="player" width={s.map.col} height={s.map.row} />   
      </div>  
    )
  }
});

