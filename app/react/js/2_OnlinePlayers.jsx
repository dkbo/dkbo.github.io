const OnlinePlayers = React.createClass({
	componentDidMount() {
   	let playersCanvas = document.getElementById('playersCanvas');
    init.playerscontext =  playersCanvas.getContext('2d');
  },
  render(s = this.props.s){
    return(
      <div>
        <canvas id="playersCanvas" width={s.map.col} height={s.map.row} />   
      </div>  
    )
  }
});

