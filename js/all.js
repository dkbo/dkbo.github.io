"use strict";function player(){var e=new Image;return e.src="http://dkbo.github.io/images/man.png",e}function mapUrl(){var e="objects/",t="_obj",n=["0000","0001","0002","0003"],i=".json",a=n.map(function(n){return e+n+t+i});return a}function evtUrl(){var e="events/",t="_obj",n=["0000","0001","0002","0003"],i=".js",a=n.map(function(n){return e+n+t+i});return a}function transform(e){return{transform:e,oTransform:e,msTransform:e,WebkitTransform:e}}var requestAFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}(),cancelAFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(e){window.clearTimeout(e)}}(),init={indexBox:[{id:0,title:"Start"},{id:1,title:"Load"},{id:2,title:"End"}],object:{sizeX:32,sizeY:32},man:{sprite:player(),spriteSpeed:0,spriteSpeedCount:8,sizeX:32,sizeY:48,moveSpeed:4,initPos:{x:1e3,y:548}},control:{left:!1,up:!1,right:!1,down:!1},map:{bg:"url('images/bg.jpg')",left:!1,up:!1,right:!1,down:!1},mapUrl:mapUrl(),evtUrl:evtUrl(),maps:null,startTouch:{x:0,y:0},preImg:[],objects:[],events:[],firstCanvas:[],secondCanvas:[],move:[],npc:[]},Disqus=React.createClass({displayName:"Disqus",componentDidMount:function(){this.addDisqus()},componentWillUnmount:function(){this.removeDisqus()},addDisqus:function(){$("body").append("<script id='disqus' type='text/javascript' src='//dkbo-rpg.disqus.com/embed.js' async='true'></script>")},removeDisqus:function(){$("#disqus").remove()},render:function(){return React.createElement("div",null,React.createElement("div",{id:"disqus_thread"}),React.createElement("noscript",null,"Please enable JavaScript to view the ",React.createElement("a",{href:"https://disqus.com/?ref_noscript",rel:"nofollow"},"comments powered by Disqus.")))}}),Index=React.createClass({displayName:"Index",render:function(){var e=this.props.s;return React.createElement("div",{id:"index",style:{opacity:e.indexShow}},React.createElement("div",{id:"indexBox",style:{opacity:e.indexBoxShow}},React.createElement("ul",null,init.indexBox.map(this.props.indexBox))),React.createElement(Loadbox,{style:{opacity:e.loadBoxShow}}))}}),Load=React.createClass({displayName:"Load",render:function(){for(var e=[],t=0;12>t;t++)e.push(React.createElement("div",null));return React.createElement("div",{id:"load",style:this.props.style},e)}}),Loadbox=React.createClass({displayName:"Loadbox",render:function(){return React.createElement("div",{id:"loadBox",style:this.props.style})}}),Map=React.createClass({displayName:"Map",render:function(){var e=this.props.s;return React.createElement("div",{id:"map",style:{opacity:e.mapFade,zIndex:e.mapZindex,background:e.map.bg,WebkitTransform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",msTransform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",transform:"translate3D("+e.mapLeft+"px,"+e.mapTop+"px,0)",width:e.mapSizeX*e.map.col,height:e.mapSizeY*e.map.row}},React.createElement(MapGrid,{s:e}),React.createElement(MapObject,{s:e}),React.createElement(Npc,{s:e}),React.createElement(Player,{s:e}))}}),MapGrid=React.createClass({displayName:"MapGrid",getInitialState:function(){return{gridX:!1,gridY:!1}},drawGridX:function(){if(this.state.gridX)init.context.clearRect(0,0,init.maps.col,init.maps.row);else{init.context.beginPath();for(var e=1;e<init.maps.col/init.object.sizeX;e++)init.context.moveTo(e*init.object.sizeX,init.object.sizeY),init.context.lineTo(e*init.object.sizeX,init.maps.row),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(e*init.object.sizeX,e*init.object.sizeX,20);init.context.stroke()}this.setState({gridX:!this.state.gridX})},drawGridY:function(){if(this.state.gridY)init.context.clearRect(0,0,init.maps.col,init.maps.row);else{init.context.beginPath();for(var e=1;e<init.maps.row/init.object.sizeY;e++)init.context.moveTo(init.object.sizeX,e*init.object.sizeY),init.context.lineTo(init.maps.col,e*init.object.sizeY),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(e*init.object.sizeY,20,e*init.object.sizeY+4);init.context.stroke()}this.setState({gridY:!this.state.gridY})},handleKeyDown:function(e){switch(e.keyCode){case 88:this.drawGridX();break;case 89:this.drawGridY()}},componentDidMount:function(){var e=document.getElementById("grid");init.context=e.getContext("2d"),$(window).on("keydown",this.handleKeyDown)},componentWillUnmount:function(){$(window).off("keydown",this.handleKeyDown)},render:function(){var e=this.props.s;return React.createElement("canvas",{id:"grid",width:e.map.col,height:e.map.row})}}),MapObject=React.createClass({displayName:"MapObject",componentDidMount:function(){var e=document.getElementById("firstCanvas"),t=document.getElementById("secondCanvas");init.fcontext=e.getContext("2d"),init.scontext=t.getContext("2d")},render:function(){var e=this.props.s;return React.createElement("div",null,React.createElement("canvas",{id:"firstCanvas",width:e.map.col,height:e.map.row}),React.createElement("canvas",{id:"secondCanvas",width:e.map.col,height:e.map.row}))}}),Menu=React.createClass({displayName:"Menu",getInitialState:function(){return{menuRightBoxWheel:0,menuLeftBoxWheel:0,menuIndex:0}},menuItem:function(e){return this.state.menuIndex==e.id?React.createElement("li",{className:"xx-dark-text-shadow",style:{borderColor:"white"}},e.title):React.createElement("li",{className:"xx-dark-text-shadow",style:{borderColor:"transparent"},onClick:this.menuSelect.bind("null",e.id)},e.title)},menuSelect:function(e){this.setState({menuIndex:e,menuRightBoxWheel:0})},handleMenuIndexMove:function(e){var t=e+this.state.menuIndex;t>=0&&t<init.menuTitle.length&&this.menuSelect(t)},menuRightWheel:function(e){var t=32,n=e.deltaY>0?e.deltaY:-e.deltaY,i=this.refs.right.clientHeight,a=this.refs.rightBox.clientHeight,s=a+(this.state.menuRightBoxWheel-t*(e.deltaY/n)),c=-t*e.deltaY/n+this.state.menuRightBoxWheel;s+t>i&&0>=c&&this.setState({menuRightBoxWheel:c})},menuRightTouchMove:function(e){e.preventDefault();var t=this.props.getTouchPos(e),n=this.refs.right.clientHeight,i=this.refs.rightBox.clientHeight,a=t.y-init.startTouch.y,s=i+(this.state.menuRightBoxWheel+a);init.startTouch=t,s>n&&this.state.menuRightBoxWheel+a<=0&&this.setState({menuRightBoxWheel:this.state.menuRightBoxWheel+a})},menuLeftTouchMove:function(e){if(e.view.innerWidth<768){e.preventDefault();var t=this.props.getTouchPos(e),n=t.x-init.startTouch.x;init.startTouch=t,this.state.menuLeftBoxWheel+n<=0&&this.setState({menuLeftBoxWheel:this.state.menuLeftBoxWheel+n})}},handleKeyDown:function(e){if(this.props.s.menuDisplay)switch(e.keyCode){case 38:this.handleMenuIndexMove(-1);break;case 87:this.handleMenuIndexMove(-1);break;case 40:this.handleMenuIndexMove(1);break;case 83:this.handleMenuIndexMove(1)}},componentDidMount:function(){$(window).on("keydown",this.handleKeyDown)},componentWillUnmount:function(){$(window).off("keydown",this.handleKeyDown)},render:function(){this.props.s;return React.createElement("div",{id:"menu"},React.createElement("div",{id:"left",className:"col xx12 s3 xx-np xx-ng",onTouchMove:this.menuLeftTouchMove},React.createElement("ul",{style:transform("translateX("+this.state.menuLeftBoxWheel+"px)")},init.menuTitle.map(this.menuItem))),React.createElement("div",{id:"right",className:"col xx12 s9 xx-np xx-ng",ref:"right",onTouchMove:this.menuRightTouchMove},React.createElement("div",{id:"rightBox",onWheel:this.menuRightWheel,ref:"rightBox",style:transform("translateY("+this.state.menuRightBoxWheel+"px)")},init.menuText[this.state.menuIndex])))}}),MenuNav=React.createClass({displayName:"MenuNav",render:function(){return React.createElement("nav",{id:"menunav",className:"s-hide"},React.createElement("ul",null,React.createElement("li",{onClick:this.props.showMenu},"選單")))}}),Npc=React.createClass({displayName:"Npc",fc:null,bc:null,animate:0,img:new Image,walk:function(){var e=this.props.s,t=12,n=init.npc?init.npc.length:0;this.fc.clearRect(0,0,e.map.col,e.map.row),this.sc.clearRect(0,0,e.map.col,e.map.row);for(var i,a=0;n>a;a++)i=init.npc[a],this.img.src=i.b,i.isU&&i.y>0||i.isU&&i.s>0?e.x<=i.pX+i.w-t&&i.pX-t<=init.man.sizeX+e.x&&e.y+24<=i.pY-t+i.h&&i.pY-t<=1+e.y+24?(init.npc[a].isM=!1,this.draw(a,i.u)):(init.npc[a].isM=!0,i.aY<=i.pY&&i.aX+i.aW>=i.pX&&i.aX<=i.pX?this.draw(a,i.u):(init.npc[a].isU=!1,init.npc[a].isL=!1,init.npc[a].isR=!1,init.npc[a].s=0)):i.isU&&0==i.y&&(init.npc[a].isU=!1),i.isD&&i.y<i.mY||i.isD&&i.s>0?e.x<=i.pX+i.w+t&&i.pX+t<=init.man.sizeX+e.x&&e.y+24<=i.pY+t+i.h&&i.pY+t<=1+e.y+24?(init.npc[a].isM=!1,this.draw(a,i.d)):(init.npc[a].isM=!0,i.aY+i.aH>=i.pY&&i.aX+i.aW>=i.pX&&i.aX<=i.pX?this.draw(a,i.d):(init.npc[a].isD=!1,init.npc[a].isL=!1,init.npc[a].isR=!1,init.npc[a].s=0)):i.isD&&i.y==i.mY&&(init.npc[a].isD=!1),i.isR&&i.x<i.mX||i.isR&&i.s>0?5!=i.t&&7!=i.t&&(e.x<=i.pX+i.w+t&&i.pX+t<=init.man.sizeX+e.x&&e.y+24<=i.pY+t+i.h&&i.pY+t<=1+e.y+24?(init.npc[a].isM=!1,this.draw(a,i.r)):(init.npc[a].isM=!0,i.aX+i.aW>=i.pX?this.draw(a,i.r):(init.npc[a].isR=!1,init.npc[a].s=0))):i.isR&&i.x==i.mX&&(init.npc[a].isR=!1),i.isL&&i.x>0||i.isL&&i.s>0?4!=i.t&&6!=i.t&&(e.x<=i.pX+i.w-t&&i.pX-t<=init.man.sizeX+e.x&&e.y+24<=i.pY-t+i.h&&i.pY-t<=1+e.y+24?(init.npc[a].isM=!1,this.draw(a,i.l)):(init.npc[a].isM=!0,i.aX<=i.pX?this.draw(a,i.l):(init.npc[a].isL=!1,init.npc[a].s=0))):i.isL&&0==i.x&&(init.npc[a].isL=!1),i.isL||i.isD||i.isU||i.isR||0!=init.npc[a].s||this.random(a);this.animate=requestAFrame(this.walk)},draw:function(e,t){var n=init.npc[e],i=Math.floor(init.npc[e].f/n.footSpeed)%4*32,a=n.h*t;this.fc.drawImage(this.img,i,a,n.w,n.h/2,n.pX,n.pY,n.w,n.h/2),this.sc.drawImage(this.img,i,a+n.h/2,n.w,n.h/2,n.pX,n.pY+n.h/2,n.w,n.h/2),n.isM&&(n.s>0&&0==t&&n.y<n.mY||n.s>0&&1==t&&n.x>0||n.s>0&&2==t&&n.x<n.mX||n.s>0&&3==t&&n.y>0?(init.npc[e].f++,this.process(e)):(init.npc[e].s--,init.npc[e].f=0))},process:function(e){switch(init.npc[e].t){case 0:init.npc[e].y--,init.npc[e].pY--;break;case 1:init.npc[e].x++,init.npc[e].pX++;break;case 2:init.npc[e].y++,init.npc[e].pY++;break;case 3:init.npc[e].x--,init.npc[e].pX--;break;case 4:init.npc[e].y--,init.npc[e].pY--,init.npc[e].x--,init.npc[e].pX--;break;case 5:init.npc[e].y--,init.npc[e].pY--,init.npc[e].x++,init.npc[e].pX++;break;case 6:init.npc[e].y++,init.npc[e].pY++,init.npc[e].x--,init.npc[e].pX--;break;case 7:init.npc[e].y++,init.npc[e].pY++,init.npc[e].x++,init.npc[e].pX++}},random:function(e){var t=Math.floor(80*Math.random())%8,n=Math.floor(100*Math.random())+10;switch(init.npc[e].s=Math.floor(100*Math.random())+1,t){case 0:init.npc[e].isU=!0,init.npc[e].y=n,init.npc[e].t=0,this.draw(e,init.npc[e].u);break;case 1:init.npc[e].isR=!0,init.npc[e].mX=n,init.npc[e].x=0,init.npc[e].t=1,this.draw(e,init.npc[e].r);break;case 2:init.npc[e].isD=!0,init.npc[e].mY=n,init.npc[e].y=0,init.npc[e].t=2,this.draw(e,init.npc[e].d);break;case 3:init.npc[e].isL=!0,init.npc[e].x=n,init.npc[e].t=3,this.draw(e,init.npc[e].l);break;case 4:init.npc[e].isU=!0,init.npc[e].isL=!0,init.npc[e].y=n,init.npc[e].x=n,init.npc[e].t=4,this.draw(e,init.npc[e].l);break;case 5:init.npc[e].isU=!0,init.npc[e].isR=!0,init.npc[e].y=n,init.npc[e].mX=n,init.npc[e].x=0,init.npc[e].t=5,this.draw(e,init.npc[e].r);break;case 6:init.npc[e].isD=!0,init.npc[e].isL=!0,init.npc[e].mY=n,init.npc[e].y=0,init.npc[e].x=n,init.npc[e].t=6,this.draw(e,init.npc[e].l);break;case 7:init.npc[e].isD=!0,init.npc[e].isR=!0,init.npc[e].mX=n,init.npc[e].x=0,init.npc[e].mY=n,init.npc[e].y=0,init.npc[e].t=7,this.draw(e,init.npc[e].r)}},componentWillMount:function(){this.animate=requestAFrame(this.walk)},componentDidMount:function(){this.fc=document.getElementById("fnpc").getContext("2d"),this.sc=document.getElementById("snpc").getContext("2d")},componentWillUnmount:function(){init.npc=[],cancelAFrame(this.animate)},render:function(){var e=this.props.s;return React.createElement("div",{x:e.x,y:e.y},React.createElement("canvas",{id:"fnpc",width:e.map.col,height:e.map.row}),React.createElement("canvas",{id:"snpc",width:e.map.col,height:e.map.row}))}}),NPCMessage=React.createClass({displayName:"NPCMessage",render:function(){var e=this.props.s;return React.createElement("div",{className:"chat",onClick:this.props.handleChat,style:{opacity:e.chatOpacity}},e.messageName," : ",e.message,React.createElement("ul",null,e.chatSelectArray.map(this.props.chatArray)))}}),Player=React.createClass({displayName:"Player",render:function(){var e=this.props.s;return React.createElement("div",null,React.createElement("canvas",{id:"player",width:e.map.col,height:e.map.row}))}}),PreLoadImg=React.createClass({displayName:"PreLoadImg",handleLoadImg:function(e){return React.createElement("img",{src:e})},render:function(){var e={display:"none"};return React.createElement("div",{style:e},init.preImg.map(this.handleLoadImg))}}),t=0,Root=React.createClass({displayName:"Root",getDefaultProps:function(){return{min:1,left:-init.man.moveSpeed,right:init.man.moveSpeed,up:-init.man.moveSpeed,down:init.man.moveSpeed}},getInitialState:function(){return{loadProcess:!0,indexShow:0,indexBoxShow:0,loadBoxShow:0,indexBox:0,map:{index:0,bg:null,col:0,row:0},x:init.man.initPos.x,y:init.man.initPos.y,left:init.man.initPos.x-1,top:init.man.initPos.y-1,manMoveImg:0,manMoveAnimate:0,mapSizeX:1,mapSizeY:1,mapLeft:0,mapTop:0,mapAnimateSpeed:"0s",mapFade:0,mapZindex:-1,isMoveLeft:0,isMoveRight:0,isMoveUp:0,isMoveDown:0,menuNav:!1,chatOpacity:0,chatSelectArray:[],chatSelectIndex:-1,messageId:-1,message:"",messageName:!1,messageNum:-1,messageMax:-1,menuDisplay:!1}},event:function(e){if(-1!=this.state.messageId)if(this.state.messageMax>this.state.messageNum){var e=this.state.messageNum+1;this.setState({messageNum:e,message:React.createElement("p",null,init.event[this.state.messageId].text[e])})}else this.initEvent();else this.setState({messageId:e,chatOpacity:1,message:React.createElement("p",null,init.event[e].text[0]),messageName:init.event[e].name,messageNum:0,messageMax:init.event[e].text.length-1})},eventSelect:function(e){if(-1!=this.state.messageId)this.state.messageMax>this.state.messageNum?this.setState({messageNum:this.state.messageNum+1,message:React.createElement("p",null,init.event[e].select[this.state.chatSelectIndex].text[this.state.messageNum+1])}):this.initEvent();else{for(var t=[],n=0;n<init.event[e].select.length;n++)t.push({id:n,title:init.event[e].select[n].title});this.setState({chatSelectIndex:0,chatSelectArray:t,messageId:e,chatOpacity:1,messageName:init.event[e].name,message:""})}},handleChat:function(e){this.moveAnimate()},handleEventSelect:function(e){-1==this.state.messageNum?this.setState({chatSelectArray:[],message:React.createElement("p",null,init.event[this.state.messageId].select[e].text[0]),messageNum:0,messageMax:init.event[this.state.messageId].select[e].text.length-1}):this.eventSelect(this.state.messageId)},getMovePoint:function(e,t){return Math.floor(e/4*t)-Math.floor(e/4*t)%init.man.moveSpeed},getResizeManPosX:function(){if(window.innerWidth-init.maps.col<0){if(this.state.x>this.getMovePoint(window.innerWidth,3)){var e=Math.floor(window.innerWidth/2-this.state.x-init.man.sizeX/2);return window.innerWidth>e+init.maps.col&&(e=window.innerWidth-init.maps.col),e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0}var e=(window.innerWidth-init.maps.col)/2;return e},getResizeManPosY:function(){if(window.innerHeight-init.maps.row<0){if(this.state.y>this.getMovePoint(window.innerHeight,3)){var e=Math.floor(window.innerHeight/2-this.state.y-init.man.sizeY/2);return window.innerHeight>e+init.maps.row&&(e=window.innerHeight-init.maps.row),e%init.man.moveSpeed!=0&&(e-=e%init.man.moveSpeed),e}return 0}var t=(window.innerHeight-init.maps.row)/2;return t},isMove:function(e,t){this.state.chatOpacity?this.initEvent():null;for(var n=init.move?init.move:0,i=init.npc?init.npc:0,a=!0,s=0;s<n.length;s++)n[s].sx<=this.state.x+init.man.sizeX+e&&this.state.x+e<=n[s].ex&&n[s].sy<=this.state.y+t+init.man.sizeY&&this.state.y+t<=n[s].ey&&(n[s].cm>=0&&this.handleMap(n[s].cm,n[s].cmm),a=!1);if(i)for(var s=0;s<i.length;s++)i[s].pX<=this.state.x+init.man.sizeX+e&&this.state.x+e<=i[s].w+i[s].pX&&i[s].pY+24<=this.state.y+t+init.man.sizeY&&this.state.y+t<=25+i[s].pY&&(a=!1);return a},isEvents:function(e,t){var n=init.events,i=init.npc?init.npc:0;if(-1==this.state.messageId){for(var a=0;a<n.length;a++)n[a].sx<=this.state.x+init.man.sizeX+e&&this.state.x+e<=n[a].ex&&n[a].sy<=this.state.y+t+init.man.sizeY&&this.state.y+t<=n[a].ey&&(init.event[n[a].ev].select?this.eventSelect(n[a].ev):this.event(n[a].ev));if(i)for(var a=0;a<i.length;a++)i[a].pX<=this.state.x+init.man.sizeX+e&&this.state.x+e<=i[a].w+i[a].pX&&i[a].pY+24<=this.state.y+t+init.man.sizeY&&this.state.y+t<=25+i[a].pY&&(init.event[i[a].e].select?this.eventSelect(i[a].e):this.event(i[a].e))}else this.state.chatSelectIndex>-1?this.handleEventSelect(this.state.chatSelectIndex):this.event(this.state.messageId)},initEvent:function(e){this.setState({chatOpacity:0,messageId:-1,messageNum:-1,messageMax:-1,chatSelectIndex:-1,chatSelectArray:[]}),e&&"function"==typeof e&&e()},handleKeyDown:function(e){if(e.preventDefault(),-1!=this.state.mapZindex)if(0!=this.state.chatSelectArray.length||this.state.menuDisplay)if(this.state.menuDisplay)switch(e.keyCode){case 27:this.initEvent(),this.showMenu()}else switch(e.keyCode){case 38:this.chatSelectMove(-1);break;case 87:this.chatSelectMove(-1);break;case 40:this.chatSelectMove(1);break;case 83:this.chatSelectMove(1);break;case 32:this.moveAnimate();break;case 13:this.moveAnimate();break;case 27:this.initEvent()}else switch(e.keyCode){case 37:init.control.left=!0;break;case 65:init.control.left=!0;break;case 39:init.control.right=!0;break;case 68:init.control.right=!0;break;case 38:init.control.up=!0;break;case 87:init.control.up=!0;break;case 40:init.control.down=!0;break;case 83:init.control.down=!0;break;case 48:this.handleMap(1,0);break;case 49:this.handleMap(this.state.map.index,0);break;case 32:this.moveAnimate();break;case 13:this.moveAnimate();break;case 27:this.initEvent(),this.showMenu()}else{switch(e.keyCode){case 38:this.handleIndexBoxMove(-1);break;case 87:this.handleIndexBoxMove(-1);break;case 40:this.handleIndexBoxMove(1);break;case 83:this.handleIndexBoxMove(1)}if(0==this.state.indexBox)switch(e.keyCode){case 32:this.handleStart();break;case 13:this.handleStart()}}},handleKeyUp:function(e){switch(e.preventDefault(),e.keyCode){case 37:this.leftStopMove();break;case 65:this.leftStopMove();break;case 39:this.rightStopMove();break;case 68:this.rightStopMove();break;case 38:this.upStopMove();break;case 87:this.upStopMove();break;case 40:this.downStopMove();break;case 83:this.downStopMove()}},leftStopMove:function(){init.control.left=!1,init.map.left=!1},rightStopMove:function(){init.control.right=!1,init.map.right=!1},upStopMove:function(){init.control.up=!1,init.map.up=!1},downStopMove:function(){init.control.down=!1,init.map.down=!1},handleResize:function(){this.setState({isMoveLeft:this.getMovePoint(window.innerWidth,1),isMoveRight:this.getMovePoint(window.innerWidth,3),isMoveUp:this.getMovePoint(window.innerHeight,1),isMoveDown:this.getMovePoint(window.innerHeight,3),mapLeft:this.getResizeManPosX(),mapTop:this.getResizeManPosY(),menuNav:window.innerWidth<768?!0:!1})},handleMap:function(e,t){this.AjaxLoad(e,function(){this.setState({map:init.maps,left:init.maps["in"][t].x-1,top:init.maps["in"][t].y-1,x:init.maps["in"][t].x,y:init.maps["in"][t].y}),this.handleResize(),this.drawObject(function(){this.setState({mapFade:1})}.bind(this))}.bind(this))},handleStart:function(){this.AjaxLoad(this.state.map.index,function(){this.setState({mapZindex:1,indexBoxShow:0,indexShow:0,map:init.maps}),this.handleResize(),this.drawObject(function(){this.setState({mapFade:1})}.bind(this))}.bind(this))},AjaxLoad:function(e,t){this.setState({mapFade:0}),$.ajax({url:init.mapUrl[e],dataType:"json",error:function(e){console.log("Ajax Error")},success:function(n){$.getScript(init.evtUrl[e]),init.maps=n.map,init.npc=n.npc,this.AjaxProcessObject(n.styles),this.AjaxProcessMove(n.isMove,function(){t&&"function"==typeof t&&t()})}.bind(this)})},AjaxProcessObject:function(e){init.firstCanvas.length=0,init.secondCanvas.length=0;for(var t=0,n=0,i=0;i<e.length;i++){var a=e[i],s=init.preImg.length,c=!1,r={left:a.l,top:a.t,width:a.w,height:a.h,background:a.b,sourceX:a.x,sourceY:a.y};2==a.z?(init.firstCanvas[t]=r,t+=1):(init.secondCanvas[n]=r,n+=1);for(var l=0;s>l;l++)init.preImg[l]==a.b&&(c=!0);c||init.preImg.push(a.b)}},AjaxProcessMove:function(e,t){init.move.length=0,init.events.length=0;for(var n=0,i=0,a=0;a<e.length;a++){var s=e[a],c={sx:s.x,sy:s.y,ex:s.w+s.x,ey:s.h+s.y,cm:s.cm,cmm:s.cmm};if(init.move[n]=c,n+=1,s.e>=0){var r={sx:s.x,sy:s.y,ex:s.w+s.x,ey:s.h+s.y,ev:s.e};init.events[i]=r,i+=1}e.length-a==1&&t&&"function"==typeof t&&t()}},backIndex:function(){this.setState({mapZindex:-1,indexBoxShow:1,indexShow:1,loadProcess:!1,mapFade:0})},handleIndexBoxMove:function(e){this.state.indexBox+e>2?e=(this.state.indexBox+e)%3:(e=this.state.indexBox+e,-1==e&&(e=2)),this.setState({indexBox:e})},chatSelectMove:function(e){var t=e+this.state.chatSelectIndex;t>=0&&t<this.state.chatSelectArray.length&&this.setState({chatSelectIndex:t})},handleLoad:function(){this.backIndex()},getTouchPos:function(e){return{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}},handleTouchStart:function(e){if(0!=this.state.mapFade){var t=this.getTouchPos(e);init.startTouch.x=t.x,init.startTouch.y=t.y}},handleTouchMove:function(e){if(e.preventDefault(),0!=this.state.mapFade&&!this.state.menuDisplay){var t=this.getTouchPos(e);t.x-init.startTouch.x<-25?init.control.left=!0:(init.control.left=!1,init.map.left=!1),t.x-init.startTouch.x>25?init.control.right=!0:(init.control.right=!1,init.map.right=!1),t.y-init.startTouch.y<-25?init.control.up=!0:(init.control.up=!1,init.map.up=!1),t.y-init.startTouch.y>25?init.control.down=!0:(init.control.down=!1,init.map.down=!1)}},handleTouchEnd:function(e){init.control.left=!1,init.map.left=!1,init.control.right=!1,init.map.right=!1,init.control.up=!1,init.map.up=!1,init.control.down=!1,init.map.down=!1},preLoadImg:function(e){for(var t=init.preImg.length,n=0;n<init.preImg.length;n++){var i=new Image;i.onload=function(){--t<=0&&e()},i.src=init.preImg[n]}},drawObject:function(e){this.preLoadImg(function(){init.fcontext.clearRect(0,0,init.maps.col,init.maps.row),init.scontext.clearRect(0,0,init.maps.col,init.maps.row);for(var t=new Image,n=(this.state,init.firstCanvas),i=init.secondCanvas,a=0;a<n.length;a++)t.src=n[a].background,init.fcontext.drawImage(t,n[a].sourceX,n[a].sourceY,n[a].width,n[a].height,n[a].left,n[a].top,n[a].width,n[a].height);for(var a=0;a<i.length;a++)t.src=i[a].background,init.scontext.drawImage(t,i[a].sourceX,i[a].sourceY,i[a].width,i[a].height,i[a].left,i[a].top,i[a].width,i[a].height);e&&"function"==typeof e&&e()}.bind(this))},moveAnimate:function(){switch(this.state.manMoveImg){case 1:this.isEvents(this.props.left,0);break;case 2:this.isEvents(this.props.right,0);break;case 3:this.isEvents(0,this.props.up);break;case 0:this.isEvents(0,this.props.down)}},move:function(){if(this.state.mapFade){init.player.clearRect(0,0,init.maps.col,init.maps.row);var e=this.props,t=this.state,n={manMoveImg:t.manMoveImg,manMoveAnimate:t.manMoveAnimate,mapLeft:t.mapLeft,mapTop:t.mapTop,x:t.x,y:t.y,left:t.left,top:t.top},i=init.control,a=init.map;if(i.left&&(n.manMoveImg=1),i.right&&(n.manMoveImg=2),i.up&&(n.manMoveImg=3),i.down&&(n.manMoveImg=0),i.left&&t.x>e.min){var s=this.isMove(e.left,0);s?(n.x=t.x+e.left,n.left=e.left*t.mapSizeX+t.left,a.left=0!=t.mapLeft&&t.isMoveLeft-t.mapLeft==t.x?!0:!1):a.left=!1}if(i.right&&init.maps.col-init.man.sizeX*t.mapSizeX>t.x){var c=this.isMove(e.right,0);c?(n.x=t.x+e.right,n.left=e.right*t.mapSizeX+t.left,a.right=t.mapSizeX*init.maps.col+t.mapLeft>window.innerWidth&&t.isMoveRight-t.mapLeft==t.x?!0:!1):a.right=!1}if(i.up&&t.y>e.min){var r=this.isMove(0,e.up);r?(n.y=t.y+e.up,n.top=e.up*t.mapSizeY+t.top,a.up=0!=t.mapTop&&t.isMoveUp-t.mapTop==t.y?!0:!1):a.up=!1}if(i.down&&init.maps.row-init.man.sizeY*t.mapSizeY>t.y){var l=this.isMove(0,e.down);l?(n.y=t.y+e.down,n.top=e.down*t.mapSizeY+t.top,a.down=t.mapSizeY*init.maps.row+t.mapTop>window.innerHeight&&t.isMoveDown-t.mapTop==t.y?!0:!1):a.down=!1}a.left&&(n.mapLeft-=e.left),a.right&&(n.mapLeft-=e.right),a.up&&(n.mapTop-=e.up),a.down&&(n.mapTop-=e.down),(i.left||i.right||i.up||i.down)&&(init.man.spriteSpeed||(n.manMoveAnimate=(t.manMoveAnimate+1)%4),init.man.spriteSpeed<init.man.spriteSpeedCount?init.man.spriteSpeed++:init.man.spriteSpeed=0,this.setState(n)),init.player.drawImage(init.man.sprite,this.state.manMoveAnimate*init.man.sizeX,this.state.manMoveImg*init.man.sizeY,init.man.sizeX,init.man.sizeY,this.state.x,this.state.y,init.man.sizeX,init.man.sizeY)}this.timer=requestAFrame(this.move.bind(this))},indexBox:function(e){return this.state.indexBox==e.id?0==e.id?React.createElement("li",{style:{borderColor:"white"},onClick:this.handleStart},e.title):React.createElement("li",{style:{borderColor:"white"}},e.title):0==e.id?React.createElement("li",{onClick:this.handleStart,style:{borderColor:"transparent"},onMouseOver:this.indexBoxSelect.bind("null",e.id)},e.title):React.createElement("li",{style:{borderColor:"transparent"},onMouseOver:this.indexBoxSelect.bind("null",e.id)},e.title)},showMenu:function(){this.setState({menuDisplay:!this.state.menuDisplay})},indexBoxSelect:function(e){this.setState({indexBox:e})},chatArray:function(e){return this.state.chatSelectIndex==e.id?React.createElement("li",{style:{borderColor:"white"}},e.title):React.createElement("li",{style:{borderColor:"transparent"},onMouseOver:this.chatSelect.bind("null",e.id)},e.title)},chatSelect:function(e){this.setState({chatSelectIndex:e})},componentWillMount:function(){},componentDidMount:function(){var e=document.getElementById("player");init.player=e.getContext("2d"),$(window).on("load",this.handleLoad),$(window).on("resize",this.handleResize),$(window).on("keydown",this.handleKeyDown),$(window).on("keyup",this.handleKeyUp),$.ajaxSetup({cache:!1}),this.timer=requestAFrame(this.move.bind(this))},componentWillUnmount:function(){$(window).off("resize",this.handleResize),$(window).off("keydown",this.handleKeyDown),$(window).off("keyup",this.handleKeyUp),cancelAFrame(this.timer)},render:function(){var e=this.state;return React.createElement("div",{id:"container",onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},-1==e.mapZindex?React.createElement(Index,{indexBox:this.indexBox,s:e}):null,React.createElement(Map,{s:e}),e.menuNav?React.createElement(MenuNav,{showMenu:this.showMenu}):null,-1!=e.mapZindex?React.createElement(NPCMessage,{handleChat:this.handleChat,chatArray:this.chatArray,s:e}):null,e.menuDisplay?React.createElement(Menu,{getTouchPos:this.getTouchPos,menuItem:this.menuItem,s:e}):null,e.loadProcess?React.createElement(Load,null):null)}}),rt=React.render(React.createElement(Root,null),document.body);init.menuTitle=[{id:0,title:"實作紀錄"},{id:1,title:"說明"},{id:2,title:"關於作者"},{id:3,title:"操作"},{id:4,title:"素材來源"},{id:5,title:"Disqus留言"}],init.menuText=[React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"學習日誌條"),React.createElement("ul",null,React.createElement("li",null,React.createElement("date",null,"2015/09/03"),React.createElement("p",null,"在一開始學習 ReactJS 時，不太懂 State 跟 Props 的用意，但是程式碼還是一字一字的刻上去，到現在要新增功能時，感覺都特別的凌亂不勘。目前第一步就是先把 ROOT 內部組件分割開來。")),React.createElement("br",null),React.createElement("li",null,React.createElement("date",null,"2015/09/02"),React.createElement("p",null,"練習",React.createElement("mark",null,"Socket.io"),"順便就把現成的單機版Clone 去 Heroku 變成了很陽春的",React.createElement("a",{href:"http://dkbo-rpg-online.herokuapp.com/",target:"_blank"},"線上互動版"),"，只是遊戲開發經驗 0 的我不知道如何去優化，所以就當作試試水溫。聊天框也沒有去做特別的處理也沒有",React.createElement("mark",null,"RWD"),"，所以別傷到眼睛了。最近可能要慢慢的把整個架構的程式在重寫了。淚")),React.createElement("br",null),React.createElement("li",null,React.createElement("date",null,"2015/08/31"),React.createElement("p",null,"遊戲呈現的部分原本是 ",React.createElement("code",null,"div")," 配上 ",React.createElement("code",null,"translate3D"),"去做位移呈現，現在全部轉換成 ",React.createElement("code",null,"Canvas")," 呈現畫面。在計時的部分有看到",React.createElement("a",{href:"https://msdn.microsoft.com/zh-tw/library/Hh920765(v=VS.85).aspx",target:"_blank"},"此篇文章"),"所以都轉換成 ",React.createElement("code",null,"requestAnimationFrame")," 呈現動畫。部分 JSX 資料抽離，並透過 $.getScript 來取出。")),React.createElement("br",null),React.createElement("li",null,React.createElement("date",null,"2015/08/29"),React.createElement("p",null,"圖片及部分資料改成 AJAX 方式取得。目前尚未轉場效果。接下來要把 NPC 在做出來。"),React.createElement("iframe",{height:"268",scrolling:"no",src:"//codepen.io/dkbo/embed/RWbjjZ/?height=268&theme-id=4234&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true",style:{width:"100%"}},"See the Pen ",React.createElement("a",{href:"http://codepen.io/dkbo/pen/RWbjjZ/"},"RPG NPC Walk Type one ")," by dkbo (",React.createElement("a",{href:"http://codepen.io/dkbo"},"@dkbo"),") on ",React.createElement("a",{href:"http://codepen.io"},"CodePen"),".")),React.createElement("br",null),React.createElement("li",null,React.createElement("date",null,"2015/08/25"),React.createElement("p",null,"預載圖片的問題瞎忙了很多時間，最後還是放在HTML裡吧!")))),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"簡介"),React.createElement("p",null,"此遊戲履歷想法來源在於 ",React.createElement("mark",null,"RPG 遊戲製作大師"),"，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　",React.createElement("a",{href:"http://facebook.github.io/react/",target:"_blank"},"ReactJS")," ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。"),React.createElement("h2",null,"可擴展"),React.createElement("p",null,"遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。"),React.createElement("h2",null,"遊戲目的"),React.createElement("p",null,"拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。"),React.createElement("h2",null,"遊戲內容"),React.createElement("p",null,"作者會在空餘的時間，慢慢地加進一些資訊及修改程式。")),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"作者"),React.createElement("div",{className:"row xx-ng"},React.createElement("figrue",{className:"col xx12 x6 x6o3 s3o0 s3 l2 xx-np"},React.createElement("img",{src:"http://1.gravatar.com/avatar/d2cddbe46278bf25a41b9479af20cf8d?s=250&d=wavatar&r=g",width:"100%"})),React.createElement("div",{className:"col xx12  s9 l10 xx-np"},React.createElement("p",{className:"s-p"},"前端攻城師，做出的網頁以兼容電腦、手機、平板等裝置為優先。會簡單的後端語言連接資料庫能做出簡易的會員系統、訂單管理系統、物流管理系統等等。正朝著網頁美感路線努力中。"))),React.createElement("h2",null,"作者自介"),React.createElement("p",null,"作者本名叫 盧宏寶 27歲，在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，目前已婚有一子。",React.createElement("br",null),React.createElement("br",null),"第一份的正式工作在",React.createElement("mark",null,"宗賢科技有限公司"),"，擔任",React.createElement("mark",null,"系統工程師"),"，利用 ABB 的 MicroSCADA　建置、維護系統，接觸到 ModBus、TCP/IP、optical 等通訊協定，簡單來說就是用電腦來監控廠房內的設備，並即時接收資料/傳入訊號至設備，建立日周月年報表，當設備有任何問題時，會出現 Alarm，透過 SCADA 線路圖可以第一時間判斷場地，並可以視問題大小而決定是否遠端 Close 開關。來避免災害、更大的損失。",React.createElement("br",null),React.createElement("br",null),"第二份工作在",React.createElement("mark",null,"威鴻數位工程有限公司"),"，擔任",React.createElement("mark",null,"系統工程師"),"，公司營運以監控設備的維護及安裝，並代理藍眼補習班補課系統。在職期間負責監工器材的安裝，及系統配置。",React.createElement("br",null),React.createElement("br",null),"第三份工作在",React.createElement("mark",null,"台灣惠多笑有限公司"),"，擔任網頁工程師，目前在職中。主要在於維護或架設官方網站、依老闆需求製作海報文宣品，並負責維護公司電腦及網路。"),React.createElement("h2",null,"技能專長"),React.createElement("p",null,"網頁切版、網頁程式撰寫、網頁開發工具運用、向量繪圖軟體操作、網路基礎概念、",React.createElement("del",null,"水電知識"),React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁切版"),React.createElement("br",null),"切版工具或任何圖像檔用 CSS 、 HTML 盡量想辦法呈現出來。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁程式撰寫"),React.createElement("br",null),"以文書工具寫前後端語言，依照公司、團隊需求主動研習模組化程式。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網頁開發工具運用"),React.createElement("br",null),"開發工具千層百變，永遠學不完用不完，不管是記事本還是程式語言類都有包裝、合併、分割、轉譯...等等，所以選幾套先上手，提升開發的效率，等穩健了在來執行 push 、 splice 來改變自己的套裝工具，部分工具也是依照公司、團隊需求主動研習。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"向量繪圖軟體操作"),React.createElement("br",null),"向量繪圖也是很大的學問，懂的如何操作，有時候也會減少不必要的麻煩。",React.createElement("br",null),React.createElement("br",null),React.createElement("mark",null,"網路基礎概念"),React.createElement("br",null),"網路或可以改稱雲端，懂得在網路斷訊時，如何的故障檢測，或是架設簡易的 Server ",React.createElement("br",null),React.createElement("br",null))),React.createElement("aircle",{
className:"clearfix"},React.createElement("h2",null,"電腦熱鍵"),React.createElement("p",null,"上 : ",React.createElement("kbd",null,"w")," 、 下 : ",React.createElement("kbd",null,"s")," 、 左 : ",React.createElement("kbd",null,"l")," 、 右 : ",React.createElement("kbd",null,"r")),React.createElement("p",null,"X座標格線 : ",React.createElement("kbd",null,"x")," 、 Y座標格線 : ",React.createElement("kbd",null,"y")),React.createElement("p",null,"執行 : ",React.createElement("kbd",null,"Space"),"、",React.createElement("kbd",null,"Enter")),React.createElement("p",null,"選單: ",React.createElement("kbd",null,"Esc")),React.createElement("h2",null,"行動裝置觸碰方式"),React.createElement("p",null,"上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑"),React.createElement("p",null,"執行 : 螢幕下方處觸碰")),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"地圖拼圖"),React.createElement("p",null,"來源 : ",React.createElement("br",null),React.createElement("a",{href:"http://fc03.deviantart.net/fs26/i/2008/149/d/7/rpg_maker_xp_the_best_tileset_by_davide_86.png",target:"_blank"},"www.deviantart.com/")),React.createElement("h2",null,"人物拼圖"),React.createElement("p",null,"來源 : ",React.createElement("br",null),React.createElement("a",{href:"http://doraspace.web.fc2.com/file/image/material/xp/chara/dora_blu.png",target:"_blank"},"doraspace.web.fc2.com")),React.createElement("p",null,"來源 : ",React.createElement("br",null),React.createElement("a",{href:"http://www.geocities.jp/kurororo4/looseleaf/",target:"_blank"},"www.geocities.jp"))),React.createElement("aircle",{className:"clearfix"},React.createElement("h2",null,"留下訊息"),React.createElement(Disqus,null),React.createElement("noscript",null,"Please enable JavaScript to view the ",React.createElement("a",{href:"https://disqus.com/?ref_noscript",rel:"nofollow"},"comments powered by Disqus.")))],init.indexBox=[{id:0,title:"Start"},{id:1,title:"Load"},{id:2,title:"End"}];