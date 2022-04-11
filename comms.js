const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const fetch = require('node-fetch');
const fs = require("fs");

const prefix = config.PREFIX; // «Вытаскиваем» префикс

const {clear} = require('./commands/clear');
const {say} = require('./commands/say');
const {quotes} = require('./commands/setQuote');
const {getUsers} = require('./commands/getUsers');
const {getReply} = require('./commands/reply');
 
        
// Список команд //
let comms_list = [

  ///////////////////////
 /// ENGLISH VERSION ///
///////////////////////
{
    name: "quotes",
    out: quotes,
    about: "Gold Reserve of quotes"
},

// Utils
{
    name: "clear",
    out: clear,
    about: "Delete messages"
},
{
    name: "say",
    out: say,
    about: "Say on behalf of the bot"
},
{
    name: "getusers",
    out: getUsers,
    about: "get guild members"
},
{
    name: "addquote",
    out: getReply,
    about: "get quote from reply messages"
},
// {
//     name: "help",
//     out: help,
//     about: "help"
// },
  ///////////////////////
 /// RUSSIAN VERSION ///
///////////////////////
{
    name: "цитатка",
    out: quotes,
    about: "Выдаёт одну из цитаткок"
},
{
    name: "цитата",
    out: quotes,
    about: "Выдаёт одну из цитаткок"
},
{
    name: "цитатку",
    out: quotes,
    about: "Выдаёт одну из цитаткок"
},

// Utils
{
    name: "удалить",
    out: clear,
    about: "Очищает некоторое кол-во сообщений"
},
{
    name: "скажи",
    out: say,
    about: "Скажи боту что-нибудь"
},

{
    name: "пользователи",
    out: getUsers,
    about: "Список пользователей"
},



{
    name: "добавь",
    out: getReply,
    about: "Добавить цитатку"
},
{
    name: "добавьцитатку",
    out: getReply,
    about: "Добавить цитатку"
},
{
    name: "сохранить",
    out: getReply,
    about: "Добавить цитатку"
},
{
    name: "сохрани",
    out: getReply,
    about: "Добавить цитатку"
},

];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;