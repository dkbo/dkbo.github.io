var PreLoadImg = React.createClass({
  handleLoadImg : function(Img){
  return <img src={Img} />;
},
  render : function(){
    var style = {display : "none"};
    return (
      <div style={style}>
        {init.preImg.map(this.handleLoadImg)}
      </div>
  )
  }
});