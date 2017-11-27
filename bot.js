const Discord = require("discord.js");
const spambot = new Discord.Client();
var CronJob = require('cron').CronJob;


let channelID = "trash_talk";

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

if(message.content=='eclipse'){
    message.channel.sendMessage(':thinking:');
   /* var interval = setInterval (function (){
        message.channel.sendMessage('Trash Memer lelelelelelelelel');
        
      }, 2000);*/
    
}});


spambot.login("Mzg0NDYwMjE1NDU1NzExMjMz.DPzwaQ.Ns3h9E50j5XXPargwGRDAelhADk");

