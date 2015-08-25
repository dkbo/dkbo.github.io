// init

var init = {
  object:{
    sizeX : 32, // sprites width size 
    sizeY : 32, // sprites height size
  },
  man : {
    sprite : "url('images/man.png')",
    spriteSpeed : 0,
    spriteSpeedCount : 6,
    spriteObj : "images/man.png",
    speak : "url('images/speak.png'),pointer",
    sizeX: 32, //人物寬度度
    sizeY: 48, //人物長度
    moveSetInterVal: 1000/60,  // FPS
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
 startTouch:{
    x : 0,
    y : 0
 },
 menuNav: false,
 preImg : [
  "images/rpg_maker_xp.png",
  "images/rpg_maker_xp2.png",
  "images/man.png"
 ],
 preNewImg:[],
 objects : []
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