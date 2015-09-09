const PreLoadImg = React.createClass({
  handleLoadImg(Img){
    return <img src={Img} />;
  },
  render(){
    let style = {display : 'none'};
    return (
      <div style={style}>
        {init.preImg.map(this.handleLoadImg)}
      </div>
    )
  },
});