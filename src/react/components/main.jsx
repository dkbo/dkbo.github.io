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
		this.handleTouchStart = ::this.handleTouchStart
		this.handleTouchMove = ::this.handleTouchMove
		this.handleTouchEnd = ::this.handleTouchEnd
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
	isKeyUp(way) {
    	this.props.player[way] ? this.props.way(way, false) : null
	}
	isKeyDown(way) {
    	this.props.player[way] ? null : this.props.way(way, true)
	}
	getTouchPos(e){
		return {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY,
		}
	}
	handleTouchStart(e){
	    this.startTouch = this.getTouchPos(e);
  }
	//返回觸碰移動時 XY 座標
  handleTouchMove(e){
    e.preventDefault();
		  const pos = this.getTouchPos(e);
			pos.x - this.startTouch.x < -50 ? this.isKeyDown("left") : this.isKeyUp("left")
			pos.x - this.startTouch.x > 50 ? this.isKeyDown("right") : this.isKeyUp("right")
			pos.y - this.startTouch.y < -50 ? this.isKeyDown("up") : this.isKeyUp("up")
      pos.y - this.startTouch.y > 50 ? this.isKeyDown("down") : this.isKeyUp("down")
  }
  //處理觸碰結束時事件
  handleTouchEnd(){
		this.isKeyUp("left")
		this.isKeyUp("right")
		this.isKeyUp("up")
    this.isKeyUp("down")
  }
	render() {
		return (
			<main
				onTouchStart={this.handleTouchStart}
				onTouchMove={this.handleTouchMove}
				onTouchEnd={this.handleTouchEnd}
			>
				{	this.props.sence.get('isTransSence')
						? <Load />
						: null
				}
				<Sence sence={this.props.sence} sen={this.props.sen} senceImg={'second'}/>
				<Player {...this.props} rAF={this.requestAFrame} cAF={this.cancelAFrame}/>
				<Sence sence={this.props.sence} sen={this.props.sen} senceImg={'first'}/>
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
	way: PropTypes.func,
	player: PropTypes.object
}
