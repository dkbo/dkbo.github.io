const Load = React.createClass({
  render(x=[]){
    for(let i=0; i < 12;i++){
    	x.push(<div></div>);
  	}
    return(
     	<div  id='load' style={this.props.style} >{x}</div>
  	)
  }
});