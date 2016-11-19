import React, { Component, PropTypes } from 'react'
import { isMoveObject } from '../constants/ismove/'

export default class Sence extends Component {
	constructor(props) {
		super(props)
		this.handleResize = ::this.handleResize
	}

	drawSence() {
		const { width, height } = isMoveObject[0]['map']
		const msx = this.props.sence.get('msx')
		const msy = this.props.sence.get('msy')
		this.sence.clearRect(0, 0, width, height)
		this.sence.drawImage(this.img, msx, msy, width, height, this.mpx, this.mpy, width, height)
	}
	senceChange(props = this.props) {
		const { width, height } = isMoveObject[props.sence.get('mapId')]['map']
		this.img.onload = () => {
			this.mpx = width >= window.innerWidth ? 0 : (window.innerWidth - width) / 2
			this.mpy = height >= window.innerHeight ? 0 : (window.innerHeight - height) / 2
			this.drawSence()
			this.props.sence.get('isTransSence') ? setTimeout(()=> props.sen({isTransSence: false}), 1000) : null
		}
		this.img.src = isMoveObject[props.sence.get('mapId')]['map'][props.senceImg]
	}
	handleResize() {
		this.senceChange()
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
	render() {
	    return (
	      <div>
	      	<canvas className={this.props.sence.get('isTransSence') ? 'x-hide' : null} ref="sence" width={window.innerWidth} height={window.innerHeight} />
	      </div>
	    )
	}
}
Sence.propTypes = {
	senceImg: PropTypes.string.isRequired,
	sence: PropTypes.object.isRequired,
	sen: PropTypes.func,
}
