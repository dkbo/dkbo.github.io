init.maps =[
// Map 0
  {
    bg : init.map.bg,
    col : 1920,
    row : 1280,
  in :[{
      x : 472,
      y : 544
    },{
      x : 1344,
      y : 512
    }]
  },
// Map 1
  {
    bg : init.map.bg,
    col : 960,
    row : 640,
  in :[{
      x : 472,
      y : 580
    }]
  },
// Map 2
  {
    bg : init.map.bg,
    col : 960,
    row : 640,
  in :[{
      x : 472,
      y : 580
    }]
  }
  ]
init.menuTitle =[ 
    {
      id : 0,
      title: "說明"
    },
    {
      id : 1,
      title :"關於作者"
    },
    {
      id : 2,
      title :"操作"
    },
    {
      id : 3,
      title :"素材來源"
    }
  ];
init.menuText =
  [
    <aircle className="clearfix">
      <h2>簡介</h2>
      <p>此遊戲履歷想法來源在於 <mark>RPG 遊戲製作大師</mark>，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　<a href="http://facebook.github.io/react/" target="_blank" >ReactJS</a> ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。</p>
      <h2>可擴展</h2>
      <p>遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。</p>
      <h2>遊戲目的</h2>
      <p>拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。</p>
      <h2>遊戲內容</h2>
      <p>作者會在空餘的時間，慢慢地加進一些資訊。</p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>作者</h2>
      <div className="row xx-ng">
        <figrue className="col xx12 x6 s3 l2 xx-np"><img src="http://1.gravatar.com/avatar/d2cddbe46278bf25a41b9479af20cf8d?s=250&d=wavatar&r=g" width="100%"/></figrue>
        <div className="col xx12 x6 s9 l10 xx-np"><p className="s-p">前端攻城師，做出的網頁以兼容電腦、手機、平板等裝置為優先。會簡單的後端語言連接資料庫能做出簡易的會員系統、訂單管理系統、物流管理系統等等。正朝著網頁美感路線努力中。</p></div>
      </div>
      <h2>作者自介</h2>
      <p>作者本名叫 盧宏寶 27歲，在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，目前已婚有一子。<br /><br />
        第一份的正式工作在<mark>宗賢科技有限公司</mark>，擔任<mark>系統工程師</mark>，利用 ABB 的 MicroSCADA　建置、維護系統，接觸到 ModBus、TCP/IP、optical 等通訊協定，簡單來說就是用電腦來監控廠房內的設備，並即時接收資料/傳入訊號至設備，建立日周月年報表，當設備有任何問題時，會出現 Alarm，透過 SCADA 線路圖可以第一時間判斷場地，並可以視問題大小而決定是否遠端 Close 開關。來避免災害、更大的損失。<br /><br />
        第二份工作在<mark>威鴻數位工程有限公司</mark>，擔任<mark>系統工程師</mark>，公司營運以監控設備的維護及安裝，並代理藍眼補習班補課系統。在職期間負責監工器材的安裝，及系統配置。<br /><br />
        第三份工作在<mark>台灣惠多笑有限公司</mark>，擔任網頁工程師，目前在職中。主要在於維護或架設官方網站、依老闆需求製作海報文宣品，並負責維護公司電腦及網路。</p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>電腦熱鍵</h2>
      <p>上 : <kbd>w</kbd> 、 下 : <kbd>s</kbd> 、 左 : <kbd>l</kbd> 、 右 : <kbd>r</kbd></p>
      <p>X座標格線 : <kbd>x</kbd> 、 Y座標格線 : <kbd>y</kbd></p>
      <p>執行 : <kbd>Space</kbd>、<kbd>Enter</kbd></p>
      <p>選單: <kbd>Esc</kbd></p>
    </aircle>
    ,
    <aircle className="clearfix">
      <h2>地圖拼圖</h2>
      <p>來源 : <br /><a href="http://fc03.deviantart.net/fs26/i/2008/149/d/7/rpg_maker_xp_the_best_tileset_by_davide_86.png">fc03.deviantart.net</a></p>
      <h2>人物拼圖</h2>
      <p>來源 : <br /><a href="http://doraspace.web.fc2.com/file/image/material/xp/chara/dora_blu.png">doraspace.web.fc2.com</a></p>
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
