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
    return {
      loadProcess : true,
      indexShow : 0,  //進場畫面透明度
      indexBoxShow : 0, //進場畫面選單透明度
      loadBoxShow : 0, //進場畫面載入選單透明度
      indexBox : 0,  //進場畫面選單位置
      //場景圖及物件陣列
      map : {
              index : 0,
              bg : null,
              col : 0,
              row : 0
            },
      windowWidth: window.innerWidth, //視窗寬度
      windowHeight: window.innerHeight, //視窗高度
      gridX : false, // X 格線
      gridY : false, // Y 格線
      x : init.man.initPos.x, //人物 X 座標
      y : init.man.initPos.y, //人物 Y 座標 
      left : init.man.initPos.x-1, //人物 X 座標位移
      top : init.man.initPos.y-1, //人物 Y 座標位移
      manMoveImg: 0,  //人物移動方向 
      manMoveAnimate: 0, //人物移動動作
      mapSizeX : 1, //地圖 X 大小
      mapSizeY : 1, //地圖 Y 大小
      mapLeft: 0, //地圖 X 位移
      mapTop: 0, //地圖 Y 位移
      mapAnimateSpeed: "0s", //地圖轉場速度
      mapFade : 0, //地圖轉場效果
      mapZindex: -1, //地圖前後層
      isMoveLeft: this.getMoveLUPoint(this.getWindowWidth()), //地圖左位移點
      isMoveRight: this.getMoveRDPoint(this.getWindowWidth()), //地圖右位移點
      isMoveUp: this.getMoveLUPoint(this.getWindowHeight()), //地圖上位移點
      isMoveDown: this.getMoveRDPoint(this.getWindowHeight()), //地圖下位移點
      chatOpacity : 0, //對話框透明度
      chatSelectArray : [], //對話框選項
      chatSelectIndex : -1, //對話框節點
      messageId : -1, //對話人 ID
      message: '', //當前對話框內文字
      messageName: false, // 當前對話人
      messageNum: -1, //對話計次
      messageMax: -1, //對話最大計次
      menuIndex : 0,
      menuDisplay : false,
      menuRightBoxWheel: 0,
      menuLeftBoxWheel: 0
    }
  },

  // 事件處理
  event : function(x){
    //判斷是否對話中
    if(this.state.messageId !=-1){
      //判斷對話計次有無小於對話最大計次
      if(this.state.messageMax > this.state.messageNum){
      var x = this.state.messageNum +1
      this.setState({messageNum : x,message: <p>{init.event[this.state.messageId].text[x]}</p> });
      }
      else
        this.initEvent();
        }
    else{
      this.setState({messageId : x ,chatOpacity : 1,message: <p>{init.event[x].text[0]}</p>,messageName:init.event[x].name,messageNum:0,messageMax:init.event[x].text.length-1});
    }
  },
  eventSelect : function(x){
    //判斷是否對話中
    if(this.state.messageId !=-1){
      //判斷對話計次有無小於對話最大計次
      if(this.state.messageMax > this.state.messageNum){
    this.setState({messageNum : this.state.messageNum+1})
    this.setState({message:<p>{init.event[x].select[this.state.chatSelectIndex].text[this.state.messageNum]}</p>});    
      }
      else
        this.initEvent();
    }
    else{
      var array = [];
      for(var i=0;i<init.event[x].select.length;i++){ 
        array.push({id: i, title : init.event[x].select[i].title})
      }
      this.setState({chatSelectIndex : 0 ,chatSelectArray : array,messageId : x ,chatOpacity : 1,messageName:init.event[x].name,message:''})
    }
  },
  handleChat : function(e){
      this.moveAnimate();
  },
  handleEventSelect : function(i){
    if(this.state.messageNum == -1)
        this.setState({chatSelectArray :[],message:<p>{init.event[this.state.messageId].select[i].text[0]}</p>,messageNum:0,messageMax:init.event[this.state.messageId].select[i].text.length-1}); 
    else{      
      this.eventSelect(this.state.messageId)
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
  // 視窗改變時，返回改變人物位置及地圖 X 座標位移點
  getResizeManPosX : function(){
    if(window.innerWidth - init.maps.col < 0){
    if(this.state.x > this.getMoveRDPoint(this.getWindowWidth())){
      var x = Math.floor(window.innerWidth/2 - this.state.x - init.man.sizeX/2);
      if(window.innerWidth >  x + init.maps.col)
        x =  window.innerWidth - init.maps.col;
      if(x % init.man.moveSpeed != 0)
        x -=  (x % init.man.moveSpeed)
        return x
    }
    else
      return 0
      }
    else {
      var x = (window.innerWidth - init.maps.col)/2 
      return x
    }
  },
  // 視窗改變時，返回改變人物位置及地圖 Y 座標位移點
  getResizeManPosY : function(){
    if(window.innerHeight - init.maps.row <0){
    if(this.state.y > this.getMoveRDPoint(this.getWindowHeight())){
      var  y = Math.floor(window.innerHeight/2 - this.state.y - init.man.sizeY/2);
    if(window.innerHeight >  y + init.maps.row)
        y =  window.innerHeight - init.maps.row;
      if(y % init.man.moveSpeed != 0)
        y = y - (y % init.man.moveSpeed)
      return y
    }
    else
      return 0
      }
    else{
      var x =(window.innerHeight - init.maps.row)/2;
      return x
    }
  },
  // 判斷人物是否可移動或是更換場景地圖
 isMove : function(posX,posY){
   this.state.chatOpacity ? this.initEvent() : null;
   var x = init.move ?init.move : 0;
   var y = init.npc ? init.npc : 0;
   var ismove = true;
   for(var i = 0 ; i < x.length;i++){
     if((x[i].sx <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= x[i].ex) && (x[i].sy <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= x[i].ey)){
          if(x[i].cm>=0) this.handleMap(x[i].cm,x[i].cmm)
          ismove = false;
     }
   }
   if(y){
    for(var i = 0 ; i < y.length;i++){
      if((y[i].pX <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= y[i].w+y[i].pX) && (y[i].pY+24 <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= 1+24+y[i].pY))
        ismove = false;
   }
  } 
      return ismove
  },
  // 判斷有無事件
 isEvents : function(posX,posY){
   var x = init.events;  
   var y = init.npc ? init.npc : 0;
   if(this.state.messageId == -1){
   for(var i = 0 ; i < x.length;i++){  
     if((x[i].sx <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= x[i].ex) && (x[i].sy <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= x[i].ey)){
        if(init.event[x[i].ev].select){    
          this.eventSelect(x[i].ev);
        }
        else
          this.event(x[i].ev);
     }
   }
   if(y){
    for(var i = 0 ; i < y.length;i++){
      if((y[i].pX <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= y[i].w+y[i].pX) && (y[i].pY+24 <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= 1+24+y[i].pY))
        if(init.event[y[i].e].select){    
          this.eventSelect(y[i].e);
        }
        else
          this.event(y[i].e);
     }
   } 
   }
   else{
    if(this.state.chatSelectIndex > -1)
      this.handleEventSelect(this.state.chatSelectIndex);
    else
      this.event(this.state.messageId);
   }
  },
  // 初始化事件狀態
  initEvent : function(callback){
    this.setState(
     {chatOpacity : 0,
      messageId : -1,
      messageNum: -1,
      messageMax: -1,
      chatSelectIndex : -1,
      chatSelectArray: []})
      if(callback && typeof(callback) === "function")
        callback()
  },
  // 當鍵盤按鍵按下時
  handleKeyDown : function(e){
    e.preventDefault()
    // 判斷是否已經 Start
    if(this.state.mapZindex != -1  ){
      if(this.state.chatSelectArray.length ==0 && !this.state.menuDisplay){
        switch(e.keyCode){
          // 人物左移
          case 37:
              init.control.left = true;
              break;
          case 65:
              init.control.left = true; 
              break;
          // 人物右移
          case 39:
              init.control.right = true;
              break;
          case 68:
              init.control.right = true; 
              break;
          // 人物上移
          case 38:
              init.control.up = true;
              break;
          case 87:
              init.control.up = true;
              break;
          // 人物下移
          case 40:
              init.control.down = true;
              break;
          case 83:
              init.control.down = true;
              break;
          // 直接切換場景
          case 48:
              this.handleMap(1,0);
              break;
          case 49:
              this.handleMap(this.state.map.index,0);
              break;
          // 顯示X取消格線
          case 88:
             this.drawGridX();
             break;
          // 顯示Y取消格線
          case 89:
             this.drawGridY();
             break;
          // 返回進場畫面
          case 32:
             this.moveAnimate();
              break;
          case 13:
              this.moveAnimate();
              break;
          case 27:
             this.initEvent();
             this.ShowMenu();
             break;
      } 
    }
    else if(this.state.menuDisplay){
          switch(e.keyCode){
            case 27:
              this.initEvent();
              this.ShowMenu();
              break;
            case 38:
              this.handleMenuIndexMove(-1);
              break;
            case 87:
              this.handleMenuIndexMove(-1);
              break;
 
            case 40:
              this.handleMenuIndexMove(1);
              break;
            case 83:
              this.handleMenuIndexMove(1);
              break;      
          }
    }
    else{
        // 對話框選取
        switch(e.keyCode){
          case 38:
              this.chatSelectMove(-1);
              break;
          case 87:
              this.chatSelectMove(-1);
              break;
 
          case 40:
              this.chatSelectMove(1);
              break;
          case 83:
              this.chatSelectMove(1);
              break;
          //選取對話框選項
          case 32:
              this.moveAnimate();
              break;
          case 13:
              this.moveAnimate();
              break;
          // 取消對話框選取
          case 27:
             this.initEvent();
             break;
      }
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

    }    
  },
ShowMenu: function(){
  this.setState({menuDisplay : !this.state.menuDisplay})
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
  this.AjaxLoad(x,function(){
  this.setState({map : init.maps,
                 left : init.maps.in[y].x -1,
                 top : init.maps.in[y].y -1,
                 x : init.maps.in[y].x,
                 y : init.maps.in[y].y})
  this.handleResize();
  this.drawObject(function(){
      this.setState({mapFade : 1})
    }.bind(this));
}.bind(this));
},
//處理進場畫面至 Map 畫面事件
handleStart : function(){
    this.AjaxLoad(this.state.map.index,function(){
     this.setState({mapZindex : 1 , indexBoxShow : 0,indexShow : 0,map:init.maps});
     this.handleResize();
  this.drawObject(function(){ 
    init.menuNav = true;
      this.setState({mapFade : 1})

    }.bind(this));
  }.bind(this));
},
AjaxLoad : function(cm,callback){
    this.setState({mapFade : 0})
    $.ajax({
    url: init.mapUrl[cm],
    dataType: 'json',
    error: function(xhr) {
      console.log("Ajax Error");
    },
    success: function(response) {
      $.getScript(init.evtUrl[cm]);
      init.maps = response.map;
      init.npc  = response.npc;
      this.AjaxProcessObject(response.styles);
      this.AjaxProcessMove(response.isMove,function(){
      if(callback && typeof(callback)=== "function")
        callback();
    });
      }.bind(this)
    });
},
AjaxProcessObject : function(objs){
init.firstCanvas.length = 0;
init.secondCanvas.length = 0;
  var yy = 0;
  var zz = 0;
for(var i =0;i<objs.length;i++){
var obj = objs[i];  
var l = init.preImg.length;
var c = false;
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
init.firstCanvas[yy]=y;
    yy+=1
  }
  else{
init.secondCanvas[zz]=y;
  zz+=1
  }
  for(var k=0;k<l;k++){
    if(init.preImg[k] == obj.b)
      c = true;
  }
  if(!c)
      init.preImg.push(obj.b)
}
},
AjaxProcessMove : function(objs , callback){
  init.move.length = 0;
  init.events.length = 0;
  var xx = 0;
  var ee = 0;
for(var i =0;i<objs.length;i++){
    var obj = objs[i];
    var x={
    sx :  obj.x,
    sy : obj.y,
    ex : obj.w + obj.x,
    ey : obj.h + obj.y,
    cm : obj.cm,
    cmm : obj.cmm
   }
  init.move[xx]=x;
    xx+=1;
  if(obj.e>=0){
    var e={
    sx :  obj.x,
    sy : obj.y,
    ex : obj.w + obj.x,
    ey : obj.h + obj.y,
    ev : obj.e
   }
    init.events[ee]=e;
    ee+=1
  }
  if(objs.length-i == 1 && callback && typeof(callback)==="function")
    callback();
}
},
//返回進場畫面
backIndex : function(){
    this.setState({mapZindex : -1 , indexBoxShow : 1,indexShow : 1,loadProcess: false,mapFade : 0})
},
//處理進場畫面選單移動
handleIndexBoxMove : function(x){
   if(this.state.indexBox + x > 2)
    x = (this.state.indexBox + x)% 3
   else{
    x =this.state.indexBox +x
    if(x == -1)
     x = 2
   }
   this.setState({indexBox : x})
},
handleMenuIndexMove : function(x){
  var val = x + this.state.menuIndex;
   if( val >= 0 && val < init.menuTitle.length){
   this.menuSelect(val);
}
},
chatSelectMove : function(x){
  var val = x + this.state.chatSelectIndex;
   if( val >= 0 && val < this.state.chatSelectArray.length){
   this.setState({chatSelectIndex : val});
}
},
handleLoad : function(){
  this.backIndex();
},
//所有DOM 載入前 
componentWillMount : function(){
},
//所有DOM 已經載入時
componentDidMount: function () {
    var canvas = document.getElementById('grid');
    var playerCanvas = document.getElementById('player');
    var firstCanvas = document.getElementById('firstCanvas');
    var secondCanvas = document.getElementById('secondCanvas');
    init.context = canvas.getContext('2d');
    init.fcontext = firstCanvas.getContext('2d');
    init.scontext = secondCanvas.getContext('2d');
    init.player =  playerCanvas.getContext('2d');
    $(window).on('load',this.handleLoad);
    $(window).on('resize',this.handleResize);
    $(window).on('keydown',this.handleKeyDown);
    $(window).on('keyup',this.handleKeyUp);
    $.ajaxSetup({cache: false});
    this.timer = requestAFrame(this.move.bind(this));
  },
//所有DOM將移除時
 componentWillUnmount : function(){
    $(window).off('resize',this.handleResize);
    $(window).off('keydown',this.handleKeyDown);
    $(window).off('keyup',this.handleKeyUp);
    cancelAFrame(this.timer);
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

  if(this.state.mapFade != 0){ 
  var pos = this.getTouchPos(e);
  init.startTouch.x = pos.x;
  init.startTouch.y = pos.y
}
},
//返回觸碰移動時 XY 座標
handleTouchMove : function(e){
  e.preventDefault();
  if(this.state.mapFade != 0 && !this.state.menuDisplay){
  var pos = this.getTouchPos(e);
  if(pos.x-init.startTouch.x < -25)
    init.control.left = true
  else{
    init.control.left = false
    init.map.left = false
  }
  if(pos.x-init.startTouch.x > 25)
    init.control.right = true
  else{
    init.control.right = false
    init.map.right = false
  }
  if(pos.y-init.startTouch.y < -25)
    init.control.up = true
  else{
    init.control.up = false
    init.map.up = false
  }
  if(pos.y-init.startTouch.y > 25)
    init.control.down = true
  else{
    init.control.down = false
    init.map.down = false
  }
}
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
menuRightTouchMove : function(e){
    e.preventDefault();
    var pos = this.getTouchPos(e);
    var rw = React.findDOMNode(this.refs.right).clientHeight;
    var rbw = React.findDOMNode(this.refs.rightBox).clientHeight;
    var y = pos.y-init.startTouch.y;
    var x = rbw + (this.state.menuRightBoxWheel +  y);
    init.startTouch = pos;  
    if( x > rw && this.state.menuRightBoxWheel +y <= 0)
    this.setState({menuRightBoxWheel: this.state.menuRightBoxWheel+y});
},
menuLeftTouchMove : function(e){
    if(e.view.innerWidth < 768 ){
    e.preventDefault()
    var pos = this.getTouchPos(e);
    var x = pos.x-init.startTouch.x;
    init.startTouch = pos;
    if(this.state.menuLeftBoxWheel + x <= 0)
    this.setState({menuLeftBoxWheel: this.state.menuLeftBoxWheel+x});
  }
},
preLoadImg : function(callback){
  var l = init.preImg.length;
  for(var i=0;i<init.preImg.length;i++){
    var img = new Image();
    img.onload = function(){ 
        if(--l <= 0)
          callback();   
      };  
      img.src = init.preImg[i];
  }
},
drawObject : function(callback){
  this.preLoadImg(function(){
  init.fcontext.clearRect(0, 0, init.maps.col, init.maps.row);
  init.scontext.clearRect(0, 0, init.maps.col, init.maps.row);
var imageObj = new Image();
var s = this.state;
var f = init.firstCanvas;
var ff = init.secondCanvas;
for(var i=0 ;i<f.length;i++){
  imageObj.src = f[i].background;
  init.fcontext.drawImage(imageObj, f[i].sourceX , f[i].sourceY , f[i].width, f[i].height ,f[i].left, f[i].top , f[i].width, f[i].height);     
}
for(var i=0 ;i<ff.length;i++){
  imageObj.src = ff[i].background;
  init.scontext.drawImage(imageObj, ff[i].sourceX , ff[i].sourceY , ff[i].width, ff[i].height, ff[i].left, ff[i].top, ff[i].width, ff[i].height );     
}
if(callback && typeof(callback) ==="function")
  callback();
}.bind(this));
},
//畫格線或取消格線
drawGridX : function(){
  if(!this.state.gridX){

    init.context.beginPath();
      for(var i=1;i<(init.maps.col/init.object.sizeX);i++){
      init.context.moveTo(i*init.object.sizeX,init.object.sizeY);
      init.context.lineTo(i*init.object.sizeX,init.maps.row);
      init.context.font = 'italic .5em Calibri';
      init.context.textAlign = 'center';
      init.context.fillText(i*init.object.sizeX, i*init.object.sizeX, 20);
    }
      init.context.stroke();
}
  else{
      init.context.clearRect(0, 0, init.maps.col, init.maps.row);
  }
  this.setState({gridX : !this.state.gridX});
},
drawGridY : function(){
  if(!this.state.gridY){
    init.context.beginPath();
      for(var j=1;j<(init.maps.row/init.object.sizeY);j++){
      init.context.moveTo(init.object.sizeX,j*init.object.sizeY);
      init.context.lineTo(init.maps.col,j*init.object.sizeY);
      init.context.font = 'italic .5em Calibri';
      init.context.textAlign = 'center';
      init.context.fillText(j*init.object.sizeY, 20, j*init.object.sizeY+4);
    }
      init.context.stroke();
  }
      else{
      init.context.clearRect(0, 0, init.maps.col, init.maps.row);
  }
  this.setState({gridY : !this.state.gridY});
},
//人物移動動作
moveAnimate : function(){
  switch(this.state.manMoveImg){
           case 1:
            this.isEvents(this.props.left,0);
            break;
           case 2:
            this.isEvents(this.props.right,0);
            break;
           case 3:
            this.isEvents(0,this.props.up);
            break;
           case 0:
            this.isEvents(0,this.props.down);
            break; 
         }
},
//人物移動事件
move : function(){
  var c = this.state;
  if(c.mapFade){
    init.player.clearRect(0,0,init.maps.col, init.maps.row);
  var p = this.props;
  var ctl = init.control;
  var map = init.map;
  if(ctl.left || ctl.right || ctl.up || ctl.down){
    if(!init.man.spriteSpeed)
    this.setState({manMoveAnimate: (c.manMoveAnimate+1)%4});
    init.man.spriteSpeed < init.man.spriteSpeedCount ? init.man.spriteSpeed++ : init.man.spriteSpeed=0;
  }
  if(ctl.left)
    this.setState({manMoveImg: 1});
  if(ctl.right)
    this.setState({manMoveImg: 2});
  if(ctl.up)
    this.setState({manMoveImg: 3});
  if(ctl.down)
    this.setState({manMoveImg: 0});
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
  if(ctl.right && (init.maps.col-(init.man.sizeX*c.mapSizeX)) > c.x){
    var isR = this.isMove(p.right,0);
    if(isR){
    this.setState({x:c.x + p.right,left: p.right * c.mapSizeX + c.left});
    if((c.mapSizeX*init.maps.col  + c.mapLeft > c.windowWidth ) && (c.isMoveRight - c.mapLeft == c.x))
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
  if(ctl.down && (init.maps.row-(init.man.sizeY*c.mapSizeY)) > c.y){
    var isD = this.isMove(0,p.down);
    if(isD){
    this.setState({y:c.y+p.down,top: p.down * c.mapSizeY+c.top});
    if((c.mapSizeY*init.maps.row  + c.mapTop > c.windowHeight ) && (c.isMoveDown - c.mapTop == c.y))
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
  init.player.drawImage(init.man.sprite,  this.state.manMoveAnimate*init.man.sizeX, this.state.manMoveImg*init.man.sizeY , init.man.sizeX, init.man.sizeY ,this.state.x, this.state.y , init.man.sizeX, init.man.sizeY);
  }
  this.timer = requestAFrame(this.move.bind(this));
},
menuItem : function(menuItem) {
    if(this.state.menuIndex == menuItem.id)
      return <li className="xx-dark-text-shadow" style={{borderColor : "white"}}>{menuItem.title}</li>;
    else
      return <li className="xx-dark-text-shadow" style={{borderColor : "transparent"}}onClick={this.menuSelect.bind('null',menuItem.id)}>{menuItem.title}</li>;
},
menuSelect : function(x){
 this.setState({menuIndex : x , menuRightBoxWheel : 0});
},
indexBox : function(item) {
    if(this.state.indexBox == item.id){
      if(item.id == 0)
        return <li style={{borderColor : "white"}} onClick={this.handleStart}>{item.title}</li>;
      else
        return <li style={{borderColor : "white"}} >{item.title}</li>;
    }
    else{
      if(item.id == 0)
        return <li onClick={this.handleStart} style={{borderColor : "transparent"}} onMouseOver={this.indexBoxSelect.bind('null',item.id)}>{item.title}</li>;
      else
        return <li style={{borderColor : "transparent"}} onMouseOver={this.indexBoxSelect.bind('null',item.id)}>{item.title}</li>;
}
},
indexBoxSelect : function(x){
 this.setState({indexBox : x});
},
chatArray : function(item) {
    if(this.state.chatSelectIndex == item.id)
      return <li style={{borderColor : "white"}}>{item.title}</li>;
    else
      return <li style={{borderColor : "transparent"}} onMouseOver={this.chatSelect.bind('null',item.id)}>{item.title}</li>;
},
chatSelect : function(x){
 this.setState({chatSelectIndex : x});
},
menuRightWheel : function(e){
  var scrollSpeed = 32;
  var delta = e.deltaY  > 0  ? e.deltaY : -e.deltaY;
  var rw = React.findDOMNode(this.refs.right).clientHeight;
  var rbw = React.findDOMNode(this.refs.rightBox).clientHeight;
  var x = rbw + (this.state.menuRightBoxWheel - scrollSpeed*(e.deltaY / delta))  
  var y = -scrollSpeed *e.deltaY / delta +this.state.menuRightBoxWheel
 if( x +scrollSpeed >  rw && y <= 0)
  this.setState({menuRightBoxWheel : y})
},
//生成所有DOM
  render : function (){
    var s = this.state;
   return (
     <div  id="container" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
     {s.mapZindex == -1  ?
      <div id="index" style={{opacity : s.indexShow}}>
        <div id="indexBox"  style={{opacity : s.indexBoxShow}}>
          <ul>
            {init.indexBox.map(this.indexBox)}
          </ul>
        </div>
        <Loadbox style={{opacity : s.loadBoxShow}} />
      </div>
      : null }  
      <div id="map"  style={{opacity : s.mapFade ,zIndex : s.mapZindex ,background: s.map.bg,WebkitTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", msTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", transform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)",width: s.mapSizeX*s.map.col,height: s.mapSizeY*s.map.row}} >
        <canvas id="grid" width={s.map.col} height={s.map.row} />
        <canvas id="firstCanvas" width={s.map.col} height={s.map.row} />      
        <Npc  x={s.x} y={s.y} width={s.map.col} height={s.map.row}  />
        <canvas id="player" width={s.map.col} height={s.map.row} />
        <canvas id="secondCanvas" width={s.map.col} height={s.map.row} /> 
      </div>
      { init.menuNav ?<nav id="menunav" className="s-hide">
        <ul>
          <li onClick={this.ShowMenu}>選單</li>
        </ul>
     </nav>: null}
     {s.mapZindex != -1  ?<div className="chat" onClick={this.handleChat} style={{opacity: s.chatOpacity}}>{s.messageName} : {s.message}<ul>{s.chatSelectArray.map(this.chatArray)}</ul></div> : null}
     {s.menuDisplay ? <Menu>
        <div id="left" className="col xx12 s3 xx-np xx-ng" onTouchMove={this.menuLeftTouchMove} >
          <ul style={{WebkitTransform : "translateX("+s.menuLeftBoxWheel+"px)",msTransform : "translateX("+s.menuLeftBoxWheel+"px)",transform : "translateX("+s.menuLeftBoxWheel+"px)" }}>
            {init.menuTitle.map(this.menuItem)}
          </ul>
        </div>
        <div id="right" className="col xx12 s9 xx-np xx-ng" ref="right" onTouchMove={this.menuRightTouchMove}><div id="rightBox" onWheel={this.menuRightWheel} ref="rightBox" style={{WebkitTransform : "translateY("+s.menuRightBoxWheel+"px)",msTransform : "translateY("+s.menuRightBoxWheel+"px)",transform : "translateY("+s.menuRightBoxWheel+"px)" }}>{init.menuText[s.menuIndex]}</div></div>
     </Menu> : null}
     {s.loadProcess ? <Load /> : null }
     <PreLoadImg />
     </div>
   ) 
  }
});
var Menu = React.createClass({
    render : function(){
      return(
        <div id="menu">
          { this.props.children }
        </div>
        )
    }
});
var PreLoadImg = React.createClass({
  handleLoadImg : function(Img){
  return <img src={Img} />;
},
  render : function(){
    return (
      <div style={{display: "none"}}>
        {init.preImg.map(this.handleLoadImg)}
      </div>
  )
  }
});
var Loadbox = React.createClass({
  render : function(){
    return(
    <div id="loadBox" style={this.props.style}></div>
  )
  }
});
var Disqus = React.createClass({
componentDidMount: function () {
      this.addDisqus();
},
componentWillUnmount: function () {
     this.removeDisqus();
},
addDisqus: function () {
      $("body").append("<script id='disqus' type='text/javascript' src='//dkbo-rpg.disqus.com/embed.js' async='true'></script>");
        
},
removeDisqus: function () {
      $("#disqus").remove();
},
render: function () {
        return (
          <div>
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
          </div>
        );
    }
});
var Load = React.createClass({
  getDefaultProps: function() {
    var x = [];
    for(var i=0; i < 12;i++){
    x.push(<div></div>);
  }
    return {
      load : x
    }
  },
  render : function(){
    
    return(
    <div  id="load" style={this.props.style} >{this.props.load}</div>
  )
  }
});
