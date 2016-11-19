import React, {Component, PropTypes} from 'react'
import Player from './player'
import Sence from './sence'
import Chat from './chat'
import Menu from './menu'
import MenuNav from './menuNav'
import Load from './load'

export default class Main extends Component {
	constructor(props) {
		super(props)
	}
	requestAFrame() {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60)
		}
	}
	cancelAFrame() {
		return window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function(id) {
			window.clearTimeout(id)
		}
	}

	componentWillMount() {
		window.addEventListener('MSHoldVisual', e => e.preventDefault())
		window.addEventListener('contextmenu', e => e.preventDefault())
	}
	componentWillUnmount() {
		window.removeEventListener('MSHoldVisual', e => e.preventDefault())
		window.removeEventListener('contextmenu', e => e.preventDefault())
	}
	render() {
		return (
			<main>
				{	this.props.sence.get('isTransSence')
						? <Load />
						: null
				}
				<Sence {...this.props} senceImg={'second'}/>
				<Player {...this.props} rAF={this.requestAFrame} cAF={this.cancelAFrame}/>
				<Sence {...this.props} senceImg={'first'}/>
				<Chat npc={this.props.npc} />
				<MenuNav menuOpen={this.props.menuOpen} />
				{ this.props.menu.menuDisplay
						? <Menu menu={this.props.menu} />
						: null
				}
			</main>
		)
	}
}
Main.propTypes = {
	menu: PropTypes.shape({
    menuDisplay: PropTypes.bool,
  }).isRequired,
	sence: PropTypes.any,
	menuOpen: PropTypes.func.isRequired,
	npc: PropTypes.object.isRequired,
	sen: PropTypes.func,

}
