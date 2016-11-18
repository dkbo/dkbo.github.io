import React, {Component, PropTypes} from 'react'
import { menu } from '../constants/menu/'


export default class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
      menuRightBoxWheel: 0,
      menuLeftBoxWheel: 0,
      menuIndex: 0,
    }
		menu.startTouch = {
			x: 0,
			y: 0,
		}
		this.handleKeyDown = ::this.handleKeyDown
		this.menuLeftTouchMove = ::this.menuLeftTouchMove
		this.menuRightTouchMove = ::this.menuRightTouchMove
		this.menuRightWheel = ::this.menuRightWheel
		this.handleTouchStart = ::this.handleTouchStart
	}
  //選單
  menuSelect(x){
    this.setState({'menuIndex': x, 'menuRightBoxWheel': 0})
  }
  //處理選單選項移動
  handleMenuIndexMove(x){
    const val = x + this.state.menuIndex
    if( val >= 0 && val < menu.menuTitle.length){
      this.menuSelect(val)
    }
  }
  menuRightWheel(e){
    const [scrollSpeed, delta, rw, rbw] = [
      32,
      e.deltaY  > 0  ? e.deltaY : -e.deltaY,
      this.refs.right.clientHeight,
      this.refs.rightBox.clientHeight,
    ]
    const [x, y] = [
      rbw + (this.state.menuRightBoxWheel - scrollSpeed * (e.deltaY / delta)),
      -scrollSpeed * e.deltaY / delta + this.state.menuRightBoxWheel,
    ]
    if(x + scrollSpeed > rw && y <= 0){
      this.setState({menuRightBoxWheel: y})
    }
  }
	//返回觸碰時 XY 座標
  handleTouchStart(e){
    menu.startTouch = this.getTouchPos(e)
  }
  menuRightTouchMove(e){
    e.preventDefault()
    const [pos, rw, rbw] = [
      this.getTouchPos(e),
      this.refs.right.clientHeight,
      this.refs.rightBox.clientHeight,
    ]
    const [x, y] = [
      rbw + (this.state.menuRightBoxWheel + (pos.y - menu.startTouch.y)),
      pos.y - menu.startTouch.y,
    ]
    menu.startTouch = pos
    if( x > rw && this.state.menuRightBoxWheel + y <= 0){
      this.setState({menuRightBoxWheel: this.state.menuRightBoxWheel + y})
    }
  }
  menuLeftTouchMove(e){
    if(e.view.innerWidth < 768 ){
      e.preventDefault()
      const pos = this.getTouchPos(e)
			const x = pos.x - menu.startTouch.x
      menu.startTouch = pos
      if(this.state.menuLeftBoxWheel + x <= 0){
        this.setState({menuLeftBoxWheel: this.state.menuLeftBoxWheel + x})
      }
    }
  }
	//返回平板 / 手機裝置的 XY 座標
	getTouchPos(e){
		return {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY,
		}
	}
  handleKeyDown(e){
    if(this.props.menu.menuDisplay){
      switch(e.keyCode){
        case 38:
          this.handleMenuIndexMove(-1)
          break
        case 87:
          this.handleMenuIndexMove(-1)
          break
        case 40:
          this.handleMenuIndexMove(1)
          break
        case 83:
          this.handleMenuIndexMove(1)
          break
      }
    }
  }
	transform(x){
	  return{
	    transform: x,
	    OTransform: x,
	    msTransform: x,
	    WebkitTransform: x,

	  }
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextState !== this.state
	}
  componentDidMount(){
      window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount(){
      window.removeEventListener('keydown', this.handleKeyDown)
  }
  render(){
    return(
      <div id='menu'>
        <div id='left' className='col xx12 s3 xx-np xx-ng' onTouchStart={this.handleTouchStart} onTouchMove={this.menuLeftTouchMove} >
          <ul style={this.transform(`translateX(${this.state.menuLeftBoxWheel}px)`)}>
						{menu.menuTitle.map((menuItem, key) =>
							this.state.menuIndex === menuItem.id
								? <li key={key} className='xx-dark-text-shadow' style={{borderColor: 'white'}}>{menuItem.title}</li>
								: <li key={key} className='xx-dark-text-shadow' style={{borderColor: 'transparent'}} onClick={this.menuSelect.bind(this, menuItem.id)}>{menuItem.title}</li>

						)}
          </ul>
        </div>
        <div id='right' className='col xx12 s9 xx-np xx-ng' ref='right' onTouchStart={this.handleTouchStart} onTouchMove={this.menuRightTouchMove}>
          <div id='rightBox' onWheel={this.menuRightWheel} ref='rightBox' style={this.transform(`translateY(${this.state.menuRightBoxWheel}px)`)}>
            {menu.menuText[this.state.menuIndex]}
          </div>
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
	menu: PropTypes.shape({
    menuDisplay: PropTypes.bool,
  }).isRequired
}
