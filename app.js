'use strict';
const Discord = require('discord.js');
const ruolo = '856507153346592778'
const canale = '856506901263810595'
const bot = new Discord.Client();

bot.login('ODU2NTA0ODEwMjU3MTIxMzIx.YNCAQw.Luyap9RqHEKRB8qP5g-G1vT6p3s');
// ruolo su cui sto smattando da 5 ore 
if (message.content == '!ruolo') {
    message.member.addrole(ruolo);
    message.reply('ruolo aggiunto!');
};

// acquisizione lista user con il ruolo
if (message.content.startsWith("!list")) {
    let roleName = message.content.split(" ").slice(1).join(" ");

    
    let membersWithRole = message.guild.members.filter(member => {
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })

    let embed = new discord.RichEmbed({
        "title": `Utante con il ruolo ${roleName} `,
        "description": membriconilruolo.join("\n"),
        "color": fffff

    });

    return message.channel.send({ embed });
}
//3 creazione stanze temp con libreria esterna 
if (member.hasPermission('ruolo')) {
    tempChannel.autoCreateChannel(client, {
        userLimit: 2,

        nameStartsWith: "crea canale ",
        nameStartsWithTemp: " canale 1 ",
    });
}

