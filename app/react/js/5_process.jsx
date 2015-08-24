init.events=[];
init.firstCanvas=[];
init.secondCanvas=[];
init.move=[];

//預先載入物件
for(var j =0;j <init.objects.length;j++){
init.firstCanvas[j]=[];
init.secondCanvas[j]=[];
  var yy = 0;
  var zz = 0;
for(var i =0;i<init.objects[j].styles.length;i++){
var obj = init.objects[j].styles[i];  
var y={
    left :  obj.l,
    top : obj.t,
    width : obj.w,
    height : obj.h,
    background : obj.b,
    sourceX: obj.x,
    sourceY: obj.y,
   }
   if(obj.z == 2){
init.firstCanvas[j][yy]=y;
    yy+=1
  }
  else{
init.secondCanvas[j][zz]=y;
  zz+=1
  }
}
}
for(var j =0;j <init.objects.length;j++){
  init.events[j]=[];
init.move[j]=[];
  var xx = 0;
  var ee = 0;
for(var i =0;i<init.objects[j].isMove.length;i++){
var obj = init.objects[j].isMove[i];
  var x={
    sx :  obj.x,
    sy : obj.y,
    ex : obj.w + obj.x,
    ey : obj.h + obj.y,
    cm : obj.cm,
    cmm : obj.cmm
   }
  init.move[j][xx]=x;
    xx+=1;
  if(obj.e>=0){
    var e={
    sx :  obj.x,
    sy : obj.y,
    ex : obj.w + obj.x,
    ey : obj.h + obj.y,
    ev : obj.e
   }
    init.events[j][ee]=e;
    ee+=1
  }
}
}
