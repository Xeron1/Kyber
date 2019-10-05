'use strict';
const Discord = require("discord.js");
const fs = require('fs');
const path = require('path');
const process = require('process');
const DATE = require(__dirname + "/date.json");
const LogModule = require(__dirname + '/Log.js');

var Embedmod = DATE.EMBED_MSG, kyberlog
const invites = {};

try {
    fs.accessSync(path.join(__dirname, 'node_modules'));
} catch (e) {
    LogModule.log('Запустите "npm install имя_модуля": модуль отсутствуют');
    process.exit(1);
}
process.on('unhandledRejection', (reason) => {
    LogModule.prompt(reason);
    process.exit(1);
});

const kyber = new Discord.Client({ TOKEN: DATE.TOKEN, autorun: true, disableEveryone: true });

const loginvite = kyber.channels.find(channel => channel.id === DATE.LOG_INVITE);
const logmod = kyber.channels.find(channel => channel.id === DATE.LOG_MOD);

kyber.on("ready", function () {
    setInterval(function (message) {
        invites = {}
        kyber.guilds.forEach(g => {
            LogModule.log(`LOAD NEW INVITE SERVER ${g.name} [${g.id}]`)
            if (g.me.hasPermission('ADMINISTRATOR') || g.me.hasPermission('MANAGE_GUILD')) {
                g.fetchInvites().then(guildInvites => {
                    invites[g.id] = guildInvites;
                });
            }
        });
    }, 15 * 1000);
});


kyber.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = kyber.users.get(invite.inviter.id);
        if (loginvite.permissionsFor(kyber.user.id).has('SEND_MESSAGES')) {
            kyberlog = new Discord.RichEmbed()
                .setDescription(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`).setColor(Embedmod).setTimestamp();
            loginvite.send(kyberlog).then(LogModule.table(`Отправленно в log на сервер [${server}]`)).catch(error => {
                LogModule.prompt(`Не хватает прав отправить в log на сервер [${server}] [EROOR]: ${error}`)
            });
        } else { return LogModule.prompt(`Не хватает прав отправить в log инвайтов на сервер [${server}]`) }
    });
});





kyber.on("disconnect", (e) => LogModule.warn(e));
kyber.on("reconnect", (e) => LogModule.warn(`Bot reconnecting... ${e}`));
kyber.login(CONFIG.TOKEN).then(function () {
    var now = new Date();
    now.setHours(now.getHours() + (now.getTimezoneOffset() / 60) + 3)
    LogModule.log(`START CONNECT [${kyber.user.tag}] >>>` + `servers [${kyber.guilds.size}] channels [${kyber.channels.size}] users [${kyber.users.size}] ` + "DATE [" + now.toLocaleString() + "]");
    require('./module/loadCommand').load()
    require('./module/loadeventsmodule').loadev()
    require('./module/loadanime').loadanime()
}, function (err) {
    LogModule.log(err);
    kyber.destroy();
});