const Discord = require("discord.js");
const fs = require('fs');
const spambot = new Discord.Client();
const bottoken = require('./bottoken.js');
const CronJob = require('cron').CronJob;
//so i dont have to keep the token in here




spambot.on('message', (message)=>{
    
if(message.content=='!!!init decode'){
    message.channel.sendMessage('Setting up interval for the Decode meme :^)');
    message.channel.sendMessage("\"Warum wurde Decode als Lucio nicht getryoutet?\" um 00:12")
    let job = new CronJob('00 12 00 * * 0-6', function() {
        message.channel.sendMessage('Warum wurde Decode als Lucio nicht getryoutet?');
      }, null, true, 'Europe/Amsterdam');
    job.start();
    console.log('job status', job.running); 
}
if(message.content=='decode'){
    message.channel.sendMessage('besser als Drodo?');
}

if(message.content=='penguin'){
    message.channel.sendMessage('@CrippledPenguin#2985 fucking sucks lelelelel');
   /* var interval = setInterval (function (){
        message.channel.sendMessage('Trash Memer lelelelelelelelel');
        
      }, 2000);*/
    
}
    
if(message.content=='timo'){
    message.channel.sendMessage('plan-B Null | Timo#9266 likes it rough up the pooper');
   /* var interval = setInterval (function (){
        message.channel.sendMessage('Trash Memer lelelelelelelelel');
        
      }, 2000);*/
    
    }

if(message.content=='eclipse'){
    message.channel.sendMessage(':thinking:');
   /* var interval = setInterval (function (){
        message.channel.sendMessage('Trash Memer lelelelelelelelel');
        
      }, 2000);*/
    
}});
//will be changed on release lelelelel

spambot.login(bottoken);

