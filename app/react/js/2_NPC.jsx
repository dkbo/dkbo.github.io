var Npc = React.createClass({
fc : null,
bc : null,
animate : 0,
img : new Image(),
walk : function(){
  var s = this.props.s;
  var pos = 12 ;
  var l = init.npc ? init.npc.length : 0;
  this.fc.clearRect(0,0,s.map.col,s.map.row);
  this.sc.clearRect(0,0,s.map.col,s.map.row);
  var n;
    for(var i=0;i<l;i++){
        n = init.npc[i];
        this.img.src = n.b; 
      if(n.isU && n.y > 0 || (n.isU && n.s > 0)){
        if((s.x <= n.pX+n.w -pos) && (n.pX-pos <= init.man.sizeX+s.x) && (s.y+24 <= n.pY-pos+n.h) && (n.pY-pos <= 1+s.y+24)){
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
        if((s.x <= n.pX+n.w +pos) && (n.pX+pos <= init.man.sizeX+s.x) && (s.y+24 <= n.pY+pos+n.h) && (n.pY+pos <= 1+s.y+24)){
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
        if((s.x <= n.pX+n.w +pos) && (n.pX+pos <= init.man.sizeX+s.x) && (s.y+24 <= n.pY+pos+n.h) && (n.pY+pos <= 1+s.y+24)){
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
        if((s.x <= n.pX+n.w -pos) && (n.pX-pos <= init.man.sizeX+s.x) && (s.y+24 <= n.pY-pos+n.h) && (n.pY-pos <= 1+s.y+24)){
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
  var s = this.props.s
  return(
  <div x={s.x} y={s.y} >
    <canvas id="fnpc" width={s.map.col}  height={s.map.row} />
    <canvas id="snpc" width={s.map.col}  height={s.map.row} />
  </div>
  )
}
});
