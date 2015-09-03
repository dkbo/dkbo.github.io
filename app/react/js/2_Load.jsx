var Load = React.createClass({
  render : function(){
    var x = [];
    for(var i=0; i < 12;i++){
    x.push(<div></div>);
  }
    return(
    <div  id="load" style={this.props.style} >{x}</div>
  )
  }
});