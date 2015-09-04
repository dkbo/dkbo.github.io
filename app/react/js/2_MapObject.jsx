var MapObject = React.createClass({
    componentDidMount: function () {
      var firstCanvas = document.getElementById('firstCanvas');
      var secondCanvas = document.getElementById('secondCanvas');
      init.fcontext = firstCanvas.getContext('2d');
      init.scontext = secondCanvas.getContext('2d');
    },
    render : function(){
      var s = this.props.s;
      return(
        <div>
          <canvas id="firstCanvas" width={s.map.col} height={s.map.row} />
          <canvas id="secondCanvas" width={s.map.col} height={s.map.row} />
        </div>    
      )
    }
});
