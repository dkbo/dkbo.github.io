var Npc = React.createClass({
fc : null,
bc : null,
animate : 0,
img : new Image(),
walk : function(){
  var pos = 12 ;
  var l = init.npc ? init.npc.length : 0;
  this.fc.clearRect(0,0,this.props.width,this.props.height);
  this.sc.clearRect(0,0,this.props.width,this.props.height);
  var n;
    for(var i=0;i<l;i++){
        n = init.npc[i];
        this.img.src = n.b; 
      if(n.isU && n.y > 0 || (n.isU && n.s > 0)){
        if((this.props.x <= n.pX+n.w -pos) && (n.pX-pos <= init.man.sizeX+this.props.x) && (this.props.y+24 <= n.pY-pos+n.h) && (n.pY-pos <= 1+this.props.y+24)){
          init.npc[i].isM = false;
          this.draw(i,n.u);
        }
        else{
          init.npc[i].isM = true;
        if(n.aY <= n.pY && (n.aX + n.aW) >= n.pX && n.aX <= n.pX  )
            this.draw(i,n.u);
        else{
            init.npc[i].isU = false;
            init.npc[i].isL = false;
            init.npc[i].isR = false;
            init.npc[i].s = 0;
        }
      }
      }

      else if(n.isU && n.y == 0)
        init.npc[i].isU = false;

      if(n.isD && n.y < n.mY || (n.isD && n.s > 0 )){
        if((this.props.x <= n.pX+n.w +pos) && (n.pX+pos <= init.man.sizeX+this.props.x) && (this.props.y+24 <= n.pY+pos+n.h) && (n.pY+pos <= 1+this.props.y+24)){
          init.npc[i].isM = false;
          this.draw(i,n.d);
        }
        else{
          init.npc[i].isM = true;
        if((n.aY + n.aH) >= n.pY  && (n.aX + n.aW) >= n.pX && n.aX <= n.pX  )
            this.draw(i,n.d);
        else{
            init.npc[i].isD = false;
            init.npc[i].isL = false;
            init.npc[i].isR = false;
            init.npc[i].s = 0;
        }
      }
      }
      else if(n.isD && n.y == n.mY)
        init.npc[i].isD = false;

      if(n.isR && n.x < n.mX || (n.isR && n.s > 0)){
        if(n.t != 5 && n.t != 7){
        if((this.props.x <= n.pX+n.w +pos) && (n.pX+pos <= init.man.sizeX+this.props.x) && (this.props.y+24 <= n.pY+pos+n.h) && (n.pY+pos <= 1+this.props.y+24)){
          init.npc[i].isM = false;
          this.draw(i,n.r);
        }
        else{
          init.npc[i].isM = true;
        
        if((n.aX + n.aW) >= n.pX )
            this.draw(i,n.r);
        else{
            init.npc[i].isR = false;
            init.npc[i].s = 0;
        }
        }
      }
    }
      else if(n.isR && n.x == n.mX)
        init.npc[i].isR = false; 


      if(n.isL && n.x > 0 || (n.isL && n.s > 0)){
        if(n.t != 4 && n.t != 6){
        if((this.props.x <= n.pX+n.w -pos) && (n.pX-pos <= init.man.sizeX+this.props.x) && (this.props.y+24 <= n.pY-pos+n.h) && (n.pY-pos <= 1+this.props.y+24)){
          init.npc[i].isM = false;
          this.draw(i,n.l);
        }
        else{
          init.npc[i].isM = true;
        
         if(n.aX <= n.pX )
            this.draw(i,n.l);
        else{
            init.npc[i].isL = false;
            init.npc[i].s = 0;
        }
      }
      }
      }     
      else if(n.isL && n.x == 0)
        init.npc[i].isL = false;
      
      if(!n.isL && !n.isD && !n.isU && !n.isR && init.npc[i].s == 0){
        this.random(i);
      }
    }
  this.animate = requestAFrame(this.walk);
},
draw : function(i,turn){
  var n = init.npc[i];
  var a = Math.floor(init.npc[i].f/ n.footSpeed) % 4 * 32 ;
  var t = n.h * turn;
  this.fc.drawImage(this.img,  a , t , n.w, n.h/2 ,n.pX,n.pY , n.w, n.h/2);
  this.sc.drawImage(this.img,  a , t+n.h/2 , n.w, n.h/2 ,n.pX,n.pY+n.h/2 , n.w, n.h/2);
  if(n.isM){
  if ((n.s > 0 && turn == 0 && n.y < n.mY) || (n.s > 0 && turn == 1 && n.x > 0) || (n.s > 0 && turn == 2 && n.x < n.mX) || (n.s > 0 && turn == 3 && n.y > 0)){
    init.npc[i].f++;
    this.process(i);
  }
  else{
    init.npc[i].s--;
    init.npc[i].f = 0;
  }
}
},
process : function(i){
  switch(init.npc[i].t){
    case 0:
      init.npc[i].y--;
      init.npc[i].pY--;
      break;
    case 1:
      init.npc[i].x++;
      init.npc[i].pX++;
      break;
    case 2:
      init.npc[i].y++;
      init.npc[i].pY++;
      break;
    case 3:
      init.npc[i].x--;
      init.npc[i].pX--;
      break;
    case 4:
      init.npc[i].y--;
      init.npc[i].pY--;
      init.npc[i].x--;
      init.npc[i].pX--;
      break;
    case 5:
      init.npc[i].y--;
      init.npc[i].pY--;  
      init.npc[i].x++;
      init.npc[i].pX++;
      break;
    case 6:
      init.npc[i].y++;
      init.npc[i].pY++;
      init.npc[i].x--;
      init.npc[i].pX--;
      break;
    case 7:
      init.npc[i].y++;
      init.npc[i].pY++;  
      init.npc[i].x++;
      init.npc[i].pX++;
      break;  
  
  }
},
random : function(i){
  var r = Math.floor(Math.random()*80)%8;
  var rw = Math.floor(Math.random()*100)+10;
  init.npc[i].s = Math.floor(Math.random()*100)+1;
  switch(r){
    case 0:
      init.npc[i].isU = true;
      init.npc[i].y = rw;
      init.npc[i].t = 0;
      this.draw(i,init.npc[i].u);
      break;  
    case 1:
      init.npc[i].isR = true;
      init.npc[i].mX = rw;
      init.npc[i].x = 0;
      init.npc[i].t = 1;
      this.draw(i,init.npc[i].r);
      break; 
    case 2:
      init.npc[i].isD = true;
      init.npc[i].mY = rw;
      init.npc[i].y = 0;
      init.npc[i].t = 2;
      this.draw(i,init.npc[i].d);
      break;
    case 3:
      init.npc[i].isL = true;
      init.npc[i].x = rw;
      init.npc[i].t = 3;
      this.draw(i,init.npc[i].l);
      break;
    case 4:
      init.npc[i].isU = true;
      init.npc[i].isL = true;
      init.npc[i].y = rw;
      init.npc[i].x = rw;
      init.npc[i].t = 4;
      this.draw(i,init.npc[i].l);
      break;  
    case 5:
      init.npc[i].isU = true;
      init.npc[i].isR = true;
      init.npc[i].y = rw;
      init.npc[i].mX = rw;
      init.npc[i].x = 0;
      init.npc[i].t = 5;
      this.draw(i,init.npc[i].r);
      break; 
    case 6:
      init.npc[i].isD = true;
      init.npc[i].isL = true;
      init.npc[i].mY = rw;
      init.npc[i].y = 0;
      init.npc[i].x = rw;
      init.npc[i].t = 6;
      this.draw(i,init.npc[i].l);
      break;
    case 7:
      init.npc[i].isD = true;  
      init.npc[i].isR = true;
      init.npc[i].mX = rw;
      init.npc[i].x = 0;
      init.npc[i].mY = rw;
      init.npc[i].y = 0;
      init.npc[i].t = 7;
      this.draw(i,init.npc[i].r);
      break;       
  }
},
componentWillMount : function(){
    this.animate = requestAFrame(this.walk);
},
componentDidMount : function(){
  this.fc = document.getElementById("fnpc").getContext('2d');
  this.sc = document.getElementById("snpc").getContext('2d');
  
},
componentWillUnmount : function(){
  init.npc= [];
  cancelAFrame(this.animate);
},
render : function(){
  return(
  <div x={this.props.x} y={this.props.y} >
    <canvas id="fnpc" width={this.props.width}  height={this.props.height} />
    <canvas id="snpc" width={this.props.width}  height={this.props.height} />
    </div>
  )
}
});


