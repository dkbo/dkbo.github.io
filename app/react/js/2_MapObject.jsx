const MapObject = React.createClass({
  componentDidMount(){
    let firstCanvas = document.getElementById('firstCanvas');
    let secondCanvas = document.getElementById('secondCanvas');
    init.fcontext = firstCanvas.getContext('2d');
    init.scontext = secondCanvas.getContext('2d');
  },
  render(s = this.props.s){
    return(
      <div>
        <canvas id='firstCanvas' width={s.map.col} height={s.map.row} />
        <canvas id='secondCanvas' width={s.map.col} height={s.map.row} />
      </div>    
    )
  }
});
