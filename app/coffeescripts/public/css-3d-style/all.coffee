space = document.getElementsByClassName('space')
window.addEventListener 'resize', ->
  init()
  
init = (e) ->
  for x in space
    x.setAttribute("style","height: "+x.clientWidth+"px;")
init()

  