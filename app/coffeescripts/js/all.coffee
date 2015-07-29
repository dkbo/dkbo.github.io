init = 
  y: 0
  touchStart: {}
  touchEnd: {}
  wheel: 0
  works: {
            id:document.getElementById('works_box')
            class : document.getElementsByClassName('works')
            maxBox: 0
            x: 0
          }
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

for x in init.works.class
  j = init.works.maxBox*100+"%"
  x.style.transform = "translate3d("+j+",0,0)"
  init.works.maxBox +=1

init.works.id.style.width = init.works.maxWidth+"px"

for x in init.screen
  init.screen[x.y].box = document.getElementById(x.id)
works = (x)->
  if init.works.x + x < init.works.maxBox && init.works.x + x >= 0
    j = -x*100+"%"
    init.works.class[init.works.x].style.transform = "translate3d("+j+",0,0)" 
    init.works.x += x
    init.works.class[init.works.x].style.transform = "translate3d(0,0,0)"   
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
  if y > 50 && y > x && y > -x
    scroll(-1) 
  if y < -50 && -y > x && -y > -x
    scroll(1)
  if init.y == 3
    if x > 50 && x > y && x > -y
      works(-1)
    if x < -50 && -x > y && -x > -y  
      works(1)
  return      
window.document.addEventListener 'keyup', (e) ->
  if e.keyCode == 38
    scroll(-1)
  if e.keyCode == 40
    scroll(1)
  if init.y == 3
    if e.keyCode == 37
      works(-1)
    if e.keyCode == 39
      works(1)

window.document.addEventListener 'touchstart', (e) ->
  e.preventDefault()
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