var rt = React.render(<Root  />,document.body)


// 選單內容 
init.menuTitle =[ 
    {
      id : 0,
      title: "實作紀錄"
    },
    {
      id : 1,
      title: "說明"
    },
    {
      id : 2,
      title :"關於作者"
    },
    {
      id : 3,
      title :"操作"
    },
    {
      id : 4,
      title :"素材來源"
    }
    ,
    {
      id : 5,
      title :"Disqus留言"
    }
  ];
init.menuText =
  [
    <aircle className="clearfix">
      <h2>紀錄條</h2>
      <ul>
        <li>
          <date>2015/08/31</date>
          <p>遊戲呈現的部分原本是 <code>div</code> 配上 <code>translate3D</code>去做位移呈現，現在全部轉換成 <code>Canvas</code> 呈現畫面。在計時的部分有看到<a href="https://msdn.microsoft.com/zh-tw/library/Hh920765(v=VS.85).aspx" target="_blank">此篇文章</a>所以都轉換成 <code>requestAnimationFrame</code> 呈現動畫。部分 JSX 資料抽離，並透過 $.getScript 來取出。</p>
        </li>
        <br />
        <li>
          <date>2015/08/29</date>
          <p>圖片及部分資料改成 AJAX 方式取得。目前尚未轉場效果。接下來要把 NPC 在做出來。</p>
          <iframe height='268' scrolling='no' src='//codepen.io/dkbo/embed/RWbjjZ/?height=268&theme-id=4234&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: "100%"}}>See the Pen <a href='http://codepen.io/dkbo/pen/RWbjjZ/'>RPG NPC Walk Type one </a> by dkbo (<a href='http://codepen.io/dkbo'>@dkbo</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>        
        </li>
        <br />
        <li>
          <date>2015/08/25</date>
          <p>預載圖片的問題瞎忙了很多時間，最後還是放在HTML裡吧!</p>
        </li>
      </ul>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>簡介</h2>
      <p>此遊戲履歷想法來源在於 <mark>RPG 遊戲製作大師</mark>，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　<a href="http://facebook.github.io/react/" target="_blank" >ReactJS</a> ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。</p>
      <h2>可擴展</h2>
      <p>遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。</p>
      <h2>遊戲目的</h2>
      <p>拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。</p>
      <h2>遊戲內容</h2>
      <p>作者會在空餘的時間，慢慢地加進一些資訊及修改程式。</p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>作者</h2>
      <div className="row xx-ng">
        <figrue className="col xx12 x6 x6o3 s3o0 s3 l2 xx-np"><img src="http://1.gravatar.com/avatar/d2cddbe46278bf25a41b9479af20cf8d?s=250&d=wavatar&r=g" width="100%"/></figrue>
        <div className="col xx12  s9 l10 xx-np"><p className="s-p">前端攻城師，做出的網頁以兼容電腦、手機、平板等裝置為優先。會簡單的後端語言連接資料庫能做出簡易的會員系統、訂單管理系統、物流管理系統等等。正朝著網頁美感路線努力中。</p></div>
      </div>
      <h2>作者自介</h2>
      <p>作者本名叫 盧宏寶 27歲，在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，目前已婚有一子。<br /><br />
         第一份的正式工作在<mark>宗賢科技有限公司</mark>，擔任<mark>系統工程師</mark>，利用 ABB 的 MicroSCADA　建置、維護系統，接觸到 ModBus、TCP/IP、optical 等通訊協定，簡單來說就是用電腦來監控廠房內的設備，並即時接收資料/傳入訊號至設備，建立日周月年報表，當設備有任何問題時，會出現 Alarm，透過 SCADA 線路圖可以第一時間判斷場地，並可以視問題大小而決定是否遠端 Close 開關。來避免災害、更大的損失。<br /><br />
         第二份工作在<mark>威鴻數位工程有限公司</mark>，擔任<mark>系統工程師</mark>，公司營運以監控設備的維護及安裝，並代理藍眼補習班補課系統。在職期間負責監工器材的安裝，及系統配置。<br /><br />
         第三份工作在<mark>台灣惠多笑有限公司</mark>，擔任網頁工程師，目前在職中。主要在於維護或架設官方網站、依老闆需求製作海報文宣品，並負責維護公司電腦及網路。</p>
      <h2>技能專長</h2>
      <p>網頁切版、網頁程式撰寫、網頁開發工具運用、向量繪圖軟體操作、網路基礎概念、<del>水電知識</del><br /><br />
      <mark>網頁切版</mark><br />
      切版工具或任何圖像檔用 CSS 、 HTML 盡量想辦法呈現出來。<br /><br />
      <mark>網頁程式撰寫</mark><br />
      以文書工具寫前後端語言，依照公司、團隊需求主動研習模組化程式。<br /><br />
      <mark>網頁開發工具運用</mark><br />
      開發工具千層百變，永遠學不完用不完，不管是記事本還是程式語言類都有包裝、合併、分割、轉譯...等等，所以選幾套先上手，提升開發的效率，等穩健了在來執行 push 、 slice 來改變自己的套裝工具，部分工具也是依照公司、團隊需求主動研習。<br /><br /> 
      <mark>向量繪圖軟體操作</mark><br />
      向量繪圖也是很大的學問，懂的如何操作，有時候也會減少不必要的麻煩。<br /><br />
      <mark>網路基礎概念</mark><br />
      網路或可以改稱雲端，懂得在網路斷訊時，如何的故障檢測，或是架設簡易的 Server <br /><br />
      </p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>電腦熱鍵</h2>
      <p>上 : <kbd>w</kbd> 、 下 : <kbd>s</kbd> 、 左 : <kbd>l</kbd> 、 右 : <kbd>r</kbd></p>
      <p>X座標格線 : <kbd>x</kbd> 、 Y座標格線 : <kbd>y</kbd></p>
      <p>執行 : <kbd>Space</kbd>、<kbd>Enter</kbd></p>
      <p>選單: <kbd>Esc</kbd></p>
      <h2>行動裝置觸碰方式</h2>
      <p>上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑</p>
      <p>執行 : 螢幕下方處觸碰</p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>地圖拼圖</h2>
      <p>來源 : <br /><a href="http://fc03.deviantart.net/fs26/i/2008/149/d/7/rpg_maker_xp_the_best_tileset_by_davide_86.png" target="_blank">www.deviantart.com/</a></p>
      <h2>人物拼圖</h2>
      <p>來源 : <br /><a href="http://doraspace.web.fc2.com/file/image/material/xp/chara/dora_blu.png" target="_blank">doraspace.web.fc2.com</a></p>
      <p>來源 : <br /><a href="http://www.geocities.jp/kurororo4/looseleaf/" target="_blank">www.geocities.jp</a></p>
      
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>留下訊息</h2>
      <Disqus />
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
    </aircle>
  ];
init.indexBox =[ 
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
  ];