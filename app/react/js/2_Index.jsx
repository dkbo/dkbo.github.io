var Index = React.createClass({
    render : function(){
      var s = this.props.s;
      return(
        <div id="index" style={{opacity : s.indexShow}}>
          <div id="indexBox"  style={{opacity : s.indexBoxShow}}>
            <ul>
              {init.indexBox.map(this.props.indexBox)}
            </ul>
          </div>
          <Loadbox style={{opacity : s.loadBoxShow}} />
        </div> 
      )
    }
});
