[1]: http://facebook.github.io/react/
[2]: http://dkbo.github.io/RPG-Map-Maker/
[3]: http://dkbo.github.io
# Web RPG Maker
## 開發環境
  [DKBO Resume][3]
  ```
    git clone https://github.com/dkbo/dkbo.github.io.git
  ```
  下載開發模組
  ```
    cd dkbo.github.io<br/>
    npm install<br/>
  ```
  下載完成後就可以執行
  ```
    npm start
  ```
  到瀏覽器網址列輸入 localhost:8888
  地圖是用 [地圖編輯器][2] 製作

## 簡介
  此遊戲履歷想法來源在於 <mark>RPG 遊戲製作大師</mark>，以貼近於傳統紅白機的　UI/UX　，來架設在網頁上，另個原因則在於練習　[ReactJS][1] ，以　VDOM　操作的方式 ，開發這可擴展的遊戲網頁。
## 可擴展
  遊戲定義的可擴展，因使用網頁共通語法 HTML 、 CSS 、 JS ，所以只要能在網頁做出來的設計，都能在此遊戲中呈現。
## 遊戲目的
  拋棄傳統簡易履歷表，以遊戲方式來了解作者履歷、構思、創作。
## 遊戲內容
  作者會在空餘的時間，慢慢地加進一些資訊及修改程式。
## 電腦熱鍵
  上 : <kbd>w</kbd> 、 下 : <kbd>s</kbd> 、 左 : <kbd>l</kbd> 、 右 : <kbd>r</kbd>
  執行 : <kbd>Space</kbd>
  選單: <kbd>Esc</kbd>
## 行動裝置觸碰方式
  上 : 觸碰後往上滑 、 下 : 觸碰後往下滑 、 左 : 觸碰後往左滑 、 右 : 觸碰後往右邊滑
  執行 : 螢幕觸碰

  以下則為 Event 事件的資料，因內部會使用到 JSX 所以用 Babel 再另外編譯，至於為何使用 JSX 呢?在看到下面程式碼時，內部都可以放入 DOM ， 在訊息方面，可以任意改變文字顏色、大小、字型、樣式及 Css3 動畫，這是在網頁中可寫出的優勢。

  ```jsx
    init.event = [{ name : "哆拉撞", //名字
                text : [
                          "作者太笨啦! NPC 碰撞有一堆 BUG，害我撞來撞去的。",  // 第一段訊息
                          <span>如果人物卡住了就按 <kbd>0</kbd> 或 <kbd>1</kbd>直接傳送走吧!</span>, //第二段訊息
                          <span>如果想要體驗多人互動的話可以<a href="http://dkbo-rpg-online.herokuapp.com/">來這裡</a>，前提是你要經得起眼睛的考驗。</span> //第三段訊息內部包含超連結。
                       ]
              }];
  ```
## Licence
  **MIT**
## 總結
  雖然到後面是運用 Canvas 去畫出來的，但是在最開始的時候，僅利用 div 及 position 來做出來的。
  刻意作成利用上下左右鍵控制，是為了不依賴滑鼠，如果僅用滑鼠點擊移動到所在位置，在socket.io 預測移動的機制就能很容易的寫了。這是目前尚未突破的。
  學習到了甚麼，產生器做法，JSON 概念更加熟練，eslint 把很亂的程式碼整理起來，Socket.io 雙向溝通，一些 Hack 技術，ES6 簡易用法，Node.js 一些概念，React.js ....太多太多。
  一句老話，事物擺在不同人的眼裡，於角度、方位、思考等，都能映照出不同的觀感。
  **何謂履歷表?**1 張紙、2 張紙、3 張紙、X 張紙。
  **何謂 E 履歷?**電子化履歷? Email履歷?
  在下認為以上都不重要，遇到對的面試官才是最重要的。
