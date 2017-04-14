
var skype = require('botbuilder');
var express = require('express');
var app = express();

var botService = new skype.ChatConnector({
    appId: '998533c3-5a5f-4ffc-a992-b531e79439bf',
    appPassword: 'UpDkZTTiX5CBEqjjGdH6r8K'
});

var bot = new skype.UniversalBot(botService);

app.post('/api/messages', botService.listen());

bot.dialog('/', function (session) {
  if (session.message.text.toLowerCase().indexOf('hi') >= 0){
    session.send('Hi ' + session.message.user.name +
     ' thank you for your message: ' + session.message.text);
  } else {
    session.send("Sorry I don't understand you...");
  }
});

app.get('/', function (req, res) {
  res.send('SkypeBot listening...');
});

app.listen(process.env.port, function () {
  console.log('SkypeBot listening...');
});
