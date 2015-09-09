const Disqus = React.createClass({
  componentDidMount() {
    this.addDisqus();
  },
  componentWillUnmount() {
    this.removeDisqus();
  },
  addDisqus() {
    $('body').append('<script id="disqus" type="text/javascript" src="//dkbo-rpg.disqus.com/embed.js" async="true"></script>');  
  },
  removeDisqus() {
    $('#disqus').remove();
  },
  render() {
    return(
      <div>
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
      </div>
    );
  },
});