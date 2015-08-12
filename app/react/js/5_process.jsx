init.events=[];
init.style=[];
init.move=[];

//預先載入物件
for(var j =0;j <init.objects.length;j++){
  init.events[j]=[];
init.style[j]=[];
init.move[j]=[];
  var xx = 0;
  var yy = 0;
  var ee = 0;
for(var i =0;i<init.objects[j].styles.length;i++){
var obj = init.objects[j].styles[i];
  if(obj.mx){
  var x={
    sx :  obj.mx,
    sy : obj.my,
    ex : obj.mw + obj.mx,
    ey : obj.mh + obj.my,
    cm : obj.cm,
    cmm : obj.cmm
   }

  init.move[j][xx]=x;
    xx+=1;
  }
  if(obj.left){
var y={
    left :  obj.left,
    top : obj.top,
    width : obj.width,
    height : obj.height,
    background : obj.background,
    zIndex : obj.zIndex,
    cursor : obj.cursor
   }
init.style[j][yy]=y;
    yy+=1
}
  if(obj.eventID>=0){
    var e={
    sx :  obj.mx,
    sy : obj.my,
    ex : obj.mw + obj.mx,
    ey : obj.mh + obj.my,
    ev : obj.eventID
   }
    init.events[j][ee]=e;
    ee+=1
  }
}
}
//物件放入陣列
init.arr=[];
for(var j =0;j<init.style.length;j++){
  init.arr[j]=[];
for(var i =0;i<init.style[j].length;i++){
    init.arr[j][i] =<div className="objects" name={init.objects[j].styles[i].name} style={init.style[j][i]}></div>;
        
}
}