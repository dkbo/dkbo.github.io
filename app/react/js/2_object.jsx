var sX = init.object.sizeX;
var sY = init.object.sizeY;
var MP = init.man.moveSpeed;
init.objects=[{
  
  styles : [{name:"largetree",id:0,left: 800,top:200,width:8*sX,height:7*sY,background: init.object.sprites,sourceX :0 ,sourceY: 1056,zIndex : 2},
            {name:"largetree",id:0,left: 800,top:424,width:8*sX,height:3*sY,background: init.object.sprites,sourceX :0 ,sourceY: 1280,mx:800+sX*3,my:392,mw:2*sX,mh:sY*2},
            {name:"tree1",id:1,left: 400,top:900,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:160,zIndex : 2},
            {name:"tree1",id:1,left: 400,top:1028,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:288,mx:400+sX,my:1028,mw:2*sX,mh:0},
           {name:"house",id:2,left: 384,top:288,width:3*sX,height:6*sY,background: init.object.sprites,sourceX :0 ,sourceY:5216,zIndex : 2,mx:384,my:288+2*sY,mw:7*sX,mh:sY*5},
            {name:"house",id:2,left: 384,top:480,width:3*sX,height:sY*2,background: init.object.sprites,sourceX :0 ,sourceY:5408,zIndex : 0,mx:384,my:288+2*sY,mw:7*sX,mh:sY*4},
            {name:"house",id:2,left: 476,top:288,width:sX,height:6*sY,background: init.object.sprites,sourceX :64 ,sourceY:5216,zIndex : 2},
            {name:"house",id:2,left: 508,top:288,width:sX,height:7*sY,background: init.object.sprites,sourceX :64 ,sourceY:5216,zIndex : 2},
            {name:"house",id:2,left: 540,top:288,width:sX,height:6*sY,background: init.object.sprites,sourceX :96 ,sourceY:5216,zIndex : 2},
            {name:"house",id:2,left: 572,top:288,width:sX,height:7*sY,background: init.object.sprites,sourceX :128 ,sourceY:5216,zIndex : 2},
            {name:"house",id:2,left: 572,top:512,width:sX,height:sY,background: init.object.sprites,sourceX :128 ,sourceY:5440},
            {name:"housedoor",id:2,left: 476,top:480,width:sX,height:2*sY,background: init.object.sprites,sourceX :96 ,sourceY:5408,mx:476+sX-MP,my:480,mw:0,mh:sY,cm:1,cmm : 0},
            {name:"house",id:2,left: 540,top:480,width:sX,height:sY,background: init.object.sprites,sourceX :64 ,sourceY:5408},
            {name:"house",id:2,left: 540,top:512,width:sX,height:sY,background: init.object.sprites,sourceX :64 ,sourceY:5440},
            {name:"house",id:2,left: 508,top:512,width:sX,height:sY,background: init.object.sprites,sourceX :64 ,sourceY:5440},
            {name:"house",id:2,left: 416,top:480,width:sX,height:sY,background: init.object.sprites,sourceX :32 ,sourceY:5152},
            {name:"house",id:2,left: 540,top:480,width:sX,height:sY,background: init.object.sprites,sourceX :64 ,sourceY:5152},
            {name:"wood",id:2,left: 508,top:512,width:2*sX,height:2*sY,background: init.object.sprites,sourceX :192 ,sourceY:4672,mx:508,my:524,mw:2*sX,mh:sY*1}
            ,
            {name:"fence",id:3,left: 400,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :32 ,sourceY:4480,mx:400,my:624+sY,mw:10*sX,mh:0}
            ,
            {name:"fence",id:3,left: 432,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480,mx:400+12*sX,my:624+sY,mw:8*sX,mh:0}
            ,
            {name:"fence",id:3,left: 464,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480,mx:400,my:848+sY,mw:20*sX,mh:0}
            ,
            {name:"fence",id:3,left: 496,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480,mx:400,my:624+sY,mw:sX/2,mh:7*sY}
            ,
            {name:"fence",id:3,left: 528,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480,mx:1004+sX/2,my:624+sY,mw:sX/4,mh:7*sY}
            ,
            {name:"fence",id:3,left: 560,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 592,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 624,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 656,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 688,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :192 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 784,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :224 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 816,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 848,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 880,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 912,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 944,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 976,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4480}
            ,
            {name:"fence",id:3,left: 1008,top:624,width:sX,height:2*sY,background: init.object.sprites,sourceX :96 ,sourceY:4480},
            {name:"fence",id:3,left: 400,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :32 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 432,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 464,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 496,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 528,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 560,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 592,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 624,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 656,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 688,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2},
            {name:"fence",id:3,left: 720,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2},
            {name:"fence",id:3,left: 752,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 784,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 816,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 848,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 880,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 912,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 944,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 976,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4576,zIndex : 2}
            ,
            {name:"fence",id:3,left: 1008,top:848,width:sX,height:2*sY,background: init.object.sprites,sourceX :96 ,sourceY:4576,zIndex : 2},
            {name:"fence",id:3,left: 400,top:656,width:sX,height:sY,background: init.object.sprites,sourceX :32,sourceY: 4544}
            ,
            {name:"fence",id:3,left: 400,top:688,width:sX,height:sY,background: init.object.sprites,sourceX :32,sourceY: 4544}
            ,
            {name:"fence",id:3,left: 400,top:720,width:sX,height:sY,background: init.object.sprites,sourceX :32 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 400,top:752,width:sX,height:sY,background: init.object.sprites,sourceX :32 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 400,top:784,width:sX,height:sY,background: init.object.sprites,sourceX :32 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 400,top:816,width:sX,height:sY,background: init.object.sprites,sourceX :32,sourceY: 4544}
            ,
            {name:"fence",id:3,left: 400,top:848,width:sX,height:sY,background: init.object.sprites,sourceX :32 ,sourceY:4544},
            {name:"fence",id:3,left: 1008,top:656,width:sX,height:sY,background: init.object.sprites,sourceX :96 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 1008,top:688,width:sX,height:sY,background: init.object.sprites,sourceX :96 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 1008,top:720,width:sX,height:sY,background: init.object.sprites,sourceX :96 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 1008,top:752,width:sX,height:sY,background: init.object.sprites,sourceX :96,sourceY: 4544}
            ,
            {name:"fence",id:3,left: 1008,top:784,width:sX,height:sY,background: init.object.sprites,sourceX :96 ,sourceY:4544}
            ,
            {name:"fence",id:3,left: 1008,top:816,width:sX,height:sY,background: init.object.sprites,sourceX :96 ,sourceY:4544}
            ,
            {name:"farmland",id:4,left: 464,top:728,width:3*sX,height: 3*sY,background: init.object.sprites,sourceX :32 ,sourceY:5056}
            ,
            {name:"farmland",id:4,left: 624,top:728,width:3*sX,height: 3*sY,background: init.object.sprites,sourceX :32 ,sourceY:5056}
             ,
            {name:"bogy",id:5,left: 578,top:728,width:sX,height: sY,background: init.object.sprites,sourceX :96 ,sourceY:4994,zIndex:2, mx : 578,my:728+sY,mw:sX,mh: sY/4,eventID:0}
            ,
            {name:"bogy",id:5,left: 578,top:760,width:sX,height: sY,background: init.object.sprites,sourceX :96 ,sourceY:5026}
            ,
            {name:"crop",id:5,left: 464,top:760,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994},
            {name:"crop",id:5,left: 496,top:740,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994}
            ,
            {name:"crop",id:5,left: 528,top:752,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994}
            ,
            {name:"crop",id:5,left: 624,top:760,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994}
            ,
            {name:"crop",id:5,left: 656,top:752,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994}
            ,
            {name:"crop",id:5,left: 688,top:740,width:sX,height: 2*sY,background: init.object.sprites,sourceX :64 ,sourceY:4994}
            ,{name:"tree2",id:6,left: 592,top:900,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:160,zIndex : 2},
            {name:"tree2",id:6,left: 592,top:1028,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:288,mx:592+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree3",id:7,left: 784,top:900,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:160,zIndex : 2},
            {name:"tree3",id:7,left: 784,top:1028,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:288,mx:784+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree4",id:8,left: 976,top:900,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:160,zIndex : 2},
            {name:"tree4",id:8,left: 976,top:1028,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:288,mx:976+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree5",id:9,left: 496,top:964,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:768,zIndex : 2},
            {name:"tree5",id:9,left: 496,top:1092,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:896,mx:496+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree6",id:10,left: 688,top:964,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:768,zIndex : 2},
            {name:"tree6",id:10,left: 688,top:1092,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:896,mx:688+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree7",id:11,left: 880,top:964,width:4*sX,height:4*sY,background: init.object.sprites,sourceX :0 ,sourceY:768,zIndex : 2},
            {name:"tree7",id:11,left: 880,top:1092,width:4*sX,height: sY,background: init.object.sprites,sourceX :0 ,sourceY:896,mx:880+sX,my:1092,mw:2*sX,mh:0}
            ,
            {name:"man",id:12,left: 810,top:490,width:sX,height: 24,background: init.man.spriteObj,sourceX: 0 ,sourceY:0,zIndex: 2,mx: 810,my:490+sY,mw:sX,mh:0,eventID:1}
             ,
            {name:"man",id:12,left: 810,top:514,width:sX,height: 24,background: init.man.spriteObj,sourceX: 0 ,sourceY:24}
            ,
            {name:"stone",id:13,left: 980,top:448,width:sX*2,height: sY*2,background: init.object.sprites,sourceX :192 ,sourceY: 1664,zIndex: 2}
             ,
            {name:"stone",id:13,left: 980,top:512,width:sX*2,height: sY*1,background: init.object.sprites,sourceX :192  ,sourceY:1728,mx: 980,my:512,mw:sX*2,mh:0 ,eventID:2}
            
]},{
  styles:[{name:"housedoor",id:1,left: 448,top:608,width:sX,height: sY,background: init.object.sprites ,sourceX :32  ,sourceY:7296,mx:448,my:640,mw:sX*2,mh:0,cm:0,cmm:0},
  {name:"housedoor",id:1,left: 480,top:608,width:sX,height: sY,background: init.object.sprites ,sourceX :32  ,sourceY:7296},
         {name:"man",id:12,left: 480,top:320,width:sX,height: 24,background: init.man.spriteObj,sourceX:0 ,sourceY:0,zIndex: 2,mx: 480,my:320+sY,mw:sX,mh:0,eventID:0}
             ,
            {name:"man",id:12,left: 480,top:344,width:sX,height: 24,background: init.man.spriteObj,sourceX:0 ,sourceY:24}
            ]
}]