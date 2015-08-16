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
      //地圖二 花屋
  styles:[
      {
            name:"man",
            id: 12,
            left: 480,
            top: 320,
            width: sX,
            height: 24,
            background: init.man.spriteObj,sourceX: 0 ,
            sourceY: 0,
            zIndex: 2,
            mx: 480,
            my: 320+sY,
            mw: sX,
            mh: 0,
            eventID: 0
      },
      {     name: "man",
            id: 12,
            left: 480,
            top: 344,
            width: sX,
            height: 24,
            background: init.man.spriteObj,
            sourceX:0 ,
            sourceY:24
      },
      {
            "name": "牆",
            "left": 32,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //門口出入
            mx: 448,
            my: 640,
            mw: sX*2,
            mh: 0,
            cm: 0,
            cmm: 0
      },
      {
            "name": "牆",
            "left": 64,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //左側牆壁
            mx: 32,
            my: 0,
            mw: 0,
            mh: 640
      },
      {
            "name": "牆",
            "left": 96,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //右側牆壁
            mx: 928,
            my: 0,
            mw: 0,
            mh: 640
      },
      {
            "name": "牆",
            "left": 128,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //上方牆壁
            mx: 32,
            my: 32,
            mw: 928,
            mh: 0
      },
      {
            "name": "牆",
            "left": 160,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //左下方牆壁
            mx: 32,
            my: 608,
            mw: 416,
            mh: 0
      },
      {
            "name": "牆",
            "left": 192,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216,
            //右下方牆壁
            mx: 512,
            my: 608,
            mw: 416,
            mh: 0
      },
      {
            "name": "牆",
            "left": 224,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 256,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 288,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 320,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 352,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 384,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 416,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 448,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 480,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 512,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 544,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 576,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 608,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 640,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 672,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 704,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 736,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 768,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 800,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 832,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 864,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 896,
            "top": 0,
            "width": 32,
            "height": 64,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 0,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 32,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 64,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 384,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 416,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 448,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 480,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 0,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 32,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 64,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 384,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 416,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 448,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 480,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 512,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 544,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 576,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 928,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 512,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 544,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 576,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 0,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 32,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 64,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 96,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 128,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 160,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 192,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 896,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 864,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 832,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 800,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 768,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 736,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 704,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 672,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 640,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 224,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 256,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 288,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 320,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 352,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 608,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 576,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 384,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 416,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 544,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "牆",
            "left": 512,
            "top": 608,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 5216
      },
      {
            "name": "花",
            "left": 128,
            "top": 32,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 128,
            "top": 64,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 128,
            my: 64,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 128,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 128,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 800,
            "top": 32,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 800,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 800,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "花",
            "left": 128,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 128,
            my: 224,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 128,
            "top": 384,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 128,
            my: 384,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 800,
            "top": 64,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 800,
            my: 64,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 800,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 800,
            my: 224,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 800,
            "top": 384,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 5536,
            //花盆
            mx: 800,
            my: 384,
            mw: 32,
            mh: 0
      },
      {
            "name": "石碑",
            "left": 224,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "石碑",
            "left": 224,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "石碑",
            "left": 704,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "石碑",
            "left": 704,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5504,
            "zIndex": 2
      },
      {
            "name": "石碑",
            "left": 224,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5536,
            //石碑
            mx: 224,
            my: 160,
            mw: 32,
            mh: 0
      },
      {
            "name": "石碑",
            "left": 224,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5536,
            mx: 224,
            my: 320,
            mw: 32,
            mh: 0
      },
      {
            "name": "石碑",
            "left": 704,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5536,
            mx: 704,
            my: 160,
            mw: 32,
            mh: 0
      },
      {
            "name": "石碑",
            "left": 704,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 5536,
            mx: 704,
            my: 320,
            mw: 32,
            mh: 0
      },
      {
            "name": "花",
            "left": 320,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 384,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 352,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 352,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 448,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 416,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 352,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 448,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 576,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 576,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 544,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 512,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 480,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 544,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 544,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 384,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 288,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 256,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 448,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 480,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 480,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 448,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 384,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 448,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 512,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 576,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 640,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 576,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 512,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 384,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 288,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 352,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 480,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 512,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 64,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 576,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 544,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 544,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 608,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 672,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 416,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 384,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 320,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 160,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 416,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 480,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 512,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 416,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 192,
            "sourceY": 4096
      },
      {
            "name": "花",
            "left": 256,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 288,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 288,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 256,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 608,
            "top": 352,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 608,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 4064
      },
      {
            "name": "花",
            "left": 288,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3456
      },
      {
            "name": "花",
            "left": 480,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3456
      },
      {
            "name": "花",
            "left": 448,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3456
      },
      {
            "name": "花",
            "left": 352,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3456
      },
      {
            "name": "花",
            "left": 384,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 384,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 288,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 416,
            "top": 96,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 512,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 544,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 608,
            "top": 320,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 0,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 480,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 0,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 416,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 0,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 320,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 0,
            "sourceY": 3488
      },
      {
            "name": "花",
            "left": 352,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2944
      },
      {
            "name": "花",
            "left": 288,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2944
      },
      {
            "name": "花",
            "left": 576,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2944
      },
      {
            "name": "花",
            "left": 608,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2944
      },
      {
            "name": "花",
            "left": 544,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 32,
            "sourceY": 2912
      },
      {
            "name": "花",
            "left": 640,
            "top": 224,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 2048
      },
      {
            "name": "花",
            "left": 640,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 2048
      },
      {
            "name": "花",
            "left": 640,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 2048
      },
      {
            "name": "花",
            "left": 608,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 2048
      },
      {
            "name": "花",
            "left": 256,
            "top": 160,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 2048
      },
      {
            "name": "花",
            "left": 320,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2016
      },
      {
            "name": "花",
            "left": 288,
            "top": 128,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 2016
      },
      {
            "name": "花",
            "left": 320,
            "top": 256,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 640
      },
      {
            "name": "花",
            "left": 608,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 128,
            "sourceY": 640
      },
      {
            "name": "花",
            "left": 320,
            "top": 288,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 96,
            "sourceY": 640
      },
      {
            "name": "花",
            "left": 256,
            "top": 192,
            "width": 32,
            "height": 32,
            "background": init.object.sprites,
            "sourceX": 224,
            "sourceY": 64
      }

            ]
}]