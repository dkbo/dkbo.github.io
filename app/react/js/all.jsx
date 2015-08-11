/** @jsx React.DOM */
// init

var init = {
  object:{
    sizeX : 32, // sprites width size 
    sizeY : 32, // sprites height size
    sprites :"url('images/rpg_maker_xp.png')"
  },
  man : {
    sprite : "url('images/man.png')",
    speak : "url('images/speak.png'),pointer",
    sizeX: 32, //人物寬度度
    sizeY: 48, //人物長度
    moveSetInterVal: 1000/60,  // FPS
    moveSpeed: 4, // 移動速度
    initPos : {
      x : 640, //  % moveSpeed = 0
      y : 800, // % moveSpeed = 0
    }
  },
  control :{  // 判斷移動
    left : false, 
    up : false,
    right : false,
    down : false,
  },
  map :{  // 判斷地圖位移動
    left : false,
    up : false,
    right : false,
    down : false,
 }
}
var sX = init.object.sizeX;
var sY = init.object.sizeY;
init.objects=[{
  
  styles : [{name:"largetree",id:0,left: 800,top:200,width:8*sX,height:7*sY,background: init.object.sprites+" 0 -1056px",zIndex : 2},
            {name:"largetree",id:0,left: 800,top:424,width:8*sX,height:3*sY,background: init.object.sprites+" 0 -1280px",mx:800+sX*3,my:392,mw:2*sX,mh:sY*2},
            {name:"tree1",id:1,left: 400,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree1",id:1,left: 400,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:400+sX,my:1028,mw:2*sX,mh:0},
           {name:"house",id:2,left: 400,top:300,width:3*sX,height:6*sY,background: init.object.sprites+" 0 -5216px",zIndex : 2,mx:400,my:300+2*sY,mw:7*sX,mh:sY*5},
            {name:"house",id:2,left: 400,top:492,width:3*sX,height:sY*2,background: init.object.sprites+" 0 -5408px",zIndex : 0,mx:400,my:300+2*sY,mw:7*sX,mh:sY*4},
            
            {name:"house",id:2,left: 492,top:300,width:sX,height:6*sY,background: init.object.sprites+" -64px -5216px",zIndex : 2},
            {name:"house",id:2,left: 524,top:300,width:sX,height:7*sY,background: init.object.sprites+" -64px -5216px",zIndex : 2},
            {name:"house",id:2,left: 556,top:300,width:sX,height:6*sY,background: init.object.sprites+" -96px -5216px",zIndex : 2},
            {name:"house",id:2,left: 588,top:300,width:sX,height:7*sY,background: init.object.sprites+" -128px -5216px",zIndex : 2},
            {name:"house",id:2,left: 588,top:524,width:sX,height:sY,background: init.object.sprites+" -128px -5440px"},
            {name:"housedoor",id:2,left: 492,top:492,width:sX,height:2*sY,background: init.object.sprites+" -96px -5408px",mx:492,my:492,mw:sX,mh:sY,cm:1,cmm : 0},
            {name:"house",id:2,left: 556,top:492,width:sX,height:sY,background: init.object.sprites+" -64px -5408px"},
            {name:"house",id:2,left: 556,top:524,width:sX,height:sY,background: init.object.sprites+" -64px -5440px"},
            {name:"house",id:2,left: 524,top:524,width:sX,height:sY,background: init.object.sprites+" -64px -5440px"},
            {name:"wood",id:2,left: 524,top:524,width:2*sX,height:2*sY,background: init.object.sprites+" -192px -4672px",mx:524,my:524,mw:2*sX,mh:sY*1}
            ,
            {name:"fence",id:3,left: 400,top:624,width:sX,height:2*sY,background: init.object.sprites+" -32px -4480px",mx:400,my:624+sY,mw:10*sX,mh:0}
            ,
            {name:"fence",id:3,left: 432,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400+12*sX,my:624+sY,mw:8*sX,mh:0}
            ,
            {name:"fence",id:3,left: 464,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400,my:848+sY,mw:20*sX,mh:0}
            ,
            {name:"fence",id:3,left: 496,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400,my:624+sY,mw:sX/2,mh:7*sY}
            ,
            {name:"fence",id:3,left: 528,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:1004+sX/2,my:624+sY,mw:sX/4,mh:7*sY}
            ,
            {name:"fence",id:3,left: 560,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 592,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 624,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 656,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 688,top:624,width:sX,height:2*sY,background: init.object.sprites+" -192px -4480px"}
            ,
            {name:"fence",id:3,left: 784,top:624,width:sX,height:2*sY,background: init.object.sprites+" -224px -4480px"}
            ,
            {name:"fence",id:3,left: 816,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 848,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 880,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 912,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 944,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 976,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 1008,top:624,width:sX,height:2*sY,background: init.object.sprites+" -96px -4480px"},
            {name:"fence",id:3,left: 400,top:848,width:sX,height:2*sY,background: init.object.sprites+" -32px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 432,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 464,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 496,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 528,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 560,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 592,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 624,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 656,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 688,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 720,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 752,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 784,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 816,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 848,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 880,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 912,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 944,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 976,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 1008,top:848,width:sX,height:2*sY,background: init.object.sprites+" -96px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 400,top:656,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:688,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:720,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:752,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:784,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:816,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:848,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"},
            {name:"fence",id:3,left: 1008,top:656,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:688,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:720,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:752,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:784,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:816,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"farmland",id:4,left: 464,top:728,width:3*sX,height: 3*sY,background: init.object.sprites+" -32px -5056px"}
            ,
            {name:"farmland",id:4,left: 624,top:728,width:3*sX,height: 3*sY,background: init.object.sprites+" -32px -5056px"}
             ,
            {name:"bogy",id:5,left: 578,top:728,width:sX,height: sY,background: init.object.sprites+" -96px -4994px",zIndex:2, mx : 578,my:728+sY,mw:sX,mh: sY/4,eventID:0,cursor: init.man.speak}
            ,
            {name:"bogy",id:5,left: 578,top:760,width:sX,height: sY,background: init.object.sprites+" -96px -5026px",cursor: init.man.speak}
            ,
            {name:"crop",id:5,left: 464,top:760,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"},
            {name:"crop",id:5,left: 496,top:740,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 528,top:752,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 624,top:760,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 656,top:752,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 688,top:740,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,{name:"tree2",id:6,left: 592,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree2",id:6,left: 592,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:592+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree3",id:7,left: 784,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree3",id:7,left: 784,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:784+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree4",id:8,left: 976,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree4",id:8,left: 976,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:976+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree5",id:9,left: 496,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree5",id:9,left: 496,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:496+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree6",id:10,left: 688,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree6",id:10,left: 688,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:688+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree7",id:11,left: 880,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree7",id:11,left: 880,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:880+sX,my:1092,mw:2*sX,mh:0}
            ,
            {name:"man",id:12,left: 810,top:490,width:sX,height: 24,background: init.man.sprite+" 0 0",zIndex: 2,mx: 810,my:490+sY,mw:sX,mh:0,cursor: init.man.speak ,eventID:1}
             ,
            {name:"man",id:12,left: 810,top:514,width:sX,height: 24,background: init.man.sprite+" 0 -24px",cursor: init.man.speak }
            ,
            {name:"stone",id:13,left: 980,top:448,width:sX*2,height: sY*2,background: init.object.sprites+" -192px -1664px",zIndex: 2,cursor: init.man.speak}
             ,
            {name:"stone",id:13,left: 980,top:512,width:sX*2,height: sY*1,background: init.object.sprites+" -192px -1728px",cursor: init.man.speak,mx: 980,my:512,mw:sX*2,mh:0 ,eventID:2}
            
]},{
  styles:[{name:"housedoor",id:1,left: 224,top:320,width:sX*2,height: sY,background: "green",mx:224,my:320,mw:sX*2,mh:sY,cm:0,cmm:0},
         {name:"man",id:12,left: 200,top:144,width:sX,height: 24,background: init.man.sprite+" 0 0",zIndex: 2,mx: 200,my:144+sY,mw:sX,mh:0,cursor: init.man.speak ,eventID:0}
             ,
            {name:"man",id:12,left: 200,top:168,width:sX,height: 24,background: init.man.sprite+" 0 -24px",cursor: init.man.speak }
            ]
}]

// 事件內容 Event Message
init.event=[[
  {name : "稻草人",
   text:[".","..","..."]
  },
  {name : "哆拉樹",
   text:["大家好!","我被作者配置在樹下所以我叫做哆拉樹。","作者說以前有玩過一些用 RPG 製作大師所製成的遊戲，但是從來沒有親自開發過。","現在作者想做一份線上履歷來介紹自己，以 RPG 製作大師的風格來實作!","因作者並不會美編，所以場景布置的不好看也請多多見諒。"]
  },
  {name : "古文碑",
   text:["此石碑記載著這個世界的創立因素，上面留有密密麻麻的文字....","世界形成之初，有著 HTML 、 CSS 、 JavaScrit 三神","ReactJs、Jquery 是 JavaScirpt 的兒子","Sass 是 Css 的女兒","而 HTML 再一次大戰中不幸受傷，為了回饋 JavaScript","HTML 以自身神力輔助 JavaScript ...."]
  }
],[
  {name : "哆拉空",
   text:["這屋子好空啊!該擺些甚麼東西呢!"]
  }
]];
init.maps =[{
    bg : "url('http://dkbo.tw/bg.jpg')",
    col : 1920,
    row : 1280,
  in :[{
      x : 488,
      y : 544
    }]
  },{
    bg : "url('http://dkbo.tw/bg.jpg')",
    col : 480,
    row : 320,
  in :[{
      x : 240,
      y : 260
    }]
  }
  ]
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
// 根
var Root = React.createClass({
    getDefaultProps: function() {
    return {
      min : 1,
      left : -init.man.moveSpeed, //人物向左移動速度
      right : init.man.moveSpeed, //人物向右移動速度
      up : -init.man.moveSpeed,  //人物向上移動速度
      down: init.man.moveSpeed //人物向下移動速度
    }
  },
   getInitialState : function(){
     var pos = init.man.initPos;
    return {
      indexShow : 0,  //進場畫面透明度
      indexBoxShow : 0, //進場畫面選單透明度
      loadBoxShow : 0, //進場畫面載入選單透明度
      indexBox : 0,  //進場畫面選單位置
      start : "white", // 進場畫面選單 Start 顏色 
      load : "transparent",  // 進場畫面選單 Load 顏色 
      end : "transparent",  // 進場畫面選單 End 顏色 
      map : 0, //場景圖及物件陣列
      mapBg : "url('http://dkbo.tw/bg.jpg')", // 場景地圖 
      grid : [], //格線
      windowWidth: window.innerWidth, //視窗寬度
      windowHeight: window.innerHeight, //視窗高度
      x : pos.x, //人物 X 座標
      y : pos.y, //人物 Y 座標 
      left : pos.x-1, //人物 X 座標位移
      top : pos.y-1, //人物 Y 座標位移
      manMoveImg: 0,  //人物移動方向 
      manMoveAnimate: 0, //人物移動動作
      mapSizeX : 1, //地圖 X 大小
      mapSizeY : 1, //地圖 Y 大小
      mapLeft: this.getManPosX(), //地圖 X 位移
      mapTop: this.getManPosY(), //地圖 Y 位移
      mapAnimateSpeed: "0s", //地圖轉場速度
      mapFade : 0, //地圖轉場效果
      mapZindex: -1, //地圖前後層
      isMoveLeft: this.getMoveLUPoint(this.getWindowWidth()), //地圖左位移點
      isMoveRight: this.getMoveRDPoint(this.getWindowWidth()), //地圖右位移點
      isMoveUp: this.getMoveLUPoint(this.getWindowHeight()), //地圖上位移點
      isMoveDown: this.getMoveRDPoint(this.getWindowHeight()), //地圖下位移點
      StartTouchX : 0, //手機平板裝置觸碰接收 X 座標
      startTouchY : 0, //手機平板裝置觸碰接收 Y 座標
      chatOpacity : 0, //對話框透明度
      chatZindex : -1, //對話框前後層
      messageId : -1, //對話人 ID
      message: '', //當前對話框內文字
      messageName: false, // 當前對話人
      messageNum: -1, //對話計次
      messageMax: -1 //對話最大計次
    }
  },

  // 事件處理
  event : function(x){
    //判斷是否對話中
    if(this.state.messageId !=-1){
      //判斷對話計次有無小於對話最大計次
      if(this.state.messageMax > this.state.messageNum){
    this.setState({messageNum : this.state.messageNum+1})
    this.setState({message:init.event[this.state.map][x].text[this.state.messageNum]});    
      }
      else
        this.initEvent();
        }
    else{
      this.setState({messageId : x ,chatOpacity : 1,chatZindex : 2,message:init.event[this.state.map][x].text[0],messageName:init.event[this.state.map][x].name,messageNum:0,messageMax:init.event[this.state.map][x].text.length-1}); 
    }
  },
  // 返回當前視窗寬度
  getWindowWidth : function(){
    return window.innerWidth
  },
  // 返回當前視窗高度
  getWindowHeight : function(){
    return window.innerHeight
  },
  // 返回當前地圖左 或 上 位移點
  getMoveLUPoint : function(x){
    return Math.floor(x/4) - Math.floor(x/4) % init.man.moveSpeed
  },
  // 返回當前地圖右 或 下 位移點
  getMoveRDPoint : function(x){
    return Math.floor(x/4*3) - Math.floor(x/4*3) % init.man.moveSpeed
  },
  // 返回初始人物位置及地圖 X 座標位移點
  getManPosX : function(){
    if(init.man.initPos.x > this.getMoveRDPoint(this.getWindowWidth())){
      var x= Math.floor(window.innerWidth/2 - init.man.initPos.x - init.man.sizeX/2);
      if(x % init.man.moveSpeed != 0)
        x = x - (x % init.man.moveSpeed)
        return x
    }
    else
      return 0
  },
  // 返回初始人物位置及地圖 Y 座標位移點
  getManPosY : function(){
    
    if(init.man.initPos.y > this.getMoveRDPoint(this.getWindowHeight())){
      var  y = Math.floor(window.innerHeight/2 - init.man.initPos.y - init.man.sizeY/2);
      if(y % init.man.moveSpeed != 0)
        y = y - (y % init.man.moveSpeed);
      return y
    }
    else
      return 0
  },
  // 視窗改變時，返回改變人物位置及地圖 X 座標位移點
  getResizeManPosX : function(){
    if(window.innerWidth - init.maps[this.state.map].col < 0){
    if(this.state.x > this.getMoveRDPoint(this.getWindowWidth())){
      var x= Math.floor(window.innerWidth/2 - this.state.x - init.man.sizeX/2);
      if(x % init.man.moveSpeed != 0)
        x = x - (x % init.man.moveSpeed)
        return x
    }
    else
      return 0
      }
    else {
      var x = (window.innerWidth - init.maps[this.state.map].col)/2 
      return x
    }
  },
  // 視窗改變時，返回改變人物位置及地圖 Y 座標位移點
  getResizeManPosY : function(){
    if(window.innerHeight - init.maps[this.state.map].row <0){
    if(this.state.y > this.getMoveRDPoint(this.getWindowHeight())){
      var  y = Math.floor(window.innerHeight/2 - this.state.y - init.man.sizeY/2);
      if(y % init.man.moveSpeed != 0)
        y = y - (y % init.man.moveSpeed)
      return y
    }
    else
      return 0
      }
    else{
      var x =(window.innerHeight - init.maps[this.state.map].row)/2;
      return x
    }
  },
  // 判斷人物是否可移動或是更換場景地圖
 isMove: function(posX,posY){
   this.initEvent();
   var x = init.move[this.state.map] ?init.move[this.state.map] : 0
   var ismove = true;
   for(var i = 0 ; i < x.length;i++){
     if((x[i].sx <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= x[i].ex) && (x[i].sy <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= x[i].ey)){
          if(x[i].cm>=0) this.handleMap(x[i].cm,x[i].cmm)
          ismove = false;
     }
   }
      return ismove
  },
  // 判斷有無事件
 isEvents: function(posX,posY){
   var x = init.events[this.state.map]; 
   
   if(this.state.messageId ==-1){
   for(var i = 0 ; i < x.length;i++){  
     if((x[i].sx <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= x[i].ex) && (x[i].sy <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= x[i].ey)){
          this.event(x[i].ev);
     }
   }
   }
   else{
     this.event(this.state.messageId);
   }
  },
  // 初始化事件狀態
  initEvent : function(){
    this.setState(
     {chatOpacity : 0,
      chatZindex : -1,
      messageId : -1,
      message: '',
      messageName: false,
      messageNum: -1,
      messageMax: -1});
  },
  // 當鍵盤按鍵按下時
  handleKeyDown : function(e){
    e.preventDefault()
    // 判斷是否已經 Start
    if(this.state.mapZindex != -1){
    switch(e.keyCode){
      // 人物左移
      case 37:
          init.control.left = true
          break;
      case 65:
          init.control.left = true 
          break;
      // 人物右移
      case 39:
          init.control.right = true
          break;
      case 68:
          init.control.right = true 
          break;
      // 人物上移
      case 38:
          init.control.up = true
          break;
      case 87:
          init.control.up = true
          break;
      // 人物下移
      case 40:
          init.control.down = true
          break;
      case 83:
          init.control.down = true
          break;
      // 直接切換場景
      case 48:
          this.handleMap(0,0)
          break;
      case 49:
          this.handleMap(1,0)
          break;
  } 
   }
  else{
      switch(e.keyCode){
      // 進場選單標題 上 下 w d 鍵選擇    
      case 38:
          this.handleIndexBoxMove(-1);
          break;
      case 87:
          this.handleIndexBoxMove(-1);
          break;
      case 40:
          this.handleIndexBoxMove(1);
          break;
      case 83:
          this.handleIndexBoxMove(1);
          break;
    }
      //判斷是否選擇了 Start 
      if(this.state.indexBox == 0){
         // 空白鍵 或 Enter
         switch(e.keyCode){
            case 32:
             this.handleStart();
             break;
            case 13:
             this.handleStart();
             break;
      }
     }
   }
  },
//鍵盤彈起後
handleKeyUp : function(e){
 e.preventDefault()
    // 取消人物移動
    switch(e.keyCode){
      case 37:
          this.leftStopMove()
          break;
      case 65:
          this.leftStopMove()
          break;
      case 39:
          this.rightStopMove()
          break;
      case 68:
          this.rightStopMove()
          break;
      case 38:
          this.upStopMove()
          break;
      case 87:
          this.upStopMove()
          break;
      case 40:
          this.downStopMove()
          break;
      case 83:
          this.downStopMove()
          break;
      case 32:
         this.moveAnimate();
         break;
      case 13:
         this.moveAnimate();
         break;
      // 顯示/取消格線
      case 71:
         this.drawGrid();
         break;
      // 返回進場畫面
      case 27:
         this.backIndex();
         break;
    }    
  },
// 取消人物及地圖左移
leftStopMove : function(){
          init.control.left = false
          init.map.left = false
},
// 取消人物及地圖右移
rightStopMove : function(){
          init.control.right = false
          init.map.right = false
},
// 取消人物及地圖上移
upStopMove : function(){
          init.control.up = false
          init.map.up = false
},
// 取消人物及地圖下移
downStopMove : function(){
          init.control.down = false
          init.map.down = false
},
//處理視窗大小改變時的事件
handleResize : function(){
  this.setState({windowWidth: this.getWindowWidth(),
                 windowHeight: this.getWindowHeight(),
                 isMoveLeft: this.getMoveLUPoint(this.getWindowWidth()),
                 isMoveRight: this.getMoveRDPoint(this.getWindowWidth()),
                 isMoveUp: this.getMoveLUPoint(this.getWindowHeight()),
                 isMoveDown: this.getMoveRDPoint(this.getWindowHeight()),
                 mapLeft: this.getResizeManPosX(),
                 mapTop: this.getResizeManPosY()})
},
//處理地圖事件
handleMap : function(x,y){
  this.handleAnimateSpeed(".1s");
  this.handleFade(0);
  setTimeout(function(){this.setState({map : x,
                 left : init.maps[x].in[y].x -1,
                 top : init.maps[x].in[y].y -1,
                 x : init.maps[x].in[y].x,
                 y : init.maps[x].in[y].y})
  this.handleResize();
                       }.bind(this), 100);
  setTimeout(function(){this.handleFade(1)}.bind(this), 200);
  setTimeout(function(){this.handleAnimateSpeed("0s")}.bind(this),300);
  
},
//處理地圖浮出浮入事件
handleFade : function (x){
  this.setState({mapFade : x})
},
//處理地圖動畫速度事件
handleAnimateSpeed : function (x){
  this.setState({mapAnimateSpeed : x})
},
//處理進場畫面至 Map 畫面事件
handleStart : function(){
    this.setState({mapZindex : 1 , indexBoxShow : 0,indexShow : 0})
    setTimeout(function(){this.handleFade(1)}.bind(this), 200);
},
//返回進場畫面
backIndex : function(){
    this.setState({mapZindex : -1 , indexBoxShow : 1,indexShow : 1})
    setTimeout(function(){this.handleFade(0)}.bind(this), 200);
},
//處理進場畫面選單移動
handleIndexBoxMove : function(x){
  switch(this.state.indexBox){
     case 0:
       this.setState({start : 'transparent'})
       break
     case 1:
       this.setState({load : 'transparent'})
       break
     case 2:
       this.setState({end : 'transparent'})
       break
   }
   if(this.state.indexBox + x > 2)
    x = (this.state.indexBox + x)% 3
   else{
    x =this.state.indexBox +x
    if(x == -1)
     x = 2
   }
   console.log(x)
   switch(x){
     case 0:
       this.setState({indexBox : x,start : 'white'})
       break
     case 1:
       this.setState({indexBox : x,load : 'white'})
       break
     case 2:
       this.setState({indexBox : x,end : 'white'})
       break
   }
},
//所有DOM 載入前 
componentWillMount : function(){
},
//所有DOM 已經載入時
componentDidMount: function () {
    $(window).on('load',this.backIndex);
    $(window).on('resize',this.handleResize);
    $(window).on('keydown',this.handleKeyDown);
    $(window).on('keyup',this.handleKeyUp);
    $(".object").on('click',"div[style*='cursor']",this.moveAnimate);
    this.timer = setInterval(this.move.bind(this), init.man.moveSetInterVal);
  },
//所有DOM將移除時
 componentWillUnmount : function(){
    
    $(window).off('resize',this.handleResize);
    $(window).off('keydown',this.handleKeyDown);
    $(window).off('keyup',this.handleKeyUp);
    $(".object").off('click',this.moveAnimate);
    clearInterval(this.timer)
  },
//返回平板 / 手機裝置的 XY 座標
getTouchPos : function(e){
  return {
    x: e.changedTouches[0].pageX,
    y: e.changedTouches[0].pageY
  }
},
//返回觸碰時 XY 座標
handleTouchStart : function(e){
  var pos = this.getTouchPos(e);
  this.setState({startTouchX : pos.x, startTouchY: pos.y})
},
//返回觸碰移動時 XY 座標
handleTouchMove : function(e){
  var pos = this.getTouchPos(e);
  if(pos.x-this.state.startTouchX < -50)
    init.control.left = true
  else{
    init.control.left = false
    init.map.left = false
  }
  if(pos.x-this.state.startTouchX > 50)
    init.control.right = true
  else{
    init.control.right = false
    init.map.right = false
  }
  if(pos.y-this.state.startTouchY < -50)
    init.control.up = true
  else{
    init.control.up = false
    init.map.up = false
  }
  if(pos.y-this.state.startTouchY > 50)
    init.control.down = true
  else{
    init.control.down = false
    init.map.down = false
  }
 return false
},
//處理觸碰結束時事件
handleTouchEnd : function(e){
  init.control.left = false;
  init.map.left = false;
  init.control.right = false;
  init.map.right = false;
  init.control.up = false;
  init.map.up = false;
  init.control.down = false;
  init.map.down = false;
},
//利用 DIV 畫格線或取消格線
drawGrid : function(){
  if(this.state.grid.length == 0){
    var grid = [];
  for(var j =0;j<(init.maps[this.state.map].row/init.object.sizeY);j++){
  grid.push(<div className="grid" style={{width: init.maps[this.state.map].col , height:init.object.sizeY , left: 0 , top: init.object.sizeY*j}} >{j*init.object.sizeY}</div>)
}
for(var i =0;i<(init.maps[this.state.map].col/init.object.sizeX);i++){
  grid.push(<div className="grid" style={{width: init.object.sizeX , height:init.maps[this.state.map].row , top: 0 , left: init.object.sizeX*i}} >{init.object.sizeX*i}</div>)
                 }
  this.setState({grid : grid})
  }
  else
  this.setState({grid : []})
},
//人物移動動作
moveAnimate : function(){
  switch(this.state.manMoveImg){
           case 3:
            this.isEvents(this.props.left,0);
            break;
           case 2:
            this.isEvents(this.props.right,0);
            break;
           case 1:
            this.isEvents(0,this.props.up);
            break;
           case 4:
            this.isEvents(0,this.props.down);
            break; 
         }
},
//人物移動事件
move : function(){
  var c = this.state;
  var p = this.props;
  var ctl = init.control;
  var map = init.map;
  if(ctl.left || ctl.right || ctl.up || ctl.down)
    this.setState({manMoveAnimate: (c.manMoveAnimate+1)%4});
  if(ctl.left)
    this.setState({manMoveImg: 3});
  if(ctl.right)
    this.setState({manMoveImg: 2});
  if(ctl.up)
    this.setState({manMoveImg: 1});
  if(ctl.down)
    this.setState({manMoveImg: 4});
  if(ctl.left && c.x > p.min ){
    var isL = this.isMove(p.left,0);
     if(isL){
    this.setState({x:c.x+ p.left,left: p.left*c.mapSizeX+c.left});
    if((c.mapLeft !=0 ) && (c.isMoveLeft - c.mapLeft == c.x))
      map.left = true;
    else
      map.left = false;
    }
    else
      map.left = false;
  }
  if(ctl.right && (init.maps[this.state.map].col-(init.man.sizeX*c.mapSizeX)) > c.x){
    var isR = this.isMove(p.right,0);
    if(isR){
    this.setState({x:c.x + p.right,left: p.right * c.mapSizeX + c.left});
    if((c.mapSizeX*init.maps[this.state.map].col  + c.mapLeft > c.windowWidth ) && (c.isMoveRight - c.mapLeft == c.x))
      map.right = true;
    else
      map.right = false;     
  }
    else
      map.right = false; 
  }
  if(ctl.up &&  c.y > p.min){
    var isU = this.isMove(0,p.up);
    if(isU){ 
    this.setState({y:c.y+p.up,top: p.up * c.mapSizeY+c.top});
    if((c.mapTop !=0 ) && (c.isMoveUp - c.mapTop == c.y))
      map.up = true;
    else
      map.up = false;
    }
    else
      map.up = false;
  }
  if(ctl.down && (init.maps[this.state.map].row-(init.man.sizeY*c.mapSizeY)) > c.y){
    var isD = this.isMove(0,p.down);
    if(isD){
    this.setState({y:c.y+p.down,top: p.down * c.mapSizeY+c.top});
    if((c.mapSizeY*init.maps[this.state.map].row  + c.mapTop > c.windowHeight ) && (c.isMoveDown - c.mapTop == c.y))
      map.down = true;
    else
      map.down = false; 
  }
    else
      map.down = false;
  }
  if(map.left)
    this.setState({mapLeft: c.mapLeft-p.left});
  if(map.right)
    this.setState({mapLeft: c.mapLeft-p.right});
  if(map.up){
    this.setState({mapTop: c.mapTop-p.up});
  }
  if(map.down){
    this.setState({mapTop: c.mapTop-p.down});
  }
},
//生成所有DOM
  render : function (){
    var s = this.state;
    var m = init.maps;
   return (
     <body>
      <div id="index" style={{opacity : s.indexShow}}>
        <div id="indexBox"  style={{opacity : s.indexBoxShow}}>
          <ul>
            <li style={{borderColor : s.start}} onClick={this.handleStart}>START</li>
            <li style={{borderColor : s.load}}>LOAD</li>
            <li style={{borderColor : s.end}}>END</li>
          </ul>
        </div>
        <div id="loadBox"  style={{opacity : s.loadBoxShow}}> </div>
      </div>  
      <div id="map"  style={{zIndex : s.mapZindex , transition:s.mapAnimateSpeed,opacity:s.mapFade,background: m[s.map].bg, transform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)",width: s.mapSizeX*m[s.map].col,height: s.mapSizeY*m[s.map].row}} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
     <div className="man-container" style={{transform : "translate3D("+s.left+"px,"+s.top+"px,0)",width : s.mapSizeX*init.man.sizeX,height : s.mapSizeY*init.man.sizeY,backgroundPosition : s.manMoveAnimate*32+"px "+s.manMoveImg*48+"px"}} ></div>
     <div className="object">{init.arr[s.map]}</div>
     <div className="gridbox">{s.grid}</div>
   </div>
     <div className="chat" onClick={this.moveAnimate} style={{opacity: s.chatOpacity,zIndex : s.chatZindex}}>{s.messageName} : <br />{s.message}</div>
     </body>
   ) 
  }
});

React.render(<Root  />,document.body)
