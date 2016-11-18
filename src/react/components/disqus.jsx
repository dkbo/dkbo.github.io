import React, {Component} from 'react'

export default class Disqus extends Component {
  constructor(props) {
    super(props)
  }

	componentDidMount() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//dkbo-rpg.disqus.com/embed.js'
    script.id = 'disqus'
    document.body.appendChild(script);
  }
  componentWillUnmount() {
    const dom = document.getElementById('disqus')
    dom.parentNode.removeChild(dom)
    const iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].parentNode.removeChild(iframes[i]);
    }
  }
  render() {
    return(
      <div>
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
      </div>
    )
  }
}
