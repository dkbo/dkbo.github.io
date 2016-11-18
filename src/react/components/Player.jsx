import React, { Component, PropTypes } from 'react'
import { isMoveObject } from '../constants/ismove/'
import { messageObject } from '../constants/message/'
import man from '../../images/man.png'
export default class Player extends Component {
	constructor(props) {
		super(props)
		this.touchstart = {
			x: 0,
			y: 0,
		}
		this.handleResize = ::this.handleResize
		this.handleKeyDown = ::this.handleKeyDown
		this.handleKeyUp = ::this.handleKeyUp
		this.moveAnimate = ::this.moveAnimate


	}
	isDraw() {
    if(!this.props.menu.menuDisplay && !this.props.sence.get('isTransSence')) {
			let [ x, y, isMoveX, isMoveY ] = [ 0, 0, false, false ]
			let { px, py, sx, sy, spx, spy } = this.props.player
			let msx = this.props.sence.get('msx')
			let msy = this.props.sence.get('msy')
			const senceWidth = isMoveObject[this.props.sence.get('mapId')]['map']['width']
			const senceHeight = isMoveObject[this.props.sence.get('mapId')]['map']['height']
			const h = window.innerHeight
			const w = window.innerWidth
			const {s, left, up, down, right } = this.props.player
			const mDw = this.props.sence.get('mDw')
			const mLf = this.props.sence.get('mLf')
			const mRf = this.props.sence.get('mRf')
			const mUp = this.props.sence.get('mUp')
			const {nX, nY } = this.player

			if(left && !right) {
				x = -s
				sy = nY
				msx = ( spx + x ) < mLf ? ( msx === 0 ? msx : msx + x) : msx
				spx = ( spx + x ) < mLf ? (( spx + x ) <= 0 ? 0 : ( msx === 0 ? spx + x : spx)) : spx + x
				isMoveX = true
			} else if(right && !left) {
				x = s
				sy = nY * 2
				const rsw = senceWidth - w
				msx = ( spx + x ) > mRf ? ( msx >= rsw ? msx : msx + x) : msx
				spx = ( spx + x ) > mRf ? ( msx >= rsw ? (spx >= w - nX ? spx : spx + x ) : spx) : spx + x
				isMoveX = true
			}

			if(up && !down) {
				y = -s
				sy = nY * 3
				msy = ( spy + y ) < mUp ? ( msy === 0 ? msy : msy + y) : msy
				spy = ( spy + y ) < mUp ? (( spy + y ) <= 0 ? 0 : ( msy === 0 ? spy + y : spy)) : spy + y
				isMoveY = true
			} else if(down && !up) {
				y = s
				sy = 0
				const dsh = senceHeight - h
				msy = ( spy + y ) > mDw ? ( msy >= dsh ? msy : msy + y) : msy
				spy = ( spy + y ) > mDw ? ( msy >= dsh ? (spy >= h - nY ? spy : spy + y ) : spy) : spy + y
				isMoveY = true
			}

			if(isMoveX || isMoveY) {
				px = w > senceWidth ? spx - (w - senceWidth) / 2 : msx + spx
				py = h > senceHeight ? spy - (h - senceHeight) / 2 : msy + spy
			if(!this.isTransSence(px, py)){
					this.af = this.af + 1 === nX ? 0 : ++this.af
					sx = parseInt(this.af / (nX / 4 )) * nX
					this.isMove(px, py)
						? this.drawSenceAndPlayer({px, py, sx, sy, spx, spy}, {msx, msy})
						: this.isMove(px, this.props.player.py)
							? this.drawSenceAndPlayer({px, py: this.props.player.py, sx, sy, spx, spy: this.props.player.spy}, {msx, msy: this.props.sence.get('msy')})
							: this.isMove(this.props.player.px, py)
								? this.drawSenceAndPlayer({px: this.props.player.px, py, sx, sy, spx: this.props.player.spx, spy}, {msx: this.props.sence.get('msx'), msy})
								: this.drawSenceAndPlayer({px: this.props.player.px, py: this.props.player.py, sx, sy, spx: this.props.player.spx, spy: this.props.player.spy}, {msx: this.props.sence.get('msx'), msy: this.props.sence.get('msy')})
				}
				this.props.npc.isChat ? this.closeChat() : null
			}
		}
		this.aframe = this.props.rAF()(::this.isDraw)
	}
	drawSenceAndPlayer(json, jsonSence){
			this.props.pos(json)
			this.props.sen(jsonSence)
	}

