import React from 'react';
import {Link} from 'react-router'
export const study =
    <aircle className='clearfix'>
      <h2>學習日誌條</h2>
      <ul>
        <li>
          <date>2016/11/19</date>
          <p>停擺了一段時間，這次把代碼全部翻新 React + Redux + ImmutableJS，打包工具 Webpack，刪除大部分原有的物件，但是保留部署在 Heroku 的線上版。</p>
        </li>
        <li>
          <date>2015/09/14</date>
          <p>一昧增加內容無用，所以必須閉關修練一段時間了。</p>
        </li>
        <br />
        <li>
          <date>2015/09/07</date>
          <p>最近直接使用原生 JS 來測試，測試結果出來之後，才知道日前所寫的程式有著很嚴重的問題，整個網站只有 Root 1個組件，所以只要 <code>this.setState</code> 就是整個 render。所以效能會很差。</p>
        </li>
        <br />
        <li>
          <date>2015/09/06</date>
          <p>在多人模式加入聊天框，把 Socket.io 的 Reload 改成 false ，一旦與 Server 中斷連接，左上角就會變成單機，另外人物移動的預測處理，目前個人還想不到如何寫，所以其他人物移動會很卡純屬正常。</p>
        </li>
        <br />
        <li>
          <date>2015/09/05</date>
          <p>把 <mark>Github</mark> 同步 <mark>Heroku</mark> 然後就可分成<Link to='/'>單機</Link>及<a href='http://dkbo-rpg-online.herokuapp.com/'>線上</a>兩個不同網站。</p>
        </li>
        <br />
        <li>
          <date>2015/09/03</date>
          <p>在一開始學習 ReactJS 時，不太懂 State 跟 Props 的用意，但是程式碼還是一字一字的刻上去，到現在要新增功能時，感覺都特別的凌亂不勘。目前第一步就是先把 ROOT 內部組件分割開來。</p>
        </li>
        <br />
        <li>
          <date>2015/09/02</date>
          <p>練習<mark>Socket.io</mark>順便就把現成的單機版Clone 去 Heroku 變成了很陽春的<a href='http://dkbo-rpg-online.herokuapp.com/' target='_blank'>線上互動版</a>，只是遊戲開發經驗 0 的我不知道如何去優化，所以就當作試試水溫。聊天框也沒有去做特別的處理也沒有<mark>RWD</mark>，所以別傷到眼睛了。最近可能要慢慢的把整個架構的程式在重寫了。淚</p>
        </li>
        <br />
        <li>
          <date>2015/08/31</date>
          <p>遊戲呈現的部分原本是 <code>div</code> 配上 <code>translate3D</code>去做位移呈現，現在全部轉換成 <code>Canvas</code> 呈現畫面。在計時的部分有看到<a href='https://msdn.microsoft.com/zh-tw/library/Hh920765(v=VS.85).aspx' target='_blank'>此篇文章</a>所以都轉換成 <code>requestAnimationFrame</code> 呈現動畫。部分 JSX 資料抽離，並透過 $.getScript 來取出。</p>
        </li>
        <br />
        <li>
          <date>2015/08/29</date>
          <p>圖片及部分資料改成 AJAX 方式取得。目前尚未轉場效果。接下來要把 NPC 在做出來。</p>
          <iframe height='268' scrolling='no' src='//codepen.io/dkbo/embed/RWbjjZ/?height=268&theme-id=4234&default-tab=result' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}}>See the Pen <a href='http://codepen.io/dkbo/pen/RWbjjZ/'>RPG NPC Walk Type one </a> by dkbo (<a href='http://codepen.io/dkbo'>@dkbo</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
        </li>
        <br />
        <li>
          <date>2015/08/25</date>
          <p>預載圖片的問題瞎忙了很多時間，最後還是放在HTML裡吧!</p>
        </li>
      </ul>
    </aircle>
