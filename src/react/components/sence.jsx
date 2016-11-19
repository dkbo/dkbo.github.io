import React, { Component, PropTypes } from 'react'
import { isMoveObject } from '../constants/ismove/'

export default class Sence extends Component {
	constructor(props) {
		super(props)
		this.handleResize = ::this.handleResize
		this.handleTouchStart = ::this.handleTouchStart
		this.handleTouchMove = ::this.handleTouchMove
		this.handleTouchEnd = ::this.handleTouchEnd
	}

	drawSence(props = this.props) {
		const { width, height } = isMoveObject[props.sence.get('mapId')]['map']
		const msx = props.sence.get('msx')
		const msy = props.sence.get('msy')
		this.sence.clearRect(0, 0, window.innerWidth, window.innerHeight)
		this.sence.drawImage(this.img, msx, msy, width, height, this.mpx, this.mpy, width, height)
	}
	senceChange(props = this.props) {
		const { width, height } = isMoveObject[props.sence.get('mapId')]['map']
		this.img.onload = () => {
			this.mpx = width >= window.innerWidth ? 0 : (window.innerWidth - width) / 2
			this.mpy = height >= window.innerHeight ? 0 : (window.innerHeight - height) / 2
			this.drawSence()
			props.sence.get('isTransSence') ? setTimeout(()=> props.sen({isTransSence: false}), 1000) : null
		}
		this.img.src = isMoveObject[props.sence.get('mapId')]['map'][props.senceImg]
	}
	handleResize() {
		this.senceChange()
	}
	handleTouchStart(e){
			e.preventDefault()
			this.startTouch = this.getTouchPos(e);
	}
	//返回觸碰移動時 XY 座標
	handleTouchMove(e){
		e.preventDefault();
			const pos = this.getTouchPos(e);
			pos.x - this.startTouch.x < -30 ? this.isKeyDown("left") : this.isKeyUp("left")
			pos.x - this.startTouch.x > 30 ? this.isKeyDown("right") : this.isKeyUp("right")
			pos.y - this.startTouch.y < -30 ? this.isKeyDown("up") : this.isKeyUp("up")
			pos.y - this.startTouch.y > 50 ? this.isKeyDown("down") : this.isKeyUp("down")
	}
	//處理觸碰結束時事件
	handleTouchEnd(e){
		e.preventDefault()
		this.isKeyUp("left")
		this.isKeyUp("right")
		this.isKeyUp("up")
		this.isKeyUp("down")
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
	shouldComponentUpdate(nextProps) {
		if(this.props.sence.get('mapId') !== nextProps.sence.get('mapId')) {
			this.senceChange(nextProps)
		}
		return this.props.sence !== nextProps.sence
	}
	componentWillMount() {
		window.addEventListener('resize', this.handleResize)
	}
	componentDidUpdate() {
		this.drawSence()
	}
	componentDidMount() {
		this.canvas = this.refs.sence
		this.sence = this.canvas.getContext('2d')
		this.img = new Image()
		this.senceChange()
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
	render() {
	    return (
	      <div>
	      	<canvas
						onTouchStart={this.handleTouchStart}
						onTouchMove={this.handleTouchMove}
						onTouchEnd={this.handleTouchEnd}
						className={this.props.sence.get('isTransSence') ? 'x-hide' : null}
						ref="sence" width={window.innerWidth}
						height={window.innerHeight} />
	      </div>
	    )
	}
}
Sence.propTypes = {
	senceImg: PropTypes.string.isRequired,
	sence: PropTypes.object.isRequired,
	sen: PropTypes.func,
	way: PropTypes.func,
	player: PropTypes.object,
}
