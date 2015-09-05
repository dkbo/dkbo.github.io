var MapGrid = React.createClass({
  getInitialState : function(){
    return {
      gridX : false, // X 格線
      gridY : false // Y 格線
    }
  },
    //畫格線或取消格線
  drawGridX : function(){
    if(!this.state.gridX){
      init.context.beginPath();
        for(var i=1;i<(init.maps.col/init.object.sizeX);i++){
        init.context.moveTo(i*init.object.sizeX,init.object.sizeY);
        init.context.lineTo(i*init.object.sizeX,init.maps.row);
        init.context.font = 'italic .5em Calibri';
        init.context.textAlign = 'center';
        init.context.fillText(i*init.object.sizeX, i*init.object.sizeX, 20);
      }
        init.context.stroke();
    }
    else{
        init.context.clearRect(0, 0, init.maps.col, init.maps.row);
    }
    this.setState({gridX : !this.state.gridX});
  },
  drawGridY : function(){
    if(!this.state.gridY){
      init.context.beginPath();
        for(var j=1;j<(init.maps.row/init.object.sizeY);j++){
        init.context.moveTo(init.object.sizeX,j*init.object.sizeY);
        init.context.lineTo(init.maps.col,j*init.object.sizeY);
        init.context.font = 'italic .5em Calibri';
        init.context.textAlign = 'center';
        init.context.fillText(j*init.object.sizeY, 20, j*init.object.sizeY+4);
      }
        init.context.stroke();
    }
        else{
        init.context.clearRect(0, 0, init.maps.col, init.maps.row);
    }
    this.setState({gridY : !this.state.gridY});
},
handleKeyDown : function(e){
  switch(e.keyCode){      
    // 顯示X取消格線
    case 88:
       this.drawGridX();
       break;
    // 顯示Y取消格線
    case 89:
       this.drawGridY();
       break;
  }
},
componentDidMount: function () {
    var gridCanvas = document.getElementById('grid');
    init.context =  gridCanvas.getContext('2d');
    $(window).on('keydown',this.handleKeyDown);
  },
 componentWillUnmount : function(){
    $(window).off('keydown',this.handleKeyDown);
  },
    render : function(){ 
      var s = this.props.s;
      return(
          <canvas id="grid" width={s.map.col} height={s.map.row} />      
      )
    }
});