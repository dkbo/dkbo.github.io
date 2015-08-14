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
      spritesGird : false,
      spritesOpacity : 0, //布置圖片透明度
      indexShow : 0,  //進場畫面透明度
      indexBoxShow : 0, //進場畫面選單透明度
      loadBoxShow : 0, //進場畫面載入選單透明度
      indexBox : 0,  //進場畫面選單位置
      start : "white", // 進場畫面選單 Start 顏色 
      load : "transparent",  // 進場畫面選單 Load 顏色 
      end : "transparent",  // 進場畫面選單 End 顏色 
      map : 0, //場景圖及物件陣列
      mapBg : init.map.bg, // 場景地圖 
      windowWidth: window.innerWidth, //視窗寬度
      windowHeight: window.innerHeight, //視窗高度
      gridX : false, // X 格線
      gridY : false, // Y 格線
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
      chatSelectArray : [], //對話框選項
      chatSelectIndex : -1, //對話框節點
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
      var x = this.state.messageNum +1
      this.setState({messageNum : x,message: <p>{init.event[this.state.map][this.state.messageId].text[x]}</p> });
      }
      else
        this.initEvent();
        }
    else{
      this.setState({messageId : x ,chatOpacity : 1,message: <p>{init.event[this.state.map][x].text[0]}</p>,messageName:init.event[this.state.map][x].name,messageNum:0,messageMax:init.event[this.state.map][x].text.length-1});
    }
  },
  eventSelect : function(x){
    //判斷是否對話中
    if(this.state.messageId !=-1){
      //判斷對話計次有無小於對話最大計次
      if(this.state.messageMax > this.state.messageNum){
    this.setState({messageNum : this.state.messageNum+1})
    this.setState({message:<p>{init.event[this.state.map][x].select[this.state.chatSelectIndex].text[this.state.messageNum]}</p>});    
      }
      else
        this.initEvent();
    }
    else{
      var array = [];
      for(var i=0;i<init.event[this.state.map][x].select.length;i++){ 
        array.push(<li className="chatSelect"  onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver.bind(null,i)} onClick={this.handleEventSelect.bind(null,i)}>{init.event[this.state.map][x].select[i].title}</li>)
      }
      this.setState({chatSelectIndex : 0 ,chatSelectArray : array,messageId : x ,chatOpacity : 1,messageName:init.event[this.state.map][x].name,message:''})
      $(".chatSelect").eq(this.state.chatSelectIndex).css("border-color" , "white");
    }
  },
  handleMouseChat : function(){
    if(this.state.chatOpacity != 0)
      this.moveAnimate();
  },
  handleTouchChat : function(){
      this.moveAnimate();
  },
  handleEventSelect : function(i){
    if(this.state.messageNum == -1)
        this.setState({chatSelectArray :[],message:<p>{init.event[this.state.map][this.state.messageId].select[i].text[0]}</p>,messageNum:0,messageMax:init.event[this.state.map][this.state.messageId].select[i].text.length-1}); 
    else{      
      this.eventSelect(this.state.messageId)
    }
  },
  chatSelect : function(i){
    if(init.event[this.state.map][this.state.messageId].select.length > this.state.chatSelectIndex + i && this.state.chatSelectIndex + i > -1){
      $(".chatSelect").eq(this.state.chatSelectIndex).css("border-color" , "transParent");
      this.setState({chatSelectIndex: this.state.chatSelectIndex + i})
      $(".chatSelect").eq(this.state.chatSelectIndex).css("border-color" , "white");
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
   if(this.state.messageId == -1){
   for(var i = 0 ; i < x.length;i++){  
     if((x[i].sx <= this.state.x+init.man.sizeX+posX) && (this.state.x+posX <= x[i].ex) && (x[i].sy <= this.state.y+posY+init.man.sizeY) && (this.state.y+posY <= x[i].ey)){
        if(init.event[this.state.map][x[i].ev].select){    
          this.eventSelect(x[i].ev);
        }
        else
          this.event(x[i].ev);
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
  initEvent : function(){
    this.setState(
     {chatOpacity : 0,
      messageId : -1,
      messageNum: -1,
      messageMax: -1,
      chatSelectIndex : -1,
      chatSelectArray: []});
  },
  // 當鍵盤按鍵按下時
  handleKeyDown : function(e){
    e.preventDefault()
    // 判斷是否已經 Start
    if(this.state.mapZindex != -1){
      if(this.state.chatSelectArray.length ==0){
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
                // 顯示X/Y取消格線
          case 71:
             this.drawSpritesGrid();
             break;
          // 顯示X取消格線
          case 88:
             this.drawGridX();
             break;
          // 顯示Y取消格線
          case 89:
             this.drawGridY();
             break;
          // 顯示圖庫
          case 80:
             this.showSprites();
             break;
          // 返回進場畫面
          case 27:
             this.backIndex();
             this.initEvent();
             break;
          case 32:
             this.moveAnimate();
              break;
          case 13:
              this.moveAnimate();
              break;
      } 
    }
    else{
        // 對話框選取
        switch(e.keyCode){
          case 38:
              this.chatSelect(-1);
              break;
          case 87:
              this.chatSelect(-1);
              break;
 
          case 40:
              this.chatSelect(1);
              break;
          case 83:
              this.chatSelect(1);
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
  this.drawObject();
  this.handleResize();
  setTimeout(function(){this.handleFade(1)
    setTimeout(function(){this.handleAnimateSpeed("0s")}.bind(this),100);

  }.bind(this), 100);
 }.bind(this), 100);
  
  
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
    setTimeout(function(){this.handleFade(0)}.bind(this), 300);
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
handleMouseOver : function(x,e){
  if(this.state.mapZindex != -1){
    if(x != this.state.chatSelectIndex)
      $(".chatSelect").eq(this.state.chatSelectIndex).css("border-color" , "transParent");
    e.target.style.borderColor = "white";
    this.setState({chatSelectIndex : x });

  }
  else{
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
 }
},
handleLoad : function(){
  this.backIndex();
  this.drawObject();
  init.spritesHeight = init.sprites.clientHeight
  init.spritesWidth = init.sprites.clientWidth
},
//所有DOM 載入前 
componentWillMount : function(){
},
//所有DOM 已經載入時
componentDidMount: function () {
    var canvas = document.getElementById('grid');
    var firstCanvas = document.getElementById('firstCanvas');
    var secondCanvas = document.getElementById('secondCanvas');
    var spritesCanvas = document.getElementById('spritesOpacity');
    init.sprites = document.getElementById('preimg');
    init.context = canvas.getContext('2d');
    init.fcontext = firstCanvas.getContext('2d');
    init.scontext = secondCanvas.getContext('2d');
    init.spcontext = spritesCanvas.getContext('2d');
    $(window).on('load',this.handleLoad);
    $(window).on('resize',this.handleResize);
    $(window).on('keydown',this.handleKeyDown);
    $(window).on('keyup',this.handleKeyUp);
    $(window).on('touchstart',this.handleTouchStart);
    $(window).on('touchmove',this.handleTouchMove);
    $(window).on('touchend',this.handleTouchEnd);
    this.timer = setInterval(this.move.bind(this), init.man.moveSetInterVal);
  },
//所有DOM將移除時
 componentWillUnmount : function(){
    
    $(window).off('resize',this.handleResize);
    $(window).off('keydown',this.handleKeyDown);
    $(window).off('keyup',this.handleKeyUp);
    $(window).off('touchstart',this.handleTouchStart);
    $(window).off('touchmove',this.handleTouchMove);
    $(window).off('touchend',this.handleTouchEnd);
    clearInterval(this.timer)
  },
//返回平板 / 手機裝置的 XY 座標
getTouchPos : function(e){
  return {
    x: e.originalEvent.touches[0].pageX,
    y: e.originalEvent.touches[0].pageY
  }
},
//返回觸碰時 XY 座標
handleTouchStart : function(e){
  
  if(this.state.mapFade != 0){ 
  var pos = this.getTouchPos(e);
  this.setState({startTouchX : pos.x, startTouchY: pos.y})
}
},
//返回觸碰移動時 XY 座標
handleTouchMove : function(e){

  if(this.state.mapFade != 0){
  e.preventDefault();
  var pos = this.getTouchPos(e);
  if(pos.x-this.state.startTouchX < -25)
    init.control.left = true
  else{
    init.control.left = false
    init.map.left = false
  }
  if(pos.x-this.state.startTouchX > 25)
    init.control.right = true
  else{
    init.control.right = false
    init.map.right = false
  }
  if(pos.y-this.state.startTouchY < -25)
    init.control.up = true
  else{
    init.control.up = false
    init.map.up = false
  }
  if(pos.y-this.state.startTouchY > 25)
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
drawObject : function(){
var imageObj = new Image();
var s = this.state;
var f = init.firstCanvas[s.map];
var ff = init.secondCanvas[s.map];
for(var i=0 ;i<f.length;i++){
  imageObj.src = f[i].background;
  init.fcontext.drawImage(imageObj, f[i].sourceX , f[i].sourceY , f[i].width, f[i].height ,f[i].left, f[i].top , f[i].width, f[i].height);     
}
for(var i=0 ;i<ff.length;i++){
  imageObj.src = ff[i].background;
  init.scontext.drawImage(imageObj, ff[i].sourceX , ff[i].sourceY , ff[i].width, ff[i].height, ff[i].left, ff[i].top, ff[i].width, ff[i].height );     
}
},
drawSpritesGrid : function(){
  if(!this.state.spritesGrid){
  init.spcontext.beginPath();
    for(var i=1;i<(init.spritesWidth/init.object.sizeX);i++){
      init.spcontext.moveTo(i*init.object.sizeX,0);
      init.spcontext.lineTo(i*init.object.sizeX,init.spritesHeight);
    }
    for(var i=1;i<(init.spritesHeight/init.object.sizeY);i++){
      init.spcontext.moveTo(init.object.sizeX,i*init.object.sizeY);
      init.spcontext.lineTo(init.spritesWidth,i*init.object.sizeY);
      init.spcontext.font = 'italic .5em Calibri';
      init.spcontext.textAlign = 'center';
      init.spcontext.fillText(i*init.object.sizeY, 20, i*init.object.sizeY+4);
    }
      init.spcontext.strokeStyle="#ff0000";
      init.spcontext.stroke();
  }
  else{
      init.spcontext.clearRect(0, 0, init.spritesWidth, init.spritesHeight);
}
      this.setState({spritesGrid : !this.state.spritesGrid});
},
//畫格線或取消格線
drawGridX : function(){
  if(!this.state.gridX){

    init.context.beginPath();
      for(var i=1;i<(init.maps[this.state.map].col/init.object.sizeX);i++){
      init.context.moveTo(i*init.object.sizeX,init.object.sizeY);
      init.context.lineTo(i*init.object.sizeX,init.maps[this.state.map].row);
      init.context.font = 'italic .5em Calibri';
      init.context.textAlign = 'center';
      init.context.fillText(i*init.object.sizeX, i*init.object.sizeX, 20);
    }
      init.context.stroke();
}
  else{
      init.context.clearRect(0, 0, init.maps[this.state.map].col, init.maps[this.state.map].row);
  }
  this.setState({gridX : !this.state.gridX});
},
drawGridY : function(){
  if(!this.state.gridY){
    init.context.beginPath();
      for(var j=1;j<(init.maps[this.state.map].row/init.object.sizeY);j++){
      init.context.moveTo(init.object.sizeX,j*init.object.sizeY);
      init.context.lineTo(init.maps[this.state.map].col,j*init.object.sizeY);
      init.context.font = 'italic .5em Calibri';
      init.context.textAlign = 'center';
      init.context.fillText(j*init.object.sizeY, 20, j*init.object.sizeY+4);
    }
      init.context.stroke();
  }
      else{
      init.context.clearRect(0, 0, init.maps[this.state.map].col, init.maps[this.state.map].row);
  }
  this.setState({gridY : !this.state.gridY});
},
showSprites : function(){
  if(this.state.mapFade != 0){
    var x = this.state.spritesOpacity > 0 ? 0 : 1;
    this.setState({spritesOpacity : x})
  }
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
            <li style={{borderColor : s.start}} onMouseOver={this.handleMouseOver.bind('null',0)} onClick={this.handleStart}>START</li>
            <li style={{borderColor : s.load}} onMouseOver={this.handleMouseOver.bind('null',1)}>LOAD</li>
            <li style={{borderColor : s.end}} onMouseOver={this.handleMouseOver.bind('null',2)}>END</li>
          </ul>
        </div>
        <div id="loadBox"  style={{opacity : s.loadBoxShow}}> </div>
      </div>  
      <div id="map"  style={{zIndex : s.mapZindex , transition:s.mapAnimateSpeed,opacity:s.mapFade,background: m[s.map].bg,WebkitTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", msTransform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)", transform : "translate3D("+s.mapLeft+"px,"+s.mapTop+"px,0)",width: s.mapSizeX*m[s.map].col,height: s.mapSizeY*m[s.map].row}} >
     <div className="man-container" style={{WebkitTransform : "translate3D("+s.left+"px,"+s.top+"px,0)",msTransform : "translate3D("+s.left+"px,"+s.top+"px,0)",transform : "translate3D("+s.left+"px,"+s.top+"px,0)",width : s.mapSizeX*init.man.sizeX,height : s.mapSizeY*init.man.sizeY,backgroundPosition : s.manMoveAnimate*32+"px "+s.manMoveImg*48+"px"}} ></div>
     <canvas id="firstCanvas" width={m[s.map].col} height={m[s.map].row} />
     <canvas id="secondCanvas" width={m[s.map].col} height={m[s.map].row} />
     <canvas id="grid" width={m[s.map].col} height={m[s.map].row} />
   </div>
     <div className="chat" onMouseDown={this.handleMouseChat} onTouchStart={this.handleTouchChat} style={{opacity: s.chatOpacity}}>{s.messageName} : {s.message}<ul>{s.chatSelectArray}</ul></div>
     <div id="pre" style={{opacity : s.spritesOpacity}}><img  id="preimg" src={init.object.sprites} /><canvas id="spritesOpacity" width={init.spritesWidth} height={init.spritesHeight}></canvas></div>
     </body>
   ) 
  }
});
React.render(<Root  />,document.body)
