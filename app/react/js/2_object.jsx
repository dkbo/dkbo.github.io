var MP = init.man.moveSpeed;
init.objects=[
{
      "styles": [
            {
                  "name": "largetree",
                  "left": 800,
                  "top": 200,
                  "width": 256,
                  "height": 224,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 1056,
                  "zIndex": 2
            },
            {
                  "name": "largetree",
                  "left": 800,
                  "top": 424,
                  "width": 256,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 1280
            },
            {
                  "name": "stone",
                  "left": 980,
                  "top": 448,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 1664,
                  "zIndex": 2
            },
            {
                  "name": "stone",
                  "left": 980,
                  "top": 512,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 1728
            },
            {
                  "name": "tree1",
                  "left": 400,
                  "top": 900,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 160,
                  "zIndex": 2
            },
            {
                  "name": "tree1",
                  "left": 400,
                  "top": 1028,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 288
            },
            {
                  "name": "house",
                  "left": 384,
                  "top": 288,
                  "width": 96,
                  "height": 192,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 5216,
                  "zIndex": 2
            },
            {
                  "name": "house",
                  "left": 384,
                  "top": 480,
                  "width": 96,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 5408,
                  "zIndex": 0
            },
            {
                  "name": "house",
                  "left": 476,
                  "top": 288,
                  "width": 32,
                  "height": 192,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5216,
                  "zIndex": 2
            },
            {
                  "name": "house",
                  "left": 508,
                  "top": 288,
                  "width": 32,
                  "height": 224,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5216,
                  "zIndex": 2
            },
            {
                  "name": "house",
                  "left": 540,
                  "top": 288,
                  "width": 32,
                  "height": 192,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 5216,
                  "zIndex": 2
            },
            {
                  "name": "house",
                  "left": 572,
                  "top": 288,
                  "width": 32,
                  "height": 224,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5216,
                  "zIndex": 2
            },
            {
                  "name": "house",
                  "left": 572,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5440
            },
            {
                  "name": "housedoor",
                  "left": 476,
                  "top": 480,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 5408
            },
            {
                  "name": "house",
                  "left": 540,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5408
            },
            {
                  "name": "house",
                  "left": 540,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5440
            },
            {
                  "name": "house",
                  "left": 508,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5440
            },
            {
                  "name": "house",
                  "left": 416,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 5152
            },
            {
                  "name": "house",
                  "left": 540,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5152
            },
            {
                  "name": "wood",
                  "left": 508,
                  "top": 512,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4672
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 432,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 464,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 496,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 528,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 560,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 592,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 624,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 656,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 688,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 784,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 816,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 848,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 880,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 912,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 944,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 976,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 624,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4480
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 432,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 464,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 496,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 528,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 560,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 592,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 624,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 656,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 688,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 720,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 752,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 784,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 816,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 848,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 880,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 912,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 944,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 976,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 848,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4576,
                  "zIndex": 2
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 656,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 688,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 720,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 752,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 784,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 816,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 400,
                  "top": 848,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 656,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 688,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 720,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 752,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 784,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "fence",
                  "left": 1008,
                  "top": 816,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4544
            },
            {
                  "name": "farmland",
                  "left": 464,
                  "top": 728,
                  "width": 96,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 5056
            },
            {
                  "name": "farmland",
                  "left": 624,
                  "top": 728,
                  "width": 96,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 5056
            },
            {
                  "name": "bogy",
                  "left": 578,
                  "top": 728,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4994,
                  "zIndex": 2
            },
            {
                  "name": "bogy",
                  "left": 578,
                  "top": 760,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 5026
            },
            {
                  "name": "crop",
                  "left": 464,
                  "top": 760,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "crop",
                  "left": 496,
                  "top": 740,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "crop",
                  "left": 528,
                  "top": 752,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "crop",
                  "left": 624,
                  "top": 760,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "crop",
                  "left": 656,
                  "top": 752,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "crop",
                  "left": 688,
                  "top": 740,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4994
            },
            {
                  "name": "tree2",
                  "left": 592,
                  "top": 900,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 160,
                  "zIndex": 2
            },
            {
                  "name": "tree2",
                  "left": 592,
                  "top": 1028,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 288
            },
            {
                  "name": "tree3",
                  "left": 784,
                  "top": 900,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 160,
                  "zIndex": 2
            },
            {
                  "name": "tree3",
                  "left": 784,
                  "top": 1028,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 288
            },
            {
                  "name": "tree4",
                  "left": 976,
                  "top": 900,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 160,
                  "zIndex": 2
            },
            {
                  "name": "tree4",
                  "left": 976,
                  "top": 1028,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 288
            },
            {
                  "name": "tree5",
                  "left": 496,
                  "top": 964,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 768,
                  "zIndex": 2
            },
            {
                  "name": "tree5",
                  "left": 496,
                  "top": 1092,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 896
            },
            {
                  "name": "tree6",
                  "left": 688,
                  "top": 964,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 768,
                  "zIndex": 2
            },
            {
                  "name": "tree6",
                  "left": 688,
                  "top": 1092,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 896
            },
            {
                  "name": "tree7",
                  "left": 880,
                  "top": 964,
                  "width": 128,
                  "height": 128,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 768,
                  "zIndex": 2
            },
            {
                  "name": "tree7",
                  "left": 880,
                  "top": 1092,
                  "width": 128,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 896
            },
            {
                  "name": "man",
                  "left": 810,
                  "top": 490,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 0,
                  "zIndex": 2
            },
            {
                  "name": "man",
                  "left": 810,
                  "top": 514,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 24
            },
            {
                  "name": "水池",
                  "left": 864,
                  "top": 768,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5536
            },
            {
                  "name": "水池",
                  "left": 864,
                  "top": 736,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5504,
                  "zIndex": 2
            },
            {
                  "name": "花",
                  "left": 832,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 864,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 896,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 928,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 928,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 928,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 928,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 896,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 864,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 832,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 832,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 832,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 5536
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1440,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1472,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1504,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1536,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1568,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1600,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1632,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1664,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1696,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 10176,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 224,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9888,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9888,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9888,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 288,
                  "width": 160,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 9952
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 224,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 9888,
                  "zIndex": 2
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 320,
                  "width": 96,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10272
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 320,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 9984
            },
            {
                  "name": "紅屋",
                  "left": 1440,
                  "top": 320,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 9984
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10336
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10048
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10048
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10048
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1440,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 9824
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 384,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 9792
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 384,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 9792
            },
            {
                  "name": "紅屋",
                  "left": 1440,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1440,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10112
            },
            {
                  "name": "紅屋",
                  "left": 1408,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1344,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1312,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10080
            },
            {
                  "name": "紅屋",
                  "left": 1376,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 10112
            },
            {
                  "name": "紅屋",
                  "left": 1472,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1728,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1504,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1536,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1568,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1600,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1632,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1664,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1696,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10016
            },
            {
                  "name": "紅屋",
                  "left": 1472,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 9984
            },
            {
                  "name": "門口",
                  "left": 1344,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9024
            },
            {
                  "name": "門口",
                  "left": 1344,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9024
            },
            {
                  "name": "門口",
                  "left": 1344,
                  "top": 448,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 8128
            },
            {
                  "name": "門口",
                  "left": 1472,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1728,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1504,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1536,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1696,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1664,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1632,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1568,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10048
            },
            {
                  "name": "門口",
                  "left": 1600,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10176
            },
            {
                  "name": "門口",
                  "left": 1600,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10144
            },
            {
                  "name": "門口",
                  "left": 1504,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1536,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1536,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1568,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1600,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1632,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1664,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1696,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 9952
            },
            {
                  "name": "門口",
                  "left": 1472,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1728,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1504,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1536,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1568,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1600,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1632,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1664,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1696,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10080
            },
            {
                  "name": "門口",
                  "left": 1472,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1504,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1536,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1568,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1600,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1632,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1664,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1696,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 10112
            },
            {
                  "name": "門口",
                  "left": 1728,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 10112
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 192,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9856,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9984
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1248,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1280,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1312,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1344,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1376,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1408,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1440,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1472,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1504,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1536,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1568,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1600,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1632,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1664,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1696,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1760,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1792,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9440,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1248,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1280,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1312,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1344,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1376,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1408,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1440,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1472,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1504,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1536,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1568,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1600,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1632,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1664,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1696,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1760,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1792,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9472
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1248,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1280,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1216,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1248,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1280,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9504
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1824,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1792,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1760,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1696,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1664,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1632,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1600,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1568,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1536,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1504,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1472,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1440,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1408,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9536,
                  "zIndex": 2
            },
            {
                  "name": "柵欄",
                  "left": 1408,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1440,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1472,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1504,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1536,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1568,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1600,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1632,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1664,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1696,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1728,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "柵欄",
                  "left": 1760,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "",
                  "left": 1792,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9568
            },
            {
                  "name": "桌子",
                  "left": 1536,
                  "top": 480,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 7456
            },
            {
                  "name": "桌子",
                  "left": 1504,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7456
            },
            {
                  "name": "桌子",
                  "left": 1504,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7488
            },
            {
                  "name": "桌子",
                  "left": 1600,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7488
            },
            {
                  "name": "桌子",
                  "left": 1600,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7456
            },
            {
                  "name": "桌子",
                  "left": 1408,
                  "top": 480,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 7520
            },
            {
                  "name": "桌子",
                  "left": 1408,
                  "top": 512,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 7552
            },
            {
                  "name": "草",
                  "left": 1280,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1248,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1280,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1248,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1664,
                  "top": 480,
                  "width": 64,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1632,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7488
            },
            {
                  "name": "草",
                  "left": 1728,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7488
            },
            {
                  "name": "草",
                  "left": 1632,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1728,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 7456
            },
            {
                  "name": "草",
                  "left": 1312,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 7520
            },
            {
                  "name": "草",
                  "left": 1312,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 7552
            },
            {
                  "left": 1536,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 9824
            },
            {
                  "left": 1664,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 9824
            },
            {
                  "left": 1632,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9056
            },
            {
                  "left": 1568,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9056
            },
            {
                  "left": 1504,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9056
            },
            {
                  "left": 1696,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 9056
            }
      ],
      "isMove": [
            {
                  "name": "largetree",
                  "mx": 896,
                  "my": 392,
                  "mw": 64,
                  "mh": 64
            },
            {
                  "name": "stone",
                  "mx": 980,
                  "my": 512,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree1",
                  "mx": 432,
                  "my": 1028,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "house",
                  "mx": 384,
                  "my": 352,
                  "mw": 224,
                  "mh": 160
            },
            {
                  "name": "house",
                  "mx": 384,
                  "my": 352,
                  "mw": 224,
                  "mh": 128
            },
            {
                  "name": "housedoor",
                  "mx": 504,
                  "my": 480,
                  "mw": 0,
                  "mh": 32,
                  "cm": 1,
                  "cmm": 0
            },
            {
                  "name": "wood",
                  "mx": 508,
                  "my": 524,
                  "mw": 64,
                  "mh": 32
            },
            {
                  "name": "fence",
                  "mx": 400,
                  "my": 656,
                  "mw": 320,
                  "mh": 0
            },
            {
                  "name": "fence",
                  "mx": 784,
                  "my": 656,
                  "mw": 256,
                  "mh": 0
            },
            {
                  "name": "fence",
                  "mx": 400,
                  "my": 880,
                  "mw": 640,
                  "mh": 0
            },
            {
                  "name": "fence",
                  "mx": 400,
                  "my": 656,
                  "mw": 16,
                  "mh": 224
            },
            {
                  "name": "fence",
                  "mx": 1020,
                  "my": 656,
                  "mw": 8,
                  "mh": 224
            },
            {
                  "name": "bogy",
                  "mx": 578,
                  "my": 760,
                  "mw": 32,
                  "mh": 8
            },
            {
                  "name": "tree2",
                  "mx": 624,
                  "my": 1028,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree3",
                  "mx": 816,
                  "my": 1028,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree4",
                  "mx": 1008,
                  "my": 1028,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree5",
                  "mx": 528,
                  "my": 1092,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree6",
                  "mx": 720,
                  "my": 1092,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "tree7",
                  "mx": 912,
                  "my": 1092,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "man",
                  "mx": 810,
                  "my": 522,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "水池",
                  "mx": 864,
                  "my": 768,
                  "mw": 64,
                  "mh": 0
            },
            {
                  "name": "紅屋",
                  "mx": 1312,
                  "my": 288,
                  "mw": 448,
                  "mh": 128
            },
            {
                  "name": "紅屋",
                  "mx": 1312,
                  "my": 448,
                  "mw": 160,
                  "mh": 32
            },
            {
                  "name": "紅屋",
                  "mx": 1316,
                  "my": 512,
                  "mw": 24,
                  "mh": 0
            },
            {
                  "name": "紅屋",
                  "mx": 1424,
                  "my": 512,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "紅屋",
                  "mx": 1536,
                  "my": 500,
                  "mw": 64,
                  "mh": 12
            },
            {
                  "name": "紅屋",
                  "mx": 1664,
                  "my": 500,
                  "mw": 64,
                  "mh": 12
            },
            {
                  "name": "紅屋",
                  "mx": 1344,
                  "my": 480,
                  "mw": 12,
                  "mh": 0,
                  "cm": 2,
                  "cmm": 0
            },
            {
                  "name": "柵欄",
                  "mx": 1230,
                  "my": 170,
                  "mw": 610,
                  "mh": 0
            },
            {
                  "name": "柵欄",
                  "mx": 1230,
                  "my": 608,
                  "mw": 76,
                  "mh": 0
            },
            {
                  "name": "柵欄",
                  "mx": 1408,
                  "my": 608,
                  "mw": 434,
                  "mh": 0
            },
            {
                  "name": "柵欄",
                  "mx": 1230,
                  "my": 170,
                  "mw": 0,
                  "mh": 416
            },
            {
                  "name": "柵欄",
                  "mx": 1840,
                  "my": 170,
                  "mw": 0,
                  "mh": 416
            }
      ]
},
{
      "styles": [
            {
                  "name": "man",
                  "left": 480,
                  "top": 320,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 0,
                  "zIndex": 2
            },
            {
                  "name": "man",
                  "left": 480,
                  "top": 344,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 24
            },
            {
                  "name": "牆",
                  "left": 32,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 64,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 96,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 128,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 160,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 192,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 224,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 256,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 288,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 320,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 352,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 384,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 416,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 448,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 480,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 512,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 544,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 576,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 608,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 640,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 672,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 704,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 736,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 768,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 800,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 832,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 864,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 896,
                  "top": 0,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 928,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 0,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 32,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 64,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 96,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 128,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 160,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 192,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 896,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 864,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 832,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 800,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 768,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 736,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 704,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 672,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 640,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 224,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 256,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 288,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 320,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 352,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 608,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 576,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 384,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 416,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 544,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "牆",
                  "left": 512,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 5216
            },
            {
                  "name": "花",
                  "left": 128,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 128,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 128,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 800,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128
            },
            {
                  "name": "花",
                  "left": 800,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 800,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 5536
            },
            {
                  "name": "石碑",
                  "left": 224,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
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
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 5536
            },
            {
                  "name": "石碑",
                  "left": 224,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 5536
            },
            {
                  "name": "石碑",
                  "left": 704,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 5536
            },
            {
                  "name": "石碑",
                  "left": 704,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 5536
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 256,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 640,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 672,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 192,
                  "sourceY": 4096
            },
            {
                  "name": "花",
                  "left": 256,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 256,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3456
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3456
            },
            {
                  "name": "花",
                  "left": 448,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3456
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3456
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 384,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 512,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 480,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 416,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 3488
            },
            {
                  "name": "花",
                  "left": 352,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2944
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2944
            },
            {
                  "name": "花",
                  "left": 576,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2944
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2944
            },
            {
                  "name": "花",
                  "left": 544,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 32,
                  "sourceY": 2912
            },
            {
                  "name": "花",
                  "left": 640,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 2048
            },
            {
                  "name": "花",
                  "left": 640,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 2048
            },
            {
                  "name": "花",
                  "left": 640,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 2048
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 2048
            },
            {
                  "name": "花",
                  "left": 256,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 2048
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2016
            },
            {
                  "name": "花",
                  "left": 288,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 2016
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 640
            },
            {
                  "name": "花",
                  "left": 608,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 640
            },
            {
                  "name": "花",
                  "left": 320,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 96,
                  "sourceY": 640
            },
            {
                  "name": "花",
                  "left": 256,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 224,
                  "sourceY": 64
            }
      ],
      "isMove": [
            {
                  "name": "man",
                  "mx": 480,
                  "my": 352,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "牆",
                  "mx": 448,
                  "my": 640,
                  "mw": 64,
                  "mh": 0,
                  "cm": 0,
                  "cmm": 0
            },
            {
                  "name": "牆",
                  "mx": 32,
                  "my": 0,
                  "mw": 0,
                  "mh": 640
            },
            {
                  "name": "牆",
                  "mx": 928,
                  "my": 0,
                  "mw": 0,
                  "mh": 640
            },
            {
                  "name": "牆",
                  "mx": 32,
                  "my": 32,
                  "mw": 928,
                  "mh": 0
            },
            {
                  "name": "牆",
                  "mx": 32,
                  "my": 608,
                  "mw": 416,
                  "mh": 0
            },
            {
                  "name": "牆",
                  "mx": 512,
                  "my": 608,
                  "mw": 416,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 128,
                  "my": 64,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 128,
                  "my": 224,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 128,
                  "my": 384,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 800,
                  "my": 64,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 800,
                  "my": 224,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "花",
                  "mx": 800,
                  "my": 384,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "石碑",
                  "mx": 224,
                  "my": 160,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "石碑",
                  "mx": 224,
                  "my": 320,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "石碑",
                  "mx": 704,
                  "my": 160,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "石碑",
                  "mx": 704,
                  "my": 320,
                  "mw": 32,
                  "mh": 0
            }
      ]
},
{
      "styles": [
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 32,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 64,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 96,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 160,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 192,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 224,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 256,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 288,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 320,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 352,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 384,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 416,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 448,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 480,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 512,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 544,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 576,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 608,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 640,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 32,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 64,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 96,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 160,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 192,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 224,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 256,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 352,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 384,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 416,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 448,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 480,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 640,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 608,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 576,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 544,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 512,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 928,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 896,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 864,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 832,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 0,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "牆",
                  "left": 32,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 64,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 96,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 128,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 160,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 192,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 224,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 256,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 288,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 320,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 352,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 384,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 416,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 448,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 480,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 512,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 544,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 576,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 608,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 640,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 32,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 64,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 96,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 128,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 160,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 192,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 224,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 256,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 352,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 384,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 416,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 448,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 480,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 512,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 544,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 576,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 608,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 640,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆",
                  "left": 672,
                  "top": 544,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 64
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 800,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 832,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 864,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 896,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 928,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 960,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 992,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1024,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1056,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1088,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1120,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1152,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1184,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1216,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1248,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1280,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1312,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1344,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1376,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 0,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1408,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1376,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1344,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1312,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1280,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1248,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1216,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1184,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1152,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1120,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1088,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1056,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1024,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 992,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 960,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 896,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 928,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 864,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 832,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 800,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 736,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 704,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 672,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 640,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 608,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 576,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 544,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 512,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 480,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 448,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 416,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 384,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 352,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 320,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 288,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 256,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 224,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 192,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 160,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 832,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 864,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 896,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 128,
                  "top": 928,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "牆壁",
                  "left": 160,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 192,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 224,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 256,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 288,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 320,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 352,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 384,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 416,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 448,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 480,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 512,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 544,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 576,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 608,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 640,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 672,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 704,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 736,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 768,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 800,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 832,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 864,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 896,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 928,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 960,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 992,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1024,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1056,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1088,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1120,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1152,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1184,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1216,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1248,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1280,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1312,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1344,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1376,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1408,
                  "top": 736,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 64
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 768,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 800,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 832,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 864,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 896,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 928,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 960,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 992,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1024,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1120,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1152,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1184,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1216,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1248,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1280,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1312,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1344,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "天花板",
                  "left": 1376,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 3424,
                  "zIndex": 2
            },
            {
                  "name": "牆壁",
                  "left": 768,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 800,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 864,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 832,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 896,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 928,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 960,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 992,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1024,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1120,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1152,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1184,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1216,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1248,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1280,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1312,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1344,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1376,
                  "top": 352,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "樓梯",
                  "left": 704,
                  "top": 0,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 416
            },
            {
                  "name": "樓梯",
                  "left": 736,
                  "top": 0,
                  "width": 32,
                  "height": 96,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 416
            },
            {
                  "name": "時鐘",
                  "left": 320,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 192,
                  "sourceY": 4704
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 928,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 928,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 928,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 896,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 896,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 896,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 864,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 864,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 864,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 832,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 832,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 832,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 800,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 768,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 736,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 704,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 672,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 672,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 672,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 768,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 608,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 640,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 672,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 704,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 736,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1376,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 800,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 832,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 864,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 896,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 928,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 960,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 992,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1024,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1056,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1088,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1120,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1152,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1184,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1216,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1248,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1280,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1312,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 1344,
                  "top": 64,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 96,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 480,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 576,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 512,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 640,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 32,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 608,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 544,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 576,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 512,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 480,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 448,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 416,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 384,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 352,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 320,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 288,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 256,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 224,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 192,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 160,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 128,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 96,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地板",
                  "left": 64,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 64,
                  "sourceY": 6528
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 128,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4064
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 608,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 448,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4128
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 64,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 96,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 128,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 160,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 192,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 576,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 416,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 384,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 544,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 512,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 480,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 448,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 416,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 384,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 352,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 320,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 288,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 256,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 224,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 192,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "地毯",
                  "left": 160,
                  "top": 256,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 4096
            },
            {
                  "name": "牆壁",
                  "left": 800,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 832,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 864,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 896,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 928,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 960,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 992,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1024,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1056,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1088,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1120,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1152,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1184,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1216,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1248,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1280,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1312,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1344,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "牆壁",
                  "left": 1376,
                  "top": 32,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 32,
                  "sourceY": 64
            },
            {
                  "name": "man",
                  "left": 810,
                  "top": 490,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 0,
                  "zIndex": 2
            },
            {
                  "name": "man",
                  "left": 810,
                  "top": 514,
                  "width": 32,
                  "height": 24,
                  "background": "http://dkbo.github.io/images/man.png",
                  "sourceX": 0,
                  "sourceY": 24
            },
            {
                  "name": "燈",
                  "left": 128,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 512,
                  "top": 544,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 896,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 1248,
                  "top": 352,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 128,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 512,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 896,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "燈",
                  "left": 1248,
                  "top": 32,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 160,
                  "sourceY": 4064
            },
            {
                  "name": "鋼琴",
                  "left": 288,
                  "top": 160,
                  "width": 96,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4000,
                  "zIndex": 2
            },
            {
                  "name": "鋼琴",
                  "left": 288,
                  "top": 192,
                  "width": 96,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 0,
                  "sourceY": 4032
            },
            {
                  "name": "桌",
                  "left": 128,
                  "top": 288,
                  "width": 96,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 6784,
                  "zIndex": 2
            },
            {
                  "name": "桌",
                  "left": 448,
                  "top": 288,
                  "width": 96,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 6784,
                  "zIndex": 2
            },
            {
                  "name": "桌",
                  "left": 128,
                  "top": 320,
                  "width": 96,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 6816
            },
            {
                  "name": "桌",
                  "left": 448,
                  "top": 320,
                  "width": 96,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 6816
            },
            {
                  "name": "椅子",
                  "left": 320,
                  "top": 224,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 6784
            },
            {
                  "name": "椅子",
                  "left": 96,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 6784
            },
            {
                  "name": "椅子",
                  "left": 224,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 6784
            },
            {
                  "name": "椅子",
                  "left": 416,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 6784
            },
            {
                  "name": "椅子",
                  "left": 544,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 128,
                  "sourceY": 6784
            },
            {
                  "name": "雕像",
                  "left": 32,
                  "top": 64,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 6976
            },
            {
                  "name": "雕像",
                  "left": 640,
                  "top": 64,
                  "width": 32,
                  "height": 64,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 160,
                  "sourceY": 6976
            },
            {
                  "name": "壁畫",
                  "left": 192,
                  "top": 32,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 128,
                  "sourceY": 5504
            },
            {
                  "name": "壁畫",
                  "left": 416,
                  "top": 32,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 192,
                  "sourceY": 5504
            },
            {
                  "name": "食物",
                  "left": 128,
                  "top": 288,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 3296,
                  "zIndex": 2
            },
            {
                  "name": "食物",
                  "left": 128,
                  "top": 320,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 3328
            },
            {
                  "name": "食物",
                  "left": 480,
                  "top": 288,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 3296,
                  "zIndex": 2
            },
            {
                  "name": "食物",
                  "left": 480,
                  "top": 320,
                  "width": 64,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 64,
                  "sourceY": 3328
            },
            {
                  "name": "食物",
                  "left": 192,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 224,
                  "sourceY": 2112
            },
            {
                  "name": "食物",
                  "left": 448,
                  "top": 320,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 224,
                  "sourceY": 2112
            },
            {
                  "name": "食物",
                  "left": 448,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 224,
                  "sourceY": 2176,
                  "zIndex": 2
            },
            {
                  "name": "食物",
                  "left": 192,
                  "top": 288,
                  "width": 32,
                  "height": 32,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp2.png",
                  "sourceX": 224,
                  "sourceY": 2176,
                  "zIndex": 2
            }
      ],
      "isMove": [
            {
                  "name": "天花板",
                  "mx": 32,
                  "my": 32,
                  "mw": 1408,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 32,
                  "my": 544,
                  "mw": 256,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 352,
                  "my": 544,
                  "mw": 352,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 144,
                  "my": 736,
                  "mw": 1296,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 32,
                  "my": 0,
                  "mw": 0,
                  "mh": 928
            },
            {
                  "name": "天花板",
                  "mx": 144,
                  "my": 736,
                  "mw": 32,
                  "mh": 256
            },
            {
                  "name": "天花板",
                  "mx": 768,
                  "my": 352,
                  "mw": 288,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 1120,
                  "my": 352,
                  "mw": 288,
                  "mh": 32
            },
            {
                  "name": "天花板",
                  "mx": 768,
                  "my": 0,
                  "mw": 32,
                  "mh": 352
            },
            {
                  "name": "天花板",
                  "mx": 672,
                  "my": 0,
                  "mw": 32,
                  "mh": 512
            },
            {
                  "name": "天花板",
                  "mx": 1408,
                  "my": 0,
                  "mw": 32,
                  "mh": 736
            },
            {
                  "name": "天花板",
                  "mx": 32,
                  "my": 960,
                  "mw": 96,
                  "mh": 0,
                  "cm": 0,
                  "cmm": 1
            },
            {
                  "name": "天花板",
                  "mx": 704,
                  "my": 32,
                  "mw": 64,
                  "mh": 32,
                  "cm": 3,
                  "cmm": 0
            },
            {
                  "name": "man",
                  "mx": 810,
                  "my": 522,
                  "mw": 32,
                  "mh": 0
            },
            {
                  "name": "鋼琴",
                  "mx": 312,
                  "my": 192,
                  "mw": 52,
                  "mh": 1
            },
            {
                  "name": "桌",
                  "mx": 128,
                  "my": 320,
                  "mw": 96,
                  "mh": 32
            },
            {
                  "name": "桌",
                  "mx": 448,
                  "my": 320,
                  "mw": 96,
                  "mh": 32
            },
            {
                  "name": "雕像",
                  "mx": 32,
                  "my": 96,
                  "mw": 32,
                  "mh": 1
            },
            {
                  "name": "雕像",
                  "mx": 640,
                  "my": 96,
                  "mw": 32,
                  "mh": 1
            }
      ]
},
{
      "styles": [
            {
                  "name": "largetree",
                  "left": 400,
                  "top": 200,
                  "width": 256,
                  "height": 320,
                  "background": "http://dkbo.github.io/images/rpg_maker_xp.png",
                  "sourceX": 0,
                  "sourceY": 1056,
                  "zIndex": 2
            }
      ],
      "isMove": [
            {
                  "name": "largetree",
                  "mx": 448,
                  "my": 640,
                  "mw": 64,
                  "mh": 32,
                  "cm": 2,
                  "cmm": 1
            }
      ]
}]