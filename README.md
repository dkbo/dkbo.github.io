## Web RPG Maker  
<aircle>
  <h2>簡介</h2>
  <p>此遊戲履歷想法來源在於 <mark>RPG 遊戲製作大師</mark>，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　<a href="http://facebook.github.io/react/" target="_blank" >ReactJS</a> ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。</p>
  <h2>可擴展</h2>
  <p>遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。</p>
  <h2>遊戲目的</h2>
  <p>拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。</p>
  <h2>遊戲內容</h2>
  <p>作者會在空餘的時間，慢慢地加進一些資訊及修改程式。</p>
</aircle>
<aircle>
  <h2>電腦熱鍵</h2>
  <p>上 : <kbd>w</kbd> 、 下 : <kbd>s</kbd> 、 左 : <kbd>l</kbd> 、 右 : <kbd>r</kbd></p>
  <p>X座標格線 : <kbd>x</kbd> 、 Y座標格線 : <kbd>y</kbd></p>
  <p>執行 : <kbd>Space</kbd>、<kbd>Enter</kbd></p>
  <p>選單: <kbd>Esc</kbd></p>
  <h2>行動裝置觸碰方式</h2>
  <p>上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑</p>
  <p>執行 : bottom : 20%處觸碰</p>
</aircle>
<aircle>
  <h2>電腦熱鍵</h2>
  <p>上 : <kbd>w</kbd> 、 下 : <kbd>s</kbd> 、 左 : <kbd>l</kbd> 、 右 : <kbd>r</kbd></p>
  <p>X座標格線 : <kbd>x</kbd> 、 Y座標格線 : <kbd>y</kbd></p>
  <p>執行 : <kbd>Space</kbd>、<kbd>Enter</kbd></p>
  <p>選單: <kbd>Esc</kbd></p>
  <h2>行動裝置觸碰方式</h2>
  <p>上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑</p>
  <p>執行 : bottom : 20%處觸碰</p>
</aircle>
<aircle>
  <h2>JSON 註記</h2>
  <p>網站地圖物件主要是透過 AJAX 讀取後在繪圖而成，在沒有後端及資料庫的情況下，就來一個偽資料庫，這些資料就放在 objects 及 events 的資料夾架構裡</p>
  ```javascript
    {
      "map": {
            "index": 0, //地圖節點或可說是ID
            "name": "大地圖", //地圖名稱
            "bg": "url('images/bg.jpg')", //地圖背景圖
            "col": 1920, //地圖的總寬度
            "row": 1280, //地圖總高度
            // in 代表從別張地圖進來此張地圖時的座標，與 cm 及 cmm 屬性配對(這兩個屬性會在 ismove 內部的物件)。 cm 代表進去地圖的節點，所以cm: 0 就是本張地圖。
            "in": [
                  // cmm: 0
                  { 
                        "x": 472,  
                        "y": 544
                  },
                  // cmm: 1
                  {
                        "x": 1344,
                        "y": 512
                  },
                  // cmm: 2
                  {
                        "x": 744,
                        "y": 40
                  },
                  // cmm: 3
                  {
                        "x": 20,
                        "y": 1200
                  }

            ]
      },
      // style 就是以 canvas 或著 div 畫出整個世界地圖
      "styles": [
            {
                  "n": "largetree", // 物件名稱
                  "l": 800, //物件 X 座標
                  "t": 200, //物件 Y 座標
                  "w": 256, //物件再拼圖內的寬度
                  "h": 224, //物件在拼圖內的高度
                  "b": "http://dkbo.github.io/images/rpg_maker_xp.png", //物件的拼圖
                  "x": 0, //物件在拼圖內的 X 座標
                  "y": 1056, //物件在拼圖內的 Y 座標
                  "z": 2 //預設為無配置，如配置 2 代表此物件可以遮蓋人物腳色。
            }
      ],
      // 判斷可否移動，以下歸類三種
      "isMove": [
            // 基本碰撞位置設定
            {
                  "x": 702, //不可碰撞 X 座標
                  "y": 205, //不可碰撞 Y 座標
                  "w": 4,   //X 座標 延展 4px 的寬度
                  "h": 38   //y 座標 延展 4px 的寬度
            },
            {
                  "x": 302,
                  "y": 205,
                  "w": 4,
                  "h": 38,
                  "e": 0   //在此處碰撞按下 Enter 或 Space 鍵，可觸發事件
            },
            {
                  "x": 1002,
                  "y": 0,
                  "w": 4,
                  "h": 38,
                  "cm": 0, // 進入地圖 0
                  "cmm": 1 // 進入地圖 0 的 第二號座標
            }
      ],
      "npc": [
            {
                  "b": "http://dkbo.github.io/images/man.png", //人物組圖
                  "type": 4, //選擇人物
                  "pX": 1550, //NPC X 座標
                  "pY": 800,  //NPC Y 座標
                  "aX": 1152, //NPC 碰撞設定 X 座標
                  "aY": 672,  //NPC 碰撞設定 Y 座標
                  "aW": 600,  //NPC 僅能在 aX + aW 內隨機判斷移動
                  "aH": 240,  //NPC 僅能在 aY + aH 內隨機判斷移動
                  "mX": 50,   //程式會隨機指派 NPC 移動步數
                  "mY": 50,   //程式會隨機指派 NPC 移動步數
                  "x": 0,     //程式會隨機指派 NPC 移動步數
                  "y": 0,     //程式會隨機指派 NPC 移動步數
                  "w": 32,    //NPC 寬度
                  "h": 48,    //NPC 高度
                  // NPC 拼圖方向順序
                  "d": 0,     //下
                  "l": 1,     //左
                  "r": 2,     //右
                  "u": 3,     //上
                  "t": 0,     //程式會隨機指派
                  "s": 0,     //程式會隨機指派
                  "f": 0,     //程式會隨機指派
                  "footSpeed": 8,  //NPC 移動畫格
                  "isR": false,   //程式會隨機指派
                  "isU": false,   //程式會隨機指派
                  "isD": false,   //程式會隨機指派
                  "isL": false,   //程式會隨機指派
                  "isM": false,   //程式會隨機指派
                  "e": 3        //程式會隨機指派
            }
      ]
    }
  
  ```
</aircle>


