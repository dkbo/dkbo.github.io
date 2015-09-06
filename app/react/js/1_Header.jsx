var requestAFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
})();
var cancelAFrame = (function () {
    return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
})();
// init
var init = {
  indexBox  : [ 
    {
      id : 0,
      title: "Start"
    },
    {
      id : 1,
      title :"Load"
    },
    {
      id : 2,
      title :"End"
    }
  ],
  object:{
    sizeX : 32, // sprites width size 
    sizeY : 32, // sprites height size
  },
  man : {
    sprite : player(),
    spriteSpeed : 0,
    spriteSpeedCount : 8,
    sizeX: 32, //人物寬度度
    sizeY: 48, //人物長度
    moveSpeed: 4, // 移動速度
    initPos : {
      x : 1000, //  % moveSpeed = 0
      y : 548, // % moveSpeed = 0
    }
  },
  control :{  // 判斷移動
    left : false, 
    up : false,
    right : false,
    down : false,
  },
  map :{  // 判斷地圖位移動
    bg : "url('images/bg.jpg')",
    left : false,
    up : false,
    right : false,
    down : false,
 },
 mapUrl : mapUrl(),
  evtUrl : evtUrl(),
 maps : null,
 startTouch:{
    x : 0,
    y : 0
 },
 preImg : [],
 objects : [],
 events : [],
 firstCanvas : [],
 secondCanvas : [],
 move : [],
 npc : [],
 chatInputSelect:false
}
    // "n": 物件名
    // "l": 物件 X 位置
    // "t": 物件 Y 位置
    // "w": 物件寬度
    // "h": 物件高度
    // "b": 物件來源圖
    // "x": 物件拼圖 X 位置
    // "y": 物件拼圖 Y 位置
    // "z": 物件顯示層 預設為 NULL 或是填入 2

function player(){
  var playerImg = new Image();
    playerImg.src="http://dkbo.github.io/images/man.png";
  return playerImg;

}
function mapUrl(){
  var os = "objects/"
  var o  = "_obj";
  var id = ["0000","0001","0002","0003","0004","0005"];
  var type = ".json";
  var maps = id.map(function(arr){
      return os+arr+o+type
  })
  return maps
}
function evtUrl(){
  var os = "events/"
  var o  = "_obj";
  var id = ["0000","0001","0002","0003","0004","0005"];
  var type = ".js";
  var maps = id.map(function(arr){
      return os+arr+o+type
  })
  return maps
}
function transform(x){
  return{
    transform :x,
    oTransform : x,
    msTransform : x,
    WebkitTransform : x,
    
    
    
  }
}
function handleControl(){
    rt.refs.handle.focus();
    init.chatInputSelect=false;
};