init = 
  x: 0
  y: 0
  touchStart: {}
  touchEnd: {}
  arrow: document.getElementsByClassName('arrow')
  screen: [
    {
      id: 'main'
      x: 0
      y: 0
    }
    {
      id: 'skill'
      x: 0
      y: 1
    }
    {
      id: 'work'
      x: 1
      y: 0
    }
    {
      id: 'contact'
      x: 0
      y: -1
    }
    {
      id: 'about'
      x: -1
      y: 0
    }
  ]
x = 0
while x < init.screen.length
  init.screen[x].box = document.getElementById(init.screen[x].id)
  x++
left = ->
   if init.x == 0 and init.y == 0
      init.screen[4].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(100%,0,0)"
      init.screen[4].box.style.transform = "translate3d(0,0,0)"
      init.screen[0].box.style.transform = "translate3d(100%,0,0)"
      init.x = -1
   else if init.x == init.screen[2].x
      init.screen[2].box.style.webkitTransform = "translate3d(100%,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[2].box.style.transform = "translate3d(100%,0,0)"
      init.screen[0].box.style.transform = "translate3d(0,0,0)"
      init.x = 0
up = ->
   if init.x == 0 and init.y == 0
      init.screen[1].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(0,100%,0)"
      init.screen[1].box.style.transform = "translate3d(0,0,0)"
      init.screen[0].box.style.transform = "translate3d(0,100%,0)"
      init.y = 1
   else if init.y == init.screen[3].y
      init.screen[3].box.style.webkitTransform = "translate3d(0,100%,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[3].box.style.transform = "translate3d(0,100%,0)"
      init.screen[0].box.style.transform = "translate3d(0,0,0)"
      init.y = 0
right = ->
   if init.x == 0 and init.y == 0
      init.screen[2].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(-100%,0,0)"
      init.screen[2].box.style.transform = "translate3d(0,0,0)"
      init.screen[0].box.style.transform = "translate3d(-100%,0,0)"
      init.x = 1
   else if init.x == init.screen[4].x
      init.screen[4].box.style.webkitTransform = "translate3d(-100%,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[4].box.style.transform = "translate3d(-100%,0,0)"
      init.screen[0].box.style.transform = "translate3d(0,0,0)"
      init.x = 0
down = ->
  if init.x == 0 and init.y == 0
      init.screen[3].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(-0,-100%,0)"
      init.screen[3].box.style.transform = "translate3d(0,0,0)"
      init.screen[0].box.style.transform = "translate3d(-0,-100%,0)"
      init.y= -1
    else if init.y == init.screen[1].y
      init.screen[1].box.style.webkitTransform = "translate3d(-0,-100%,0)"
      init.screen[0].box.style.webkitTransform = "translate3d(0,0,0)"
      init.screen[1].box.style.transform = "translate3d(-0,-100%,0)"
      init.screen[0].box.style.transform = "translate3d(0,0,0)"
      init.y = 0
getTouchPos = (e) ->
  {
    x: e.changedTouches[0].clientX
    y: e.changedTouches[0].clientY
  }
move = (start,end) ->
  x = end.x - start.x
  y = end.y - start.y
  if x > 50 && x > y && x > -y
    left() 
  if y > 50 && y > x && y > -x
    up()
  if x < -50 && -x > y && -x > -y  
    right()
  if y < -50 && -y > x && -y > -x
    down()
  return      
window.document.addEventListener 'keyup', (e) ->
  if e.keyCode == 37
    left() 
  if e.keyCode == 38
    up()
  if e.keyCode == 39
    right()
  if e.keyCode == 40
    down()
  return
document.querySelector("span[move='up']").addEventListener('click',up)
document.querySelector("span[move='down']").addEventListener('click',down)
document.querySelector("span[move='left']").addEventListener('click',left)
document.querySelector("span[move='right']").addEventListener('click',right)
window.document.addEventListener 'touchstart', (e) ->
  init.touchStart = getTouchPos(e)
  return
, false
window.document.addEventListener 'touchend', (e) ->
  init.touchEnd = getTouchPos(e)
  move(init.touchStart,init.touchEnd)
  return
, false
