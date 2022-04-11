const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const fs = require("fs");
const config = require('../config.json'); // Подключаем файл с параметрами и информацией

function getUsers(client, message, args) {
    let guild = client.guilds.cache.get(config.GUILD_ID);
    console.log("Список участников сервера: ");
    guild.members.cache.filter(member => !member.user.bot).forEach(member => console.log("===>>>", member.user.id, "\t", member.user.username));

    var obj = {
        table: []
    };
    guild.members.cache.filter(member => !member.user.bot).forEach(member => {
        const data = [{
            _id: member.user.id,
            username: member.user.username,
        }];

        obj.table.push(data);
    });
    // создаём файл
    fs.writeFileSync('../users.json', JSON.stringify(obj));
}
module.exports = {getUsers};