	isMove(px, py){
		const { nX, nY } = this.player
		let ismove = true
		isMoveObject[this.props.sence.get('mapId')]['isMove'].map((json) => {
			if(px + nX >= json.x && px <= json.x + json.w && py + nY >= json.y && py <= json.y + json.h){
				ismove = false
			}
		})
    	return ismove
  	}
		isTransSence(px, py) {
			const { nX, nY } = this.player
			let isTransSence = false
			isMoveObject[this.props.sence.get('mapId')]['isMove'].map((json) => {
				if(px + nX >= json.x && px <= json.x + json.w && py + nY >= json.y && py <= json.y + json.h){
					if(json.cm >= 0) {
						isTransSence = true
						this.props.sen({mapId: json.cm, isTransSence})
						this.props.pos({px: isMoveObject[json.cm]['map']['in'][json.cmm]['x'], py: isMoveObject[json.cm]['map']['in'][json.cmm]['y']})
						this.handleResize()
					}
				}
			})
	    	return isTransSence
		}


	//Check the player's direction, then excute isMessage
	  moveAnimate(){
			if(!this.props.menu.menuDisplay) {
		  	const { sy, s } = this.props.player
		    switch(sy){
		      case 0: //down
		        this.isMessage(0, s)
		        break
		      case 48: //left
		        this.isMessage(-s, 0)
		        break
		      case 96: //right
		        this.isMessage(s, 0)
		        break
		      case 144: //up
		        this.isMessage(0, -s)
		        break
		    }
			}
	  }
  	isMessage(x, y){
  		const { px, py } = this.props.player
			const { nX, nY } = this.player
			isMoveObject[this.props.sence.get('mapId')]['isMove'].map((json) => {
				if(px + nX + x >= json.x && px + x <= json.x + json.w && py + nY + y >= json.y && py + y <= json.y + json.h){
					if(json.e >= 0) {
						const npcJson = messageObject[this.props.sence.get('mapId')][json.e]
						if(npcJson['text']) {
							let messageCount = this.props.npc.messageCount ? this.props.npc.messageCount + 1 : 1
							const npcName = npcJson['name']
							const npcMessage = npcJson['text'].length >= messageCount ? npcJson['text'][messageCount - 1] : npcJson['text'][messageCount - 2]
							const isChat = npcJson['text'].length >= messageCount ? true : false
							messageCount = npcJson['text'].length >= messageCount ? messageCount : 0
							this.props.mes({ messageCount, npcName, npcMessage, isChat })
						} else {
							null
						}
					}
				}
			})
  	}
		closeChat() {
			const messageCount = 0
			const { npcName, npcMessage } = this.props.npc
			const isChat = false
			this.props.mes({ messageCount, npcName, npcMessage, isChat })
		}
	drawPlayer({spx, spy, sx, sy} = this.props.player, {nX, nY} = this.player){
		this.player.clearRect(0, 0, window.innerWidth, window.innerHeight)
    	this.player.drawImage(this.img, sx, sy, nX, nY, spx, spy, nX, nY)
	}

