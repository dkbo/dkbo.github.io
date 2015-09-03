var Disqus = React.createClass({
componentDidMount: function () {
      this.addDisqus();
},
componentWillUnmount: function () {
     this.removeDisqus();
},
addDisqus: function () {
      $("body").append("<script id='disqus' type='text/javascript' src='//dkbo-rpg.disqus.com/embed.js' async='true'></script>");
        
},
removeDisqus: function () {
      $("#disqus").remove();
},
render: function () {
        return (
          <div>
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
          </div>
        );
    }
});