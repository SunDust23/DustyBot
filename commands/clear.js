const Discord = require('discord.js'); // Подключаем библиотеку discord.js

function clear(client, message, arg) {
    const arggs = message.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
        if (!amount) {
            return message.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
        }
        if (isNaN(amount)) {
            return message.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 
        }
        if (amount > 100) {
            return message.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
        }
        if (amount < 1) {
            return message.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1
        }

        async function delete_messages() { // Объявление асинхронной функции

            await message.channel.messages.fetch({
                limit: amount
            }).then(messages => {
                message.channel.bulkDelete(messages)
                message.channel.send(`Удалено ${amount} сообщений!`)
            })
            console.log(`Пользователь ${message.author.username} удалил ${amount} сообщений через clear`);
        };
        delete_messages(); // Вызов асинхронной функции
    }
    else {
        const adminerr2 = new Discord.MessageEmbed() // Если права нет, то пишем это
            .setColor('#fc5184')
            .setTitle(`${message.author.username}, вы не имеете прав на эту команду!`)
            .setAuthor(message.guild.name)
            .setFooter('Dusty Bot © 2021')
        message.channel.send(adminerr2) // Отправка ошибки
    }
}
module.exports = {clear};