	handleKeyDown(e) {
		e.preventDefault()
		switch(e.keyCode) {
			case 37:
				this.isKeyDown("left")
    		break
    	case 38:
				this.isKeyDown("up")
    		break
    	case 39:
				this.isKeyDown("right")
    		break
    	case 40:
				this.isKeyDown("down")
    		break
    	case 32:
	      this.moveAnimate()
	      break
			case 27: //esc
		    this.menuOpen()
		    break
			default:
				break
		}
	}
	menuOpen() {
		this.closeChat()
		this.props.menuOpen()
	}
	isKeyDown(way) {
    	this.props.player[way] ? null : this.props.way(way, true)
	}
	handleKeyUp(e) {
		e.preventDefault()
		switch(e.keyCode) {
			case 37:
				this.isKeyUp("left")
    		break
    	case 38:
				this.isKeyUp("up")
    		break
    	case 39:
				this.isKeyUp("right")
    		break
    	case 40:
				this.isKeyUp("down")
    		break
			default:
				break
		}
	}
	isKeyUp(way) {
    	this.props.player[way] ? this.props.way(way, false) : null
	}
	handleResize() {
		const { nY, nX } = this.player
		const { px, py } = this.props.player
		const h = window.innerHeight
		const w = window.innerWidth
		const mh = h / 4
		const mw = w / 4
		const senceWidth = isMoveObject[this.props.sence.get('mapId')]['map']['width']
		const senceHeight = isMoveObject[this.props.sence.get('mapId')]['map']['height']
		const mUp = parseInt(h / 2 - mh) - (parseInt(h / 2 - mh) % 4)
		const mDw = parseInt(h / 2 + mh - nY) - (parseInt(h / 2 + mh - nY) % 4)
		const mLf = parseInt(w / 2 - mw) - (parseInt(w / 2 - mw) % 4)
		const mRf = parseInt(w / 2 + mw - nX) - (parseInt(w / 2 + mw - nX) % 4)

		const msx = w > senceWidth
			? 0 : ( px <= mRf
				? 0 : ( px >= senceWidth - nX
					? senceWidth - w : (px - mRf) > (senceWidth - w)
						? senceWidth - w : px - mRf ))

		const msy = h > senceHeight
			? 0 : ( py <= mDw
				? 0 : ( py >= senceHeight - nY
					? senceHeight - h : (py - mDw) > (senceHeight - h)
						? senceHeight - h : py - mDw ))


		const spx = w > senceWidth
			? px + (w - senceWidth) / 2 : ( px <= mRf
				? px : ( px >= senceWidth - nX
					? px - msx : (px - mRf) > (senceWidth - w)
						? px - msx : mRf ))

		const spy = h > senceHeight
			? py + (h - senceHeight) / 2 : ( py <= mDw ? py : ( py <= mDw
				? 0 : py >= senceHeight - nY
					? py - msy : (py - mDw) > (senceHeight - h)
						? py - msy : mDw ))


			this.drawSenceAndPlayer({spx, spy }, { mUp, mDw, mLf, mRf, msx, msy})
	}
	componentDidMount() {
		this.canvas = this.refs.player
		this.player = this.canvas.getContext('2d')
		this.player.nX = 32
		this.player.nY = 48

		this.img = new Image()
		this.img.onload = () => {
			this.handleResize()
		}
		this.img.src = man

		this.af = 0
		window.addEventListener("resize", this.handleResize)
		window.addEventListener("keydown", this.handleKeyDown)
		window.addEventListener("keyup", this.handleKeyUp)
		window.addEventListener("touchstart", this.moveAnimate)

		this.props.rAF()(::this.isDraw)

	}
	// shouldComponentUpdate(nextProps) {
	// 	return nextProps.player.is( this.props.player
	// }
	componentDidUpdate() {
    	this.drawPlayer()
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize)
		window.removeEventListener("keydown", this.handleKeyDown)
		window.removeEventListener("keyup", this.handleKeyUp)
		window.removeEventListener("touchstart", this.moveAnimate)
		this.props.cAF()(::this.aframe)
	}
	render() {
	    return (
	      <div>
	      	<canvas
						className={this.props.sence.get('isTransSence') ? 'x-hide' : null}
						ref="player"
						width={window.innerWidth}
						height={window.innerHeight}
					/>
	      </div>
	    )
	}
}
Player.propTypes = {
	menu: PropTypes.shape({
    menuDisplay: PropTypes.bool,
  }).isRequired,
	npc: PropTypes.shape({
		isChat: PropTypes.bool,
		npcName: PropTypes.string,
		messageCount: PropTypes.number,
    npcMessage: PropTypes.any,
  }).isRequired,
	player: PropTypes.shape({
		s: PropTypes.number,
		px: PropTypes.number,
		py: PropTypes.number,
		sx: PropTypes.number,
		sy: PropTypes.number,
		spx: PropTypes.number,
		spy: PropTypes.number,
		left: PropTypes.bool,
		right: PropTypes.bool,
		up: PropTypes.bool,
    down: PropTypes.bool,
  }).isRequired,
	sence: PropTypes.any,
	pos: PropTypes.func.isRequired,
	sen: PropTypes.func.isRequired,
	mes: PropTypes.func.isRequired,
	way: PropTypes.func.isRequired,
	menuOpen: PropTypes.func.isRequired,
	rAF: PropTypes.func.isRequired,
	cAF: PropTypes.func.isRequired,
}
