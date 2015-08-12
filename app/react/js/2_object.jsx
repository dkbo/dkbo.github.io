var sX = init.object.sizeX;
var sY = init.object.sizeY;
init.objects=[{
  
  styles : [{name:"largetree",id:0,left: 800,top:200,width:8*sX,height:7*sY,background: init.object.sprites+" 0 -1056px",zIndex : 2},
            {name:"largetree",id:0,left: 800,top:424,width:8*sX,height:3*sY,background: init.object.sprites+" 0 -1280px",mx:800+sX*3,my:392,mw:2*sX,mh:sY*2},
            {name:"tree1",id:1,left: 400,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree1",id:1,left: 400,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:400+sX,my:1028,mw:2*sX,mh:0},
           {name:"house",id:2,left: 400,top:300,width:3*sX,height:6*sY,background: init.object.sprites+" 0 -5216px",zIndex : 2,mx:400,my:300+2*sY,mw:7*sX,mh:sY*5},
            {name:"house",id:2,left: 400,top:492,width:3*sX,height:sY*2,background: init.object.sprites+" 0 -5408px",zIndex : 0,mx:400,my:300+2*sY,mw:7*sX,mh:sY*4},
            
            {name:"house",id:2,left: 492,top:300,width:sX,height:6*sY,background: init.object.sprites+" -64px -5216px",zIndex : 2},
            {name:"house",id:2,left: 524,top:300,width:sX,height:7*sY,background: init.object.sprites+" -64px -5216px",zIndex : 2},
            {name:"house",id:2,left: 556,top:300,width:sX,height:6*sY,background: init.object.sprites+" -96px -5216px",zIndex : 2},
            {name:"house",id:2,left: 588,top:300,width:sX,height:7*sY,background: init.object.sprites+" -128px -5216px",zIndex : 2},
            {name:"house",id:2,left: 588,top:524,width:sX,height:sY,background: init.object.sprites+" -128px -5440px"},
            {name:"housedoor",id:2,left: 492,top:492,width:sX,height:2*sY,background: init.object.sprites+" -96px -5408px",mx:492,my:492,mw:sX,mh:sY,cm:1,cmm : 0},
            {name:"house",id:2,left: 556,top:492,width:sX,height:sY,background: init.object.sprites+" -64px -5408px"},
            {name:"house",id:2,left: 556,top:524,width:sX,height:sY,background: init.object.sprites+" -64px -5440px"},
            {name:"house",id:2,left: 524,top:524,width:sX,height:sY,background: init.object.sprites+" -64px -5440px"},
            {name:"wood",id:2,left: 524,top:524,width:2*sX,height:2*sY,background: init.object.sprites+" -192px -4672px",mx:524,my:524,mw:2*sX,mh:sY*1}
            ,
            {name:"fence",id:3,left: 400,top:624,width:sX,height:2*sY,background: init.object.sprites+" -32px -4480px",mx:400,my:624+sY,mw:10*sX,mh:0}
            ,
            {name:"fence",id:3,left: 432,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400+12*sX,my:624+sY,mw:8*sX,mh:0}
            ,
            {name:"fence",id:3,left: 464,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400,my:848+sY,mw:20*sX,mh:0}
            ,
            {name:"fence",id:3,left: 496,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:400,my:624+sY,mw:sX/2,mh:7*sY}
            ,
            {name:"fence",id:3,left: 528,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px",mx:1004+sX/2,my:624+sY,mw:sX/4,mh:7*sY}
            ,
            {name:"fence",id:3,left: 560,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 592,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 624,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 656,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 688,top:624,width:sX,height:2*sY,background: init.object.sprites+" -192px -4480px"}
            ,
            {name:"fence",id:3,left: 784,top:624,width:sX,height:2*sY,background: init.object.sprites+" -224px -4480px"}
            ,
            {name:"fence",id:3,left: 816,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 848,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 880,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 912,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 944,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 976,top:624,width:sX,height:2*sY,background: init.object.sprites+" -64px -4480px"}
            ,
            {name:"fence",id:3,left: 1008,top:624,width:sX,height:2*sY,background: init.object.sprites+" -96px -4480px"},
            {name:"fence",id:3,left: 400,top:848,width:sX,height:2*sY,background: init.object.sprites+" -32px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 432,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 464,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 496,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 528,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 560,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 592,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 624,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 656,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 688,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 720,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 752,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 784,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 816,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 848,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 880,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 912,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 944,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 976,top:848,width:sX,height:2*sY,background: init.object.sprites+" -64px -4576px",zIndex : 2}
            ,
            {name:"fence",id:3,left: 1008,top:848,width:sX,height:2*sY,background: init.object.sprites+" -96px -4576px",zIndex : 2},
            {name:"fence",id:3,left: 400,top:656,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:688,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:720,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:752,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:784,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:816,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"}
            ,
            {name:"fence",id:3,left: 400,top:848,width:sX,height:sY,background: init.object.sprites+" -32px -4544px"},
            {name:"fence",id:3,left: 1008,top:656,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:688,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:720,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:752,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:784,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"fence",id:3,left: 1008,top:816,width:sX,height:sY,background: init.object.sprites+" -96px -4544px"}
            ,
            {name:"farmland",id:4,left: 464,top:728,width:3*sX,height: 3*sY,background: init.object.sprites+" -32px -5056px"}
            ,
            {name:"farmland",id:4,left: 624,top:728,width:3*sX,height: 3*sY,background: init.object.sprites+" -32px -5056px"}
             ,
            {name:"bogy",id:5,left: 578,top:728,width:sX,height: sY,background: init.object.sprites+" -96px -4994px",zIndex:2, mx : 578,my:728+sY,mw:sX,mh: sY/4,eventID:0,cursor: init.man.speak}
            ,
            {name:"bogy",id:5,left: 578,top:760,width:sX,height: sY,background: init.object.sprites+" -96px -5026px",cursor: init.man.speak}
            ,
            {name:"crop",id:5,left: 464,top:760,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"},
            {name:"crop",id:5,left: 496,top:740,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 528,top:752,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 624,top:760,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 656,top:752,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,
            {name:"crop",id:5,left: 688,top:740,width:sX,height: 2*sY,background: init.object.sprites+" -64px -4994px"}
            ,{name:"tree2",id:6,left: 592,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree2",id:6,left: 592,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:592+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree3",id:7,left: 784,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree3",id:7,left: 784,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:784+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree4",id:8,left: 976,top:900,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -160px",zIndex : 2},
            {name:"tree4",id:8,left: 976,top:1028,width:4*sX,height: sY,background: init.object.sprites+" 0 -288px",mx:976+sX,my:1028,mw:2*sX,mh:0}
            ,{name:"tree5",id:9,left: 496,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree5",id:9,left: 496,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:496+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree6",id:10,left: 688,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree6",id:10,left: 688,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:688+sX,my:1092,mw:2*sX,mh:0}
            ,{name:"tree7",id:11,left: 880,top:964,width:4*sX,height:4*sY,background: init.object.sprites+" 0 -768px",zIndex : 2},
            {name:"tree7",id:11,left: 880,top:1092,width:4*sX,height: sY,background: init.object.sprites+" 0 -896px",mx:880+sX,my:1092,mw:2*sX,mh:0}
            ,
            {name:"man",id:12,left: 810,top:490,width:sX,height: 24,background: init.man.sprite+" 0 0",zIndex: 2,mx: 810,my:490+sY,mw:sX,mh:0,cursor: init.man.speak ,eventID:1}
             ,
            {name:"man",id:12,left: 810,top:514,width:sX,height: 24,background: init.man.sprite+" 0 -24px",cursor: init.man.speak }
            ,
            {name:"stone",id:13,left: 980,top:448,width:sX*2,height: sY*2,background: init.object.sprites+" -192px -1664px",zIndex: 2,cursor: init.man.speak}
             ,
            {name:"stone",id:13,left: 980,top:512,width:sX*2,height: sY*1,background: init.object.sprites+" -192px -1728px",cursor: init.man.speak,mx: 980,my:512,mw:sX*2,mh:0 ,eventID:2}
            
]},{
  styles:[{name:"housedoor",id:1,left: 224,top:320,width:sX*2,height: sY,background: "green",mx:224,my:320,mw:sX*2,mh:sY,cm:0,cmm:0},
         {name:"man",id:12,left: 200,top:144,width:sX,height: 24,background: init.man.sprite+" 0 0",zIndex: 2,mx: 200,my:144+sY,mw:sX,mh:0,cursor: init.man.speak ,eventID:0}
             ,
            {name:"man",id:12,left: 200,top:168,width:sX,height: 24,background: init.man.sprite+" 0 -24px",cursor: init.man.speak }
            ]
}]