const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    if(!message.member.roles.some(r=>["Розовое чудо"].includes(r.name))) return message.reply('Отказано в доступе.');
    let target = message.mentions.members.first() || message.guild.members.get(args[0]);      
    let gamename = target.presence.game;  

    console.log(gamename);
};
module.exports.command = {
    name: 'gamestats',
    aliases: ["статс", "тестстатус", "тс"],
    description: "Отправляет в канал какую-то дичь, чо доебался?",
    usage: "foxcommand",
    category: "fox",
    enabled: false
}; 