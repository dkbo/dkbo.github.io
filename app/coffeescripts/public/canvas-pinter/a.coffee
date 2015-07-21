canvas = (object) ->
  @canvas = document.getElementById(object.canvasID)
  @ctx = @canvas.getContext('2d')
  @canvas.style.width = if object.styleWidth then object.styleWidth else '100%'
  @canvas.style.height = if object.styleHeight then object.styleHeight else '100%'
  @canvasID = object.canvasID
  @canvas.width = if object.width then object.width else 300
  @canvas.height = if object.height then object.height else 150
  @canvasWidth = @canvas.width
  @canvasHeight = @canvas.height
  return

rgbs = ->
  red = document.getElementById('red').value
  green = document.getElementById('green').value
  blue = document.getElementById('blue').value
  'rgb(' + red + ',' + green + ',' + blue + ')'

colorbox = ->
  color = rgbs()
  document.getElementById('colorbox').style.backgroundColor = color
  return

pendraw = (ctx, x, y) ->
  rgb = rgbs()
  pensize = document.getElementById('pensize').value
  penstyle = document.getElementById('penstyle').value
  ctx.strokeStyle = rgb
  ctx.lineTo x, y
  ctx.lineWidth = pensize
  ctx.lineCap = penstyle
  ctx.stroke()
  return

getMousePos = (canvas, e) ->
  rect = canvas.canvas.getBoundingClientRect()
  {
    x: (e.clientX - (rect.left)) * canvas.canvasWidth / rect.width
    y: (e.clientY - (rect.top)) * canvas.canvasHeight / rect.height
  }

getTouchPos = (canvas, e) ->
  rect = canvas.canvas.getBoundingClientRect()
  {
    x: (e.changedTouches[0].clientX - (rect.left)) * canvas.canvasWidth / rect.width
    y: (e.changedTouches[0].clientY - (rect.top)) * canvas.canvasHeight / rect.height
  }

mousemove = (e) ->
  mousePos = getMousePos(pen, e)
  pendraw pen.ctx, mousePos.x, mousePos.y
  return

touchmove = (e) ->
  touchPos = getTouchPos(pen, e)
  pendraw pen.ctx, touchPos.x, touchPos.y
  return

rgbchange = (i) ->
  input = document.getElementById(rgbinput[i])
  input.addEventListener 'mousedown', (->
    input.addEventListener 'mousemove', colorbox, false
    return
  ), false
  input.addEventListener 'mouseup', (->
    colorbox()
    input.removeEventListener 'mousemove', colorbox, false
    return
  ), false
  input.addEventListener 'touchstart', (->
    colorbox()
    input.addEventListener 'touchmove', colorbox, false
    return
  ), false
  input.addEventListener 'touchend', (->
    input.removeEventListener 'touchmove', colorbox, false
    return
  ), false
  return

pen =
  canvasID: 'canvas'
  width: 900
  height: 450
pen = new canvas(pen)
x = 0
y = 0
pen.canvas.addEventListener 'mousedown', ((e) ->
  move = getMousePos(pen, e)
  pen.ctx.beginPath()
  pen.ctx.moveTo move.x, move.y
  pen.canvas.addEventListener 'mousemove', mousemove, false
  return
), false
pen.canvas.addEventListener 'mouseup', (->
  pen.canvas.removeEventListener 'mousemove', mousemove, false
  return
), false
pen.canvas.addEventListener 'touchstart', ((e) ->
  move = getTouchPos(pen, e)
  pen.ctx.beginPath()
  pen.ctx.moveTo move.x, move.y
  pen.canvas.addEventListener 'touchmove', touchmove, false
  return
), false
pen.canvas.addEventListener 'touchend', (->
  pen.canvas.removeEventListener 'touchmove', touchmove, false
  return
), false
save = document.getElementById('save')
clear = document.getElementById('clear')
save.addEventListener 'click', ->
  img = pen.canvas.toDataURL('image/png')
  save.href = img
  return
clear.addEventListener 'click', ->
  if confirm('Confirm Clear?')
    pen.ctx.clearRect 0, 0, pen.canvasWidth, pen.canvasHeight
  return
colorbox()
rgbinput = [
  'red'
  'green'
  'blue'
]
i = 0
while i < rgbinput.length
  rgbchange i
  i++