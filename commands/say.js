function say(client, message, args) {
    const argss = message.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    if (message.member.hasPermission('MANAGE_MESSAGES')) { // Делаем проверку, что-бы не все могли использовать эту команду, смогут только те, кто может удалять сообщения на сервере
        let sms = argss.join(" "); // Считываем то, что хотим отправить!
        message.channel.bulkDelete(1); // Удаляем сообщение с командой
        message.channel.send(sms); // Отправляем сообщение
        console.log(`Пользователь ${message.author.username} отправил через say: ${argss.join(" ")}`); // Пишем в консоль о том, что кто-то написал сообщение через бота)
    } else {
        const adminerr2 = new Discord.MessageEmbed() // Если права нет, то пишем это
            .setColor('#fc5184')
            .setTitle(`${message.author.username}, вы не имеете прав на эту команду!`)
            .setAuthor(message.guild.name)
            .setFooter('Dusty Bot © 2021')
        message.channel.send(adminerr2) // Отправка ошибки
    }
};

module.exports = {say};