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
    bg : "url('images/bg.jpg')",
    left : false,
    up : false,
    right : false,
    down : false,
 }
}