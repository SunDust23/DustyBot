const Discord = require("discord.js"); // Подключаем библиотеку discord.js
const client = new Discord.Client({fetchAllMembers:true}); // Объявляем, что client - бот
const comms = require("./comms.js"); // Подключаем файл с командами для бота
//const help = require("./help.js"); // Подключаем файл с командами для бота
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
const config = require("./config.json"); // Подключаем файл с параметрами и информацией
let token = config.BOT_TOKEN; // «Вытаскиваем» из него токен
let prefix = config.PREFIX; // «Вытаскиваем» из него префикс

client.on("ready", function() {
	/* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
	console.log(client.user.username + " запустился!");

	client.generateInvite(["ADMINISTRATOR"]).then((link) => { // < //
        console.log(link); // < //
})});

client.on('message', (message) => { // Реагирование на сообщения
	if (message.author.bot) return;  
	if (!message.content.startsWith(prefix)) return;

	if (message.author.username != client.user.username && message.author.discriminator != client.user.discriminator) {
	   
		let comm = message.content.trim() + " ";
        let comm_name = comm.slice(0, comm.indexOf(" ")).toLowerCase();
        let messArr = comm.split(" ");
		 
	  	for (comm_count in comms.comms) {
			let comm2 = prefix + comms.comms[comm_count].name;
			if (comm2 == comm_name) {
				comms.comms[comm_count].out(client, message, messArr);
			}
		}
	}
  });

client.login(token);