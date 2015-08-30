"use strict";function mapUrl(){var e="objects/",t="_obj",i=["0000","0001","0002","0003"],n=".json",a=i.map(function(i){return e+i+t+n});return a}var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame,init={indexBox:[{id:0,title:"Start"},{id:1,title:"Load"},{id:2,title:"End"}],object:{sizeX:32,sizeY:32},man:{sprite:"url('images/man.png')",spriteSpeed:0,spriteSpeedCount:6,spriteObj:"images/man.png",speak:"url('images/speak.png'),pointer",sizeX:32,sizeY:48,moveSetInterVal:1e3/60,moveSpeed:4,initPos:{x:1e3,y:548}},control:{left:!1,up:!1,right:!1,down:!1},map:{bg:"url('images/bg.jpg')",left:!1,up:!1,right:!1,down:!1},mapUrl:mapUrl(),maps:null,startTouch:{x:0,y:0},menuNav:!1,preImg:[],objects:[],events:[],firstCanvas:[],secondCanvas:[],move:[],npc:[]};init.event=[[{name:"稻草人",text:[".","..","..."]},{name:"哆拉樹",text:["大家好!","我被作者配置在樹下所以我叫做哆拉樹。","作者說以前有玩過一些用 RPG 製作大師所製成的遊戲，但是從來沒有親自開發過。","現在作者想做一份線上履歷來介紹自己，以 RPG 製作大師的風格來實作!","因作者並不會美編，所以場景布置的不好看也請多多見諒。",React.createElement("span",null,"還不知道如何操作的話請按",React.createElement("kbd",null,"ESC")),"如果你是行動裝置的話請觸碰左上角的選單按鈕。"]},{name:"古文碑",select:[{id:0,title:"世界形成之初",text:["此石碑記載著這個世界的創立因素，上面留有密密麻麻的文字....","世界形成之初，有著 HTML 、 CSS 、 JavaScrit","ReactJs、Jquery 是 JavaScirpt 的兒子，祂們能把世界毀滅亦可重生。","Sass 是 Css 的女兒，在這個世界中，任何事情都逃不過牠的法眼。","而 HTML 則是這世界的別名。","在一次的 Gulp 協議中，JavaScript 及 Css 達成共識，決定讓自己的孩子在 HTML 中歷練。","於是 ReactJs、Jquery、Sass 攜手打造了這個世界。"]},{id:1,title:"關於作者",text:[React.createElement("span",null,"作者本名叫 盧宏寶 在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，",React.createElement("del",null,"目前已婚有一子"))]}]},{name:"哆拉喵",text:["作者太笨啦! NPC 碰撞有一堆 BUG，害我撞來撞去的。",React.createElement("span",null,"如果人物卡住了就按 ",React.createElement("kbd",null,"0")," 或 ",React.createElement("kbd",null,"1"),"直接傳送走吧!")]}],[{name:"哆拉花",text:["這屋子種了不少花!","下班之後，看看一下花花草草能適度的釋壓。"]},{name:"哆拉花角",text:["我是第一個會走的 NPC 唷"]}],[{name:"哆拉工",text:["用老闆做的編輯器隔間二樓，雖然比以前快多了!但還是很累人呢。","過陣子外面也要重整一下了"]}],[{name:"哆拉空",text:["2樓今晚隔間好嚕，之後就可以慢慢擺設了。"]}]];var Root=React.createClass({displayName:"Root",getDefaultProps:function(){return{min:1,left:-init.man.moveSpeed,right:init.man.moveSpeed,up:-init.man.moveSpeed,down:init.man.moveSpeed}},getInitialState:function(){return{loadProcess:!0,indexShow:0,indexBoxShow:0,loadBoxShow:0,indexBox:0,map:{index:0,bg:null,col:0,row:0},windowWidth:window.innerWidth,windowHeight:window.innerHeight,gridX:!1,gridY:!1,x:init.man.initPos.x,y:init.man.initPos.y,left:init.man.initPos.x-1,top:init.man.initPos.y-1,manMoveImg:0,manMoveAnimate:0,mapSizeX:1,mapSizeY:1,mapLeft:this.getManPosX(),mapTop:this.getManPosY(),mapAnimateSpeed:"0s",mapFade:0,mapZindex:-1,isMoveLeft:this.getMoveLUPoint(this.getWindowWidth()),isMoveRight:this.getMoveRDPoint(this.getWindowWidth()),isMoveUp:this.getMoveLUPoint(this.getWindowHeight()),isMoveDown:this.getMoveRDPoint(this.getWindowHeight()),chatOpacity:0,chatSelectArray:[],chatSelectIndex:-1,messageId:-1,message:"",messageName:!1,messageNum:-1,messageMax:-1,menuIndex:0,menuDisplay:!1,menuRightBoxWheel:0,menuLeftBoxWheel:0}},event:function(e){if(-1!=this.state.messageId)if(this.state.messageMax>this.state.messageNum){var e=this.state.messageNum+1;this.setState({messageNum:e,message:React.createElement("p",null,init.event[this.state.map.index][this.state.messageId].text[e])})}else this.initEvent();else this.setState({messageId:e,chatOpacity:1,message:React.createElement("p",null,init.event[this.state.map.index][e].text[0]),messageName:init.event[this.state.map.index][e].name,messageNum:0,messageMax:init.event[this.state.map.index][e].text.length-1})},eventSelect:function(e){if(-1!=this.state.messageId)this.state.messageMax>this.state.messageNum?(this.setState({messageNum:this.state.messageNum+1}),this.setState({message:React.createElement("p",null,init.event[this.state.map.index][e].select[this.state.chatSelectIndex].text[this.state.messageNum])})):this.initEvent();else{for(var t=[],i=0;i<init.event[this.state.map.index][e].select.length;i++)t.push({id:i,title:init.event[this.state.map.index][e].select[i].title});this.setState({chatSelectIndex:0,chatSelectArray:t,messageId:e,chatOpacity:1,messageName:init.event[this.state.map.index][e].name,message:""})}},handleChat:function(e){this.moveAnimate()},handleEventSelect:function(e){-1==this.state.messageNum?this.setState({chatSelectArray:[],message:React.createElement("p",null,init.event[this.state.map.index][this.state.messageId].select[e].text[0]),messageNum:0,messageMax:init.event[this.state.map.index][this.state.messageId].select[e].text.length-1}):this.eventSelect(this.state.messageId)},getWindowWidth:function(){return window.innerWidth},getWindowHeight:function(){return window.innerHeight},getMoveLUPoint:function(e){return Math.floor(e/4)-Math.floor(e/4)%init.man.moveSpeed},getMoveRDPoint:function(e){return Math.floor(e/4*3)-Math.floor(e/4*3)%init.man.moveSpeed},getManPosX:function(){if(init.man.initPos.x>this.getMoveRDPoint(this.getWindowWidth())){var e=Math.floor(window.innerWidth/2-init.man.initPos.x-init.man.sizeX/2);return e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0},getManPosY:function(){if(init.man.initPos.y>this.getMoveRDPoint(this.getWindowHeight())){var e=Math.floor(window.innerHeight/2-init.man.initPos.y-init.man.sizeY/2);return e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0},getResizeManPosX:function(){if(window.innerWidth-init.maps.col<0){if(this.state.x>this.getMoveRDPoint(this.getWindowWidth())){var e=Math.floor(window.innerWidth/2-this.state.x-init.man.sizeX/2);return window.innerWidth>e+init.maps.col&&(e=window.innerWidth-init.maps.col),e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0}var e=(window.innerWidth-init.maps.col)/2;return e},getResizeManPosY:function(){if(window.innerHeight-init.maps.row<0){if(this.state.y>this.getMoveRDPoint(this.getWindowHeight())){var e=Math.floor(window.innerHeight/2-this.state.y-init.man.sizeY/2);return window.innerHeight>e+init.maps.row&&(e=window.innerHeight-init.maps.row),e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0}var t=(window.innerHeight-init.maps.row)/2;return t},isMove:function(e,t){this.initEvent();for(var i=init.move?init.move:0,n=init.npc?init.npc:0,a=!0,s=0;s<i.length;s++)i[s].sx<=this.state.x+init.man.sizeX+e&&this.state.x+e<=i[s].ex&&i[s].sy<=this.state.y+t+init.man.sizeY&&this.state.y+t<=i[s].ey&&(i[s].cm>=0&&this.handleMap(i[s].cm,i[s].cmm),a=!1);if(n)for(var s=0;s<n.length;s++)n[s].pX<=this.state.x+init.man.sizeX+e&&this.state.x+e<=n[s].w+n[s].pX&&n[s].pY+24<=this.state.y+t+init.man.sizeY&&this.state.y+t<=25+n[s].pY&&(a=!1);return a},isEvents:function(e,t){var i=init.events,n=init.npc?init.npc:0;if(-1==this.state.messageId){for(var a=0;a<i.length;a++)i[a].sx<=this.state.x+init.man.sizeX+e&&this.state.x+e<=i[a].ex&&i[a].sy<=this.state.y+t+init.man.sizeY&&this.state.y+t<=i[a].ey&&(init.event[this.state.map.index][i[a].ev].select?this.eventSelect(i[a].ev):this.event(i[a].ev));if(n)for(var a=0;a<n.length;a++)n[a].pX<=this.state.x+init.man.sizeX+e&&this.state.x+e<=n[a].w+n[a].pX&&n[a].pY+24<=this.state.y+t+init.man.sizeY&&this.state.y+t<=25+n[a].pY&&(init.event[this.state.map.index][n[a].e].select?this.eventSelect(n[a].e):this.event(n[a].e))}else this.state.chatSelectIndex>-1?this.handleEventSelect(this.state.chatSelectIndex):this.event(this.state.messageId)},initEvent:function(e){this.setState({chatOpacity:0,messageId:-1,messageNum:-1,messageMax:-1,chatSelectIndex:-1,chatSelectArray:[]}),e&&"function"==typeof e&&e()},handleKeyDown:function(e){if(e.preventDefault(),-1!=this.state.mapZindex)if(0!=this.state.chatSelectArray.length||this.state.menuDisplay)if(this.state.menuDisplay)switch(e.keyCode){case 27:this.initEvent(),this.ShowMenu();break;case 38:this.handleMenuIndexMove(-1);break;case 87:this.handleMenuIndexMove(-1);break;case 40:this.handleMenuIndexMove(1);break;case 83:this.handleMenuIndexMove(1)}else switch(e.keyCode){case 38:this.chatSelectMove(-1);break;case 87:this.chatSelectMove(-1);break;case 40:this.chatSelectMove(1);break;case 83:this.chatSelectMove(1);break;case 32:this.moveAnimate();break;case 13:this.moveAnimate();break;case 27:this.initEvent()}else switch(e.keyCode){case 37:init.control.left=!0;break;case 65:init.control.left=!0;break;case 39:init.control.right=!0;break;case 68:init.control.right=!0;break;case 38:init.control.up=!0;break;case 87:init.control.up=!0;break;case 40:init.control.down=!0;break;case 83:init.control.down=!0;break;case 48:this.handleMap(0,0);break;case 49:this.handleMap(1,0);break;case 88:this.drawGridX();break;case 89:this.drawGridY();break;case 32:this.moveAnimate();break;case 13:this.moveAnimate();break;case 27:this.initEvent(),this.ShowMenu()}else{switch(e.keyCode){case 38:this.handleIndexBoxMove(-1);break;case 87:this.handleIndexBoxMove(-1);break;case 40:this.handleIndexBoxMove(1);break;case 83:this.handleIndexBoxMove(1)}if(0==this.state.indexBox)switch(e.keyCode){case 32:this.handleStart();break;case 13:this.handleStart()}}},handleKeyUp:function(e){switch(e.preventDefault(),e.keyCode){case 37:this.leftStopMove();break;case 65:this.leftStopMove();break;case 39:this.rightStopMove();break;case 68:this.rightStopMove();break;case 38:this.upStopMove();break;case 87:this.upStopMove();break;case 40:this.downStopMove();break;case 83:this.downStopMove()}},ShowMenu:function(){this.setState({menuDisplay:!this.state.menuDisplay})},leftStopMove:function(){init.control.left=!1,init.map.left=!1},rightStopMove:function(){init.control.right=!1,init.map.right=!1},upStopMove:function(){init.control.up=!1,init.map.up=!1},downStopMove:function(){init.control.down=!1,init.map.down=!1},handleResize:function(){this.setState({windowWidth:this.getWindowWidth(),windowHeight:this.getWindowHeight(),isMoveLeft:this.getMoveLUPoint(this.getWindowWidth()),isMoveRight:this.getMoveRDPoint(this.getWindowWidth()),isMoveUp:this.getMoveLUPoint(this.getWindowHeight()),isMoveDown:this.getMoveRDPoint(this.getWindowHeight()),mapLeft:this.getResizeManPosX(),mapTop:this.getResizeManPosY()})},handleMap:function(e,t){this.AjaxLoad(e,function(){this.setState({map:init.maps,left:init.maps["in"][t].x-1,top:init.maps["in"][t].y-1,x:init.maps["in"][t].x,y:init.maps["in"][t].y}),this.handleResize(),this.drawObject(function(){this.setState({mapFade:1})}.bind(this))}.bind(this))},handleStart:function(){this.AjaxLoad(this.state.map.index,function(){this.setState({mapZindex:1,indexBoxShow:0,indexShow:0,map:init.maps}),this.drawObject(function(){init.menuNav=!0,this.setState({mapFade:1})}.bind(this))}.bind(this))},AjaxLoad:function(e,t){this.setState({mapFade:0}),$.ajax({url:init.mapUrl[e],dataType:"json",error:function(e){console.log("Ajax Error")},success:function(e){init.maps=e.map,init.npc=e.npc,this.AjaxProcessObject(e.styles),this.AjaxProcessMove(e.isMove,function(){t&&"function"==typeof t&&t()})}.bind(this)})},AjaxProcessObject:function(e){init.firstCanvas.length=0,init.secondCanvas.length=0;for(var t=0,i=0,n=0;n<e.length;n++){var a=e[n],s=init.preImg.length,c=!1,o={left:a.l,top:a.t,width:a.w,height:a.h,background:a.b,sourceX:a.x,sourceY:a.y};2==a.z?(init.firstCanvas[t]=o,t+=1):(init.secondCanvas[i]=o,i+=1);for(var r=0;s>r;r++)init.preImg[r]==a.b&&(c=!0);c||init.preImg.push(a.b)}},AjaxProcessMove:function(e,t){init.move.length=0,init.events.length=0;for(var i=0,n=0,a=0;a<e.length;a++){var s=e[a],c={sx:s.x,sy:s.y,ex:s.w+s.x,ey:s.h+s.y,cm:s.cm,cmm:s.cmm};if(init.move[i]=c,i+=1,s.e>=0){var o={sx:s.x,sy:s.y,ex:s.w+s.x,ey:s.h+s.y,ev:s.e};init.events[n]=o,n+=1}e.length-a==1&&t&&"function"==typeof t&&t()}},backIndex:function(){this.setState({mapZindex:-1,indexBoxShow:1,indexShow:1,loadProcess:!1,mapFade:0})},handleIndexBoxMove:function(e){this.state.indexBox+e>2?e=(this.state.indexBox+e)%3:(e=this.state.indexBox+e,-1==e&&(e=2)),this.setState({indexBox:e})},handleMenuIndexMove:function(e){var t=e+this.state.menuIndex;t>=0&&t<init.menuTitle.length&&this.menuSelect(t)},chatSelectMove:function(e){var t=e+this.state.chatSelectIndex;t>=0&&t<this.state.chatSelectArray.length&&this.setState({chatSelectIndex:t})},handleLoad:function(){this.backIndex()},componentWillMount:function(){},componentDidMount:function(){var e=document.getElementById("grid"),t=document.getElementById("firstCanvas"),i=document.getElementById("secondCanvas");init.context=e.getContext("2d"),init.fcontext=t.getContext("2d"),init.scontext=i.getContext("2d"),$(window).on("load",this.handleLoad),$(window).on("resize",this.handleResize),$(window).on("keydown",this.handleKeyDown),$(window).on("keyup",this.handleKeyUp),this.timer=setInterval(this.move.bind(this),init.man.moveSetInterVal)},componentWillUnmount:function(){$(window).off("resize",this.handleResize),$(window).off("keydown",this.handleKeyDown),$(window).off("keyup",this.handleKeyUp),clearInterval(this.timer)},getTouchPos:function(e){return{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}},handleTouchStart:function(e){if(0!=this.state.mapFade){var t=this.getTouchPos(e);init.startTouch.x=t.x,init.startTouch.y=t.y}},handleTouchMove:function(e){if(e.preventDefault(),0!=this.state.mapFade&&!this.state.menuDisplay){var t=this.getTouchPos(e);t.x-init.startTouch.x<-25?init.control.left=!0:(init.control.left=!1,init.map.left=!1),t.x-init.startTouch.x>25?init.control.right=!0:(init.control.right=!1,init.map.right=!1),t.y-init.startTouch.y<-25?init.control.up=!0:(init.control.up=!1,init.map.up=!1),t.y-init.startTouch.y>25?init.control.down=!0:(init.control.down=!1,init.map.down=!1)}},handleTouchEnd:function(e){init.control.left=!1,init.map.left=!1,init.control.right=!1,init.map.right=!1,init.control.up=!1,init.map.up=!1,init.control.down=!1,init.map.down=!1},menuRightTouchMove:function(e){e.preventDefault();var t=this.getTouchPos(e),i=React.findDOMNode(this.refs.right).clientHeight,n=React.findDOMNode(this.refs.rightBox).clientHeight,a=t.y-init.startTouch.y,s=n+(this.state.menuRightBoxWheel+a);init.startTouch=t,s>i&&this.state.menuRightBoxWheel+a<=0&&this.setState({menuRightBoxWheel:this.state.menuRightBoxWheel+a})},menuLeftTouchMove:function(e){if(e.view.innerWidth<768){e.preventDefault();var t=this.getTouchPos(e),i=t.x-init.startTouch.x;init.startTouch=t,this.state.menuLeftBoxWheel+i<=0&&this.setState({menuLeftBoxWheel:this.state.menuLeftBoxWheel+i})}},preLoadImg:function(e){for(var t=init.preImg.length,i=0;i<init.preImg.length;i++){var n=new Image;n.onload=function(){--t<=0&&e()},n.src=init.preImg[i]}},drawObject:function(e){this.preLoadImg(function(){init.fcontext.clearRect(0,0,init.maps.col,init.maps.row),init.scontext.clearRect(0,0,init.maps.col,init.maps.row);for(var t=new Image,i=(this.state,init.firstCanvas),n=init.secondCanvas,a=0;a<i.length;a++)t.src=i[a].background,init.fcontext.drawImage(t,i[a].sourceX,i[a].sourceY,i[a].width,i[a].height,i[a].left,i[a].top,i[a].width,i[a].height);for(var a=0;a<n.length;a++)t.src=n[a].background,init.scontext.drawImage(t,n[a].sourceX,n[a].sourceY,n[a].width,n[a].height,n[a].left,n[a].top,n[a].width,n[a].height);e&&"function"==typeof e&&e()}.bind(this))},drawGridX:function(){if(this.state.gridX)init.context.clearRect(0,0,init.maps.col,init.maps.row);else{init.context.beginPath();for(var e=1;e<init.maps.col/init.object.sizeX;e++)init.context.moveTo(e*init.object.sizeX,init.object.sizeY),init.context.lineTo(e*init.object.sizeX,init.maps.row),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(e*init.object.sizeX,e*init.object.sizeX,20);init.context.stroke()}this.setState({gridX:!this.state.gridX})},drawGridY:function(){if(this.state.gridY)init.context.clearRect(0,0,init.maps.col,init.maps.row);else{init.context.beginPath();for(var e=1;e<init.maps.row/init.object.sizeY;e++)init.context.moveTo(init.object.sizeX,e*init.object.sizeY),init.context.lineTo(init.maps.col,e*init.object.sizeY),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(e*init.object.sizeY,20,e*init.object.sizeY+4);init.context.stroke()}this.setState({gridY:!this.state.gridY})},moveAnimate:function(){switch(this.state.manMoveImg){case 3:this.isEvents(this.props.left,0);break;case 2:this.isEvents(this.props.right,0);break;case 1:this.isEvents(0,this.props.up);break;case 4:this.isEvents(0,this.props.down)}},move:function(){var e=this.state,t=this.props,i=init.control,n=init.map;if((i.left||i.right||i.up||i.down)&&(init.man.spriteSpeed||this.setState({manMoveAnimate:(e.manMoveAnimate+1)%4}),init.man.spriteSpeed<init.man.spriteSpeedCount?init.man.spriteSpeed++:init.man.spriteSpeed=0),i.left&&this.setState({manMoveImg:3}),i.right&&this.setState({manMoveImg:2}),i.up&&this.setState({manMoveImg:1}),i.down&&this.setState({manMoveImg:4}),i.left&&e.x>t.min){var a=this.isMove(t.left,0);a?(this.setState({x:e.x+t.left,left:t.left*e.mapSizeX+e.left}),n.left=0!=e.mapLeft&&e.isMoveLeft-e.mapLeft==e.x?!0:!1):n.left=!1}if(i.right&&init.maps.col-init.man.sizeX*e.mapSizeX>e.x){var s=this.isMove(t.right,0);s?(this.setState({x:e.x+t.right,left:t.right*e.mapSizeX+e.left}),n.right=e.mapSizeX*init.maps.col+e.mapLeft>e.windowWidth&&e.isMoveRight-e.mapLeft==e.x?!0:!1):n.right=!1}if(i.up&&e.y>t.min){var c=this.isMove(0,t.up);c?(this.setState({y:e.y+t.up,top:t.up*e.mapSizeY+e.top}),n.up=0!=e.mapTop&&e.isMoveUp-e.mapTop==e.y?!0:!1):n.up=!1}if(i.down&&init.maps.row-init.man.sizeY*e.mapSizeY>e.y){var o=this.isMove(0,t.down);o?(this.setState({y:e.y+t.down,top:t.down*e.mapSizeY+e.top}),n.down=e.mapSizeY*init.maps.row+e.mapTop>e.windowHeight&&e.isMoveDown-e.mapTop==e.y?!0:!1):n.down=!1}n.left&&this.setState({mapLeft:e.mapLeft-t.left}),n.right&&this.setState({mapLeft:e.mapLeft-t.right}),n.up&&this.setState({mapTop:e.mapTop-t.up}),n.down&&this.setState({mapTop:e.mapTop-t.down})},menuItem:function(e){return this.state.menuIndex==e.id?React.createElement("li",{className:"xx-dark-text-shadow",style:{borderColor:"white"}},e.title):React.createElement("li",{className:"xx-dark-text-shadow",style:{borderColor:"transparent"},onClick:this.menuSelect.bind("null",e.id)},e.title)},menuSelect:function(e){this.setState({menuIndex:e,menuRightBoxWheel:0})},indexBox:function(e){return this.state.indexBox==e.id?0==e.id?React.createElement("li",{style:{borderColor:"white"},onClick:this.handleStart},e.title):React.createElement("li",{style:{borderColor:"white"}},e.title):0==e.id?React.createElement("li",{onClick:this.handleStart,style:{borderColor:"transparent"},onMouseOver:this.indexBoxSelect.bind("null",e.id)},e.title):React.createElement("li",{style:{borderColor:"transparent"},onMouseOver:this.indexBoxSelect.bind("null",e.id)},e.title)},indexBoxSelect:function(e){this.setState({indexBox:e})},chatArray:function(e){return this.state.chatSelectIndex==e.id?React.createElement("li",{style:{borderColor:"white"}},e.title):React.createElement("li",{style:{borderColor:"transparent"},onMouseOver:this.chatSelect.bind("null",e.id)},e.title)},chatSelect:function(e){this.setState({chatSelectIndex:e})},menuRightWheel:function(e){var t=32,i=e.deltaY>0?e.deltaY:-e.deltaY,n=React.findDOMNode(this.refs.right).clientHeight,a=React.findDOMNode(this.refs.rightBox).clientHeight,s=a+(this.state.menuRightBoxWheel-t*(e.deltaY/i)),c=-t*e.deltaY/i+this.state.menuRightBoxWheel;s+t>n&&0>=c&&this.setState({menuRightBoxWheel:c})},render:function(){var e=this.state;return React.createElement("div",{id:"container",onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},-1==e.mapZindex?React.createElement("div",{id:"index",style:{opacity:e.indexShow}},React.createElement("div",{id:"indexBox",style:{opacity:e.indexBoxShow}},React.createElement("ul",null,init.indexBox.map(this.indexBox))),React.createElement(Loadbox,{style:{opacity:e.loadBoxShow}})):null,React.createElement("div",{id:"map",style:{opacity:e.mapFade,zIndex:e.mapZindex,background:e.map.bg,WebkitTransform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",msTransform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",transform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",width:e.mapSizeX*e.map.col,height:e.mapSizeY*e.map.row}},React.createElement("div",{className:"man-container",style:{WebkitTransform:"translate3D("+e.left+"px,"+e.top+"px,0)",msTransform:"translate3D("+e.left+"px,"+e.top+"px,0)",transform:"translate3D("+e.left+"px,"+e.top+"px,0)",width:e.mapSizeX*init.man.sizeX,height:e.mapSizeY*init.man.sizeY,backgroundPosition:e.manMoveAnimate*init.man.sizeX+"px "+e.manMoveImg*init.man.sizeY+"px"}}),React.createElement("canvas",{id:"grid",width:e.map.col,height:e.map.row}),React.createElement("canvas",{id:"firstCanvas",width:e.map.col,height:e.map.row}),React.createElement(Npc,{x:e.x,y:e.y,width:e.map.col,height:e.map.row}),React.createElement("canvas",{id:"secondCanvas",width:e.map.col,height:e.map.row})),init.menuNav?React.createElement("nav",{id:"menunav",className:"s-hide"},React.createElement("ul",null,React.createElement("li",{onClick:this.ShowMenu},"選單"))):null,-1!=e.mapZindex?React.createElement("div",{className:"chat",onClick:this.handleChat,style:{opacity:e.chatOpacity}},e.messageName," : ",e.message,React.createElement("ul",null,e.chatSelectArray.map(this.chatArray))):null,e.menuDisplay?React.createElement(Menu,null,React.createElement("div",{id:"left",className:"col xx12 s3 xx-np xx-ng",onTouchMove:this.menuLeftTouchMove},React.createElement("ul",{style:{WebkitTransform:"translateX("+e.menuLeftBoxWheel+"px)",msTransform:"translateX("+e.menuLeftBoxWheel+"px)",transform:"translateX("+e.menuLeftBoxWheel+"px)"}},init.menuTitle.map(this.menuItem))),React.createElement("div",{id:"right",className:"col xx12 s9 xx-np xx-ng",ref:"right",onTouchMove:this.menuRightTouchMove},React.createElement("div",{id:"rightBox",onWheel:this.menuRightWheel,ref:"rightBox",style:{WebkitTransform:"translateY("+e.menuRightBoxWheel+"px)",msTransform:"translateY("+e.menuRightBoxWheel+"px)",transform:"translateY("+e.menuRightBoxWheel+"px)"}},init.menuText[e.menuIndex]))):null,e.loadProcess?React.createElement(Load,null):null,React.createElement(PreLoadImg,null))}}),Menu=React.createClass({displayName:"Menu",render:function(){return React.createElement("div",{id:"menu"},this.props.children)}}),PreLoadImg=React.createClass({displayName:"PreLoadImg",handleLoadImg:function(e){return React.createElement("img",{src:e})},render:function(){return React.createElement("div",{style:{display:"none"}},init.preImg.map(this.handleLoadImg))}}),Loadbox=React.createClass({displayName:"Loadbox",render:function(){return React.createElement("div",{id:"loadBox",style:this.props.style})}}),Disqus=React.createClass({displayName:"Disqus",componentDidMount:function(){this.addDisqus()},componentWillUnmount:function(){this.removeDisqus()},addDisqus:function(){$("body").append("<script id='disqus' type='text/javascript' src='//dkbo-rpg.disqus.com/embed.js' async='true'></script>")},removeDisqus:function(){$("#disqus").remove()},render:function(){return React.createElement("div",null,React.createElement("div",{id:"disqus_thread"}),React.createElement("noscript",null,"Please enable JavaScript to view the ",React.createElement("a",{href:"https://disqus.com/?ref_noscript",rel:"nofollow"},"comments powered by Disqus.")))}}),Load=React.createClass({displayName:"Load",getDefaultProps:function(){for(var e=[],t=0;12>t;t++)e.push(React.createElement("div",null));return{load:e}},render:function(){return React.createElement("div",{id:"load",style:this.props.style},this.props.load)}}),Npc=React.createClass({displayName:"Npc",fc:null,bc:null,animate:null,img:new Image,walk:function(){var e=12;this.fc.clearRect(0,0,this.props.width,this.props.height),this.sc.clearRect(0,0,this.props.width,this.props.height);for(var t,i=0;i<init.npc.length;i++)t=init.npc[i],this.img.src=t.b,t.isU&&t.y>0||t.isU&&t.s>0?this.props.x<=t.pX+t.w-e&&t.pX-e<=init.man.sizeX+this.props.x&&this.props.y+24<=t.pY-e+t.h&&t.pY-e<=1+this.props.y+24?(init.npc[i].isM=!1,this.draw(i,t.u)):(init.npc[i].isM=!0,t.aY<=t.pY&&t.aX+t.aW>=t.pX&&t.aX<=t.pX?this.draw(i,t.u):(init.npc[i].isU=!1,init.npc[i].isL=!1,init.npc[i].isR=!1,init.npc[i].s=0)):t.isU&&0==t.y&&(init.npc[i].isU=!1),t.isD&&t.y<t.mY||t.isD&&t.s>0?this.props.x<=t.pX+t.w+e&&t.pX+e<=init.man.sizeX+this.props.x&&this.props.y+24<=t.pY+e+t.h&&t.pY+e<=1+this.props.y+24?(init.npc[i].isM=!1,this.draw(i,t.d)):(init.npc[i].isM=!0,t.aY+t.aH>=t.pY&&t.aX+t.aW>=t.pX&&t.aX<=t.pX?this.draw(i,t.d):(init.npc[i].isD=!1,init.npc[i].isL=!1,init.npc[i].isR=!1,init.npc[i].s=0)):t.isD&&t.y==t.mY&&(init.npc[i].isD=!1),t.isR&&t.x<t.mX||t.isR&&t.s>0?5!=t.t&&7!=t.t&&(this.props.x<=t.pX+t.w+e&&t.pX+e<=init.man.sizeX+this.props.x&&this.props.y+24<=t.pY+e+t.h&&t.pY+e<=1+this.props.y+24?(init.npc[i].isM=!1,this.draw(i,t.r)):(init.npc[i].isM=!0,t.aX+t.aW>=t.pX?this.draw(i,t.r):(init.npc[i].isR=!1,init.npc[i].s=0))):t.isR&&t.x==t.mX&&(init.npc[i].isR=!1),t.isL&&t.x>0||t.isL&&t.s>0?4!=t.t&&6!=t.t&&(this.props.x<=t.pX+t.w-e&&t.pX-e<=init.man.sizeX+this.props.x&&this.props.y+24<=t.pY-e+t.h&&t.pY-e<=1+this.props.y+24?(init.npc[i].isM=!1,this.draw(i,t.l)):(init.npc[i].isM=!0,t.aX<=t.pX?this.draw(i,t.l):(init.npc[i].isL=!1,init.npc[i].s=0))):t.isL&&0==t.x&&(init.npc[i].isL=!1),t.isL||t.isD||t.isU||t.isR||0!=init.npc[i].s||this.random(i);this.animate=requestAnimationFrame(this.walk)},draw:function(e,t){var i=init.npc[e],n=Math.floor(init.npc[e].f/i.footSpeed)%4*32,a=i.h*t;this.fc.drawImage(this.img,n,a,i.w,i.h-24,i.pX,i.pY,i.w,i.h-24),this.sc.drawImage(this.img,n,a+24,i.w,i.h-24,i.pX,i.pY+24,i.w,i.h-24),i.isM&&(i.s>0&&0==t&&i.y<i.mY||i.s>0&&1==t&&i.x>0||i.s>0&&2==t&&i.x<i.mX||i.s>0&&3==t&&i.y>0?(init.npc[e].f++,this.process(e)):(init.npc[e].s--,init.npc[e].f=0))},process:function(e){switch(init.npc[e].t){case 0:init.npc[e].y--,init.npc[e].pY--;break;case 1:init.npc[e].x++,init.npc[e].pX++;break;case 2:init.npc[e].y++,init.npc[e].pY++;break;case 3:init.npc[e].x--,init.npc[e].pX--;break;case 4:init.npc[e].y--,init.npc[e].pY--,init.npc[e].x--,init.npc[e].pX--;break;case 5:init.npc[e].y--,init.npc[e].pY--,init.npc[e].x++,init.npc[e].pX++;break;case 6:init.npc[e].y++,init.npc[e].pY++,init.npc[e].x--,init.npc[e].pX--;break;case 7:init.npc[e].y++,init.npc[e].pY++,init.npc[e].x++,init.npc[e].pX++}},random:function(e){var t=Math.floor(80*Math.random())%8,i=Math.floor(100*Math.random())+10;switch(init.npc[e].s=Math.floor(100*Math.random())+1,t){case 0:init.npc[e].isU=!0,init.npc[e].y=i,init.npc[e].t=0,this.draw(e,init.npc[e].u);break;case 1:init.npc[e].isR=!0,init.npc[e].mX=i,init.npc[e].x=0,init.npc[e].t=1,this.draw(e,init.npc[e].r);break;case 2:init.npc[e].isD=!0,init.npc[e].mY=i,init.npc[e].y=0,init.npc[e].t=2,this.draw(e,init.npc[e].d);break;case 3:init.npc[e].isL=!0,init.npc[e].x=i,init.npc[e].t=3,this.draw(e,init.npc[e].l);break;case 4:init.npc[e].isU=!0,init.npc[e].isL=!0,init.npc[e].y=i,init.npc[e].x=i,init.npc[e].t=4,this.draw(e,init.npc[e].l);break;case 5:init.npc[e].isU=!0,init.npc[e].isR=!0,init.npc[e].y=i,init.npc[e].mX=i,init.npc[e].x=0,init.npc[e].t=5,this.draw(e,init.npc[e].r);break;case 6:init.npc[e].isD=!0,init.npc[e].isL=!0,init.npc[e].mY=i,init.npc[e].y=0,init.npc[e].x=i,init.npc[e].t=6,this.draw(e,init.npc[e].l);break;case 7:init.npc[e].isD=!0,init.npc[e].isR=!0,init.npc[e].mX=i,init.npc[e].x=0,init.npc[e].mY=i,init.npc[e].y=0,init.npc[e].t=7,this.draw(e,init.npc[e].r)}},componentWillMount:function(){},componentDidMount:function(){this.fc=document.getElementById("fnpc").getContext("2d"),this.sc=document.getElementById("snpc").getContext("2d"),this.animate=requestAnimationFrame(this.walk)},componentWillUnmount:function(){init.npc.length=0,window.cancelAnimationFrame(this.animate)},render:function(){return React.createElement("div",{x:this.props.x,y:this.props.y},React.createElement("canvas",{id:"fnpc",width:this.props.width,height:this.props.height}),React.createElement("canvas",{id:"snpc",width:this.props.width,height:this.props.height}))}}),rt=React.render(React.createElement(Root,null),document.body);init.menuTitle=[{id:0,title:"實作紀錄"},{id:1,title:"說明"},{id:2,title:"關於作者"},{id:3,title:"操作"},{id:4,title:"素材來源"},{id:5,title:"Disqus留言"}],init.menuText=[React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"紀錄條"),React.createElement("ul",null,React.createElement("li",null,React.createElement("date",null,"2015/08/29"),React.createElement("p",null,"圖片及部分資料改成 AJAX 方式取得。目前尚未轉場效果。接下來要把 NPC 在做出來。"),React.createElement("iframe",{height:"268",scrolling:"no",src:"//codepen.io/dkbo/embed/RWbjjZ/?height=268&theme-id=4234&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true",style:{width:"100%"}},"See the Pen ",React.createElement("a",{href:"http://codepen.io/dkbo/pen/RWbjjZ/"},"RPG NPC Walk Type one ")," by dkbo (",React.createElement("a",{href:"http://codepen.io/dkbo"},"@dkbo"),") on ",React.createElement("a",{href:"http://codepen.io"},"CodePen"),".")),React.createElement("br",null),React.createElement("li",null,React.createElement("date",null,"2015/08/25"),React.createElement("p",null,"預載圖片的問題瞎忙了很多時間，最後還是放在HTML裡吧!")))),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"簡介"),React.createElement("p",null,"此遊戲履歷想法來源在於 ",React.createElement("mark",null,"RPG 遊戲製作大師"),"，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　",React.createElement("a",{href:"http://facebook.github.io/react/",target:"_blank"},"ReactJS")," ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。"),React.createElement("h2",null,"可擴展"),React.createElement("p",null,"遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。"),React.createElement("h2",null,"遊戲目的"),React.createElement("p",null,"拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。"),React.createElement("h2",null,"遊戲內容"),React.createElement("p",null,"作者會在空餘的時間，慢慢地加進一些資訊及修改程式。")),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"作者"),React.createElement("div",{className:"row xx-ng"},React.createElement("figrue",{className:"col xx12 x6 x6o3 s3o0 s3 l2 xx-np"},React.createElement("img",{src:"http://1.gravatar.com/avatar/d2cddbe46278bf25a41b9479af20cf8d?s=250&d=wavatar&r=g",width:"100%"})),React.createElement("div",{className:"col xx12  s9 l10 xx-np"},React.createElement("p",{className:"s-p"},"前端攻城師，做出的網頁以兼容電腦、手機、平板等裝置為優先。會簡單的後端語言連接資料庫能做出簡易的會員系統、訂單管理系統、物流管理系統等等。正朝著網頁美感路線努力中。"))),React.createElement("h2",null,"作者自介"),React.createElement("p",null,"作者本名叫 盧宏寶 27歲，在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，目前已婚有一子。",React.createElement("br",null),React.createElement("br",null),"第一份的正式工作在",React.createElement("mark",null,"宗賢科技有限公司"),"，擔任",React.createElement("mark",null,"系統工程師"),"，利用 ABB 的 MicroSCADA　建置、維護系統，接觸到 ModBus、TCP/IP、optical 等通訊協定，簡單來說就是用電腦來監控廠房內的設備，並即時接收資料/傳入訊號至設備，建立日周月年報表，當設備有任何問題時，會出現 Alarm，透過 SCADA 線路圖可以第一時間判斷場地，並可以視問題大小而決定是否遠端 Close 開關。來避免災害、更大的損失。",React.createElement("br",null),React.createElement("br",null),"第二份工作在",React.createElement("mark",null,"威鴻數位工程有限公司"),"，擔任",React.createElement("mark",null,"系統工程師"),"，公司營運以監控設備的維護及安裝，並代理藍眼補習班補課系統。在職期間負責監工器材的安裝，及系統配置。",React.createElement("br",null),React.createElement("br",null),"第三份工作在",React.createElement("mark",null,"台灣惠多笑有限公司"),"，擔任網頁工程師，目前在職中。主要在於維護或架設官方網站、依老闆需求製作海報文宣品，並負責維護公司電腦及網路。"),React.createElement("h2",null,"技能專長"),React.createElement("p",null,"網頁切版、網頁程式撰寫、網頁開發工具運用、向量繪圖軟體操作、網路基礎概念、",React.createElement("del",null,"水電知識"),React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁切版"),React.createElement("br",null),"切版工具或任何圖像檔用 CSS 、 HTML 盡量想辦法呈現出來。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁程式撰寫"),React.createElement("br",null),"以文書工具寫前後端語言，依照公司、團隊需求主動研習模組化程式。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁開發工具運用"),React.createElement("br",null),"開發工具千層百變，永遠學不完用不完，不管是記事本還是程式語言類都有包裝、合併、分割、轉譯...等等，所以選幾套先上手，提升開發的效率，等穩健了在來執行 push 、 slice 來改變自己的套裝工具，部分工具也是依照公司、團隊需求主動研習。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"向量繪圖軟體操作"),React.createElement("br",null),"向量繪圖也是很大的學問，懂的如何操作，有時候也會減少不必要的麻煩。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網路基礎概念"),React.createElement("br",null),"網路或可以改稱雲端，懂得在網路斷訊時，如何的故障檢測，或是架設簡易的 Server ",React.createElement("br",null),React.createElement("br",null))),React.createElement("aircle",{
className:"clearfix"},React.createElement("h2",null,"電腦熱鍵"),React.createElement("p",null,"上 : ",React.createElement("kbd",null,"w")," 、 下 : ",React.createElement("kbd",null,"s")," 、 左 : ",React.createElement("kbd",null,"l")," 、 右 : ",React.createElement("kbd",null,"r")),React.createElement("p",null,"X座標格線 : ",React.createElement("kbd",null,"x")," 、 Y座標格線 : ",React.createElement("kbd",null,"y")),React.createElement("p",null,"執行 : ",React.createElement("kbd",null,"Space"),"、",React.createElement("kbd",null,"Enter")),React.createElement("p",null,"選單: ",React.createElement("kbd",null,"Esc")),React.createElement("h2",null,"行動裝置觸碰方式"),React.createElement("p",null,"上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑"),React.createElement("p",null,"執行 : 螢幕下方處觸碰")),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"地圖拼圖"),React.createElement("p",null,"來源 : ",React.createElement("br",null),React.createElement("a",{href:"http://fc03.deviantart.net/fs26/i/2008/149/d/7/rpg_maker_xp_the_best_tileset_by_davide_86.png"},"www.deviantart.com/")),React.createElement("h2",null,"人物拼圖"),React.createElement("p",null,"來源 : ",React.createElement("br",null),React.createElement("a",{href:"http://doraspace.web.fc2.com/file/image/material/xp/chara/dora_blu.png"},"doraspace.web.fc2.com"))),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"留下訊息"),React.createElement(Disqus,null),React.createElement("noscript",null,"Please enable JavaScript to view the ",React.createElement("a",{href:"https://disqus.com/?ref_noscript",rel:"nofollow"},"comments powered by Disqus.")))],init.indexBox=[{id:0,title:"Start"},{id:1,title:"Load"},{id:2,title:"End"}];