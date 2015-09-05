var OnlinePlayers = React.createClass({
	componentDidMount: function () {
   		var playersCanvas = document.getElementById('playersCanvas');
    	 init.playerscontext =  playersCanvas.getContext('2d');
  },
    render : function(){
      var s = this.props.s;
      return(
        <div>
          <canvas id="playersCanvas" width={s.map.col} height={s.map.row} />   
        </div>  
      )
    }
});

