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
console.log(window.cancelAnimationFrame)
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
 mapUrl : mapUrl(),
 maps : null,
 startTouch:{
    x : 0,
    y : 0
 },
 menuNav: false,
 preImg : [],
 objects : [],
 events : [],
 firstCanvas : [],
 secondCanvas : [],
 move : [],
 npc : [],
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

function mapUrl(){
  var os = "objects/"
  var o  = "_obj";
  var id = ["0000","0001","0002","0003"];
  var type = ".json";
  var maps = id.map(function(arr){
      return os+arr+o+type
  })
  return maps
}

// 事件內容 Event Message
init.event = [
            // Map 0
            [
              { name : "稻草人",
                text : [
                          ".",
                          "..",
                          "..."
                       ]
              },
              { name : "哆拉樹",
                text : [ 
                          "大家好!","我被作者配置在樹下所以我叫做哆拉樹。",
                          "作者說以前有玩過一些用 RPG 製作大師所製成的遊戲，但是從來沒有親自開發過。",
                          "現在作者想做一份線上履歷來介紹自己，以 RPG 製作大師的風格來實作!",
                          "因作者並不會美編，所以場景布置的不好看也請多多見諒。",
                          <span>還不知道如何操作的話請按<kbd>ESC</kbd></span>,
                          "如果你是行動裝置的話請觸碰左上角的選單按鈕。"
                       ]
              },
              { name : "古文碑",
                select : [
                           { 
                             id : 0,
                             title : "世界形成之初",
                             text : [ 
                                      "此石碑記載著這個世界的創立因素，上面留有密密麻麻的文字....","世界形成之初，有著 HTML 、 CSS 、 JavaScrit",
                                      "ReactJs、Jquery 是 JavaScirpt 的兒子，祂們能把世界毀滅亦可重生。",
                                      "Sass 是 Css 的女兒，在這個世界中，任何事情都逃不過牠的法眼。",
                                      "而 HTML 則是這世界的別名。",
                                      "在一次的 Gulp 協議中，JavaScript 及 Css 達成共識，決定讓自己的孩子在 HTML 中歷練。",
                                      "於是 ReactJs、Jquery、Sass 攜手打造了這個世界。"
                                    ]
                           },
                           { 
                              id : 1,
                              title : "關於作者",
                              text : [ 
                                      <span>作者本名叫 盧宏寶 在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，<del>目前已婚有一子</del></span>
                                    ]
                           }
                         ]
              },
              { name : "哆拉撞",
                text : [ 
                          "作者太笨啦! NPC 碰撞有一堆 BUG，害我撞來撞去的。",
                          <span>如果人物卡住了就按 <kbd>0</kbd> 或 <kbd>1</kbd>直接傳送走吧!</span>
                       ]
              }
            ],
            // Map 1
            [
              { name : "哆拉花",
                text : [
                          "這屋子種了不少花!",
                          "下班之後，看看一下花花草草能適度的釋壓。"
                       ]
              },
              { name : "哆拉花角",
                text : [
                          "我是第一個會走的 NPC 唷"
                       ]
              }
            ],
            // Map 2
            [
              { name : "哆拉工",
                text : [
                          "用老闆做的編輯器隔間二樓，雖然比以前快多了!但還是很累人呢。",
                          "過陣子外面也要重整一下了"
                       ]
              }
            ],
            // Map 3
            [
              { name : "哆拉空",
                text : [
                          "2樓今晚隔間好嚕，之後就可以慢慢擺設了。"
                       ]
              }
            ]
          ];