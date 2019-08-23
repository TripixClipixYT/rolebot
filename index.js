const Discord = require('discord.js');
const token = 'NjE0MjMzMzU4NTg2NzQwNzUz.XV_lLg.dfntMDUXtFlGzD82lwGs1BPPg3Q'

var BLUE_ROLE = '580767519489654784';
var RED_ROLE = '580767602415239170';
var GREEN_ROLE = '580767635298582530';
var BLACK_ROLE = '580780121280217109';
var CYAN_ROLE = '580767454901436417';
var Version = '0.1.9';
var owner = ['<@473276250815856650>'];
var ideaowner = ['<@540219416726601739>'];
// var blackRole = member.roles.find("name", "Black");

const bot = new Discord.Client();

bot.on('message', (message) => {
    const parts = message.content.split(' ');

    if (parts[0] == '!role') {

        if(parts[1] == 'red') {
            message.member.addRole(RED_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        if(parts[1] == 'cyan') {
            message.member.addRole(CYAN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'green') {
            message.member.addRole(GREEN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'blue') {
            message.member.addRole(BLUE_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }  
        else if(parts[1] == 'black') {
            message.member.addRole(BLACK_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        // remove role
}
else if (parts[0] == '!remove') {

    if(parts[1] == 'red') {
        message.member.removeRole(RED_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    if(parts[1] == 'cyan') {
        message.member.removeRole(CYAN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'green') {
        message.member.removeRole(GREEN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'blue') {
        message.member.removeRole(BLUE_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'black'){
       message.member.removeRole(BLACK_ROLE);
       message.author.send(`Role in ${message.guild} has been removed!`)
    }

}
// host cmd
if (parts[0] == '!host') {
           let hembed = new Discord.RichEmbed()
           .setThumbnail(bot.user.displayAvatarURL)
           .setAuthor(bot.user.username, bot.user.displayAvatarURL)
           .setTimestamp()
           .setTitle(`${bot.user.username}'s Host Status`)
           .setColor(15158332)
           .addField("🔴", "I'm currently not hosted 24/7")
           .setFooter(bot.user.username, bot.user.displayAvatarURL)
           message.channel.send(hembed);
           message.react("🔴");
}
if(parts[0] == '!botinfo'){
    let biembed = new Discord.RichEmbed()
    .setColor(10181046)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**Bot's Name:**", bot.user.username)
    .addField("**Bot Owner:**", owner)
    .addField("**The Bot idea was given by:**", ideaowner)
    .addField("**Bot Version:**", Version)
    .addField("**Bot ID:**", bot.user.discriminator)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
}
    // Status
    let statuses =['!role <color in server> | Site Coming Soon', `${bot.users.size} Users and ${bot.guilds.size} Servers`]

    setInterval(function(){
      let status = statuses[Math.floor(Math.random()* statuses.length)];
      bot.user.setActivity(status, {type: 'Playing'});
    }, 5000)

});
console.log("Role Bot is online")
bot.login(token);
