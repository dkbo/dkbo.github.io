init = 
  y: 0
  touchStart: {}
  touchEnd: {}
  wheel: 0
  arrow: document.getElementsByClassName('arrow')
  screen: [
    {
      id: 'main'
      x: 0
      y: 0
    }
    {
      id: 'about'
      x: 0
      y: 1
    }
    {
      id: 'skill'
      x: 0
      y: 2
    }
    {
      id: 'works'
      x: 0
      y: 3
    }
    {
      id: 'contact'
      x: 0
      y: 4
    }
  ]
for x in init.screen
  init.screen[x.y].box = document.getElementById(x.id)
scroll = (x)->
  if init.y + x  >= 0 && init.y + x <=4
    init.y += x 
    i = 0
    while i<init.screen.length
      j = (init.screen[i].y - init.y)*100 + '%'
      init.screen[i].box.style.transform = "translate3d(0,"+j+",0)"
      i++
getTouchPos = (e) ->
  {
    x: e.changedTouches[0].clientX
    y: e.changedTouches[0].clientY
  }
move = (start,end) ->
  x = end.x - start.x
  y = end.y - start.y
  if x > 50 && x > y && x > -y
    scroll(-1) 
  if y > 50 && y > x && y > -x
    scroll(-1)
  if x < -50 && -x > y && -x > -y  
    scroll(1)
  if y < -50 && -y > x && -y > -x
    scroll(1)
  return      
window.document.addEventListener 'keyup', (e) ->
  if e.keyCode == 37 || e.keyCode == 38
    scroll(-1)
  if e.keyCode == 39 || e.keyCode == 40
    scroll(1)
  return

window.document.addEventListener 'touchstart', (e) ->
  init.touchStart = getTouchPos(e)
  return
, false
window.document.addEventListener 'touchend', (e) ->
  init.touchEnd = getTouchPos(e)
  move(init.touchStart,init.touchEnd)
  return
, false

mousewheelevt= if (/Firefox/i.test(navigator.userAgent))  then "DOMMouseScroll" else "mousewheel"

if (document.attachEvent)
    document.attachEvent "on"+mousewheelevt, (e) ->
      init.wheel = if e.detail then e.detail*(-120) else e.wheelDelta
      e.preventDefault()
      if init.wheel > 0 then  scroll(-1) else scroll(1)
      return  
else if (document.addEventListener)
    document.addEventListener mousewheelevt, (e) ->
      init.wheel = if e.detail then e.detail*(-120) else e.wheelDelta
      e.preventDefault()
      if init.wheel > 0 then  scroll(-1) else scroll(1)
      return
    , false
document.querySelector("span[move='about']").addEventListener 'click',->
  scroll(1)
document.querySelector("span[move='skill']").addEventListener 'click',->
  scroll(2)
document.querySelector("span[move='works']").addEventListener 'click',->
  scroll(3)
document.querySelector("span[move='contact']").addEventListener 'click',->
  scroll(4)

