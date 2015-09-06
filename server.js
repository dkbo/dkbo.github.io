var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var id = 0;
var data = [];
var players = [];
var playersname = [];

app.use(express.static(__dirname + '/'))
server.listen(process.env.PORT || 3000);
io.on('connection', function(so){
	players.push(so);
	id++;
	playersname.push('訪客 '+id);
	io.emit('onlinePlayerNum',players.length);
	so.emit('playerID',id);
	so.on('disconnect',onlinePlayerNum);
	function onlinePlayerNum(){ 
		var i = players.indexOf(so);
      	players.splice(i,1);
      	data.splice(i,1);
      	io.emit('onlinePlayerNum',players.length);
	};
	so.on('playerMove',playerMove);
	function playerMove(val){
		var i = players.indexOf(so);
		data[i] = val;
		io.emit('playerMove' , data);
	};
	so.on('enter message',sendMessage);
	function sendMessage(val){
		var i = players.indexOf(so);
		var json={
			name : playersname[i],
			val : val
		}
		io.emit('player chat' , json);
	};
	so.on('nickname',setNickName);
	function setNickName(val){
		var i = players.indexOf(so);
		playersname[i] = val;
	};
});
