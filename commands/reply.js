const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const fs = require("fs");

function getReply(client, message, args) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        if (message.reference == null) {
            // The bot is sending a message, which itself triggers a message event, which then triggers the bot to send the message again since it's a dm, and so on...
            message.channel.send('Вы не переслали сообщение!');
            return;
        }
        //console.log(message.reference);
        //(`https://discord.com/channels/${message.reference.guildID}/${message.reference.channelID}/${message.reference.messageID}`);

        message.channel.messages.fetch(message.reference.messageID)
            .then(message => {
                // try {
                //     await mongoose.connect('mongodb+srv://user:exik1234@cluster0.cncy7.mongodb.net/DiscordDB?retryWrites=true&w=majority');
                //     console.log('Успешное подключение к базе данных!');
                // } catch (err) {
                //     console.log(err);
                //     return;
                // }
                const data = {
                    quote: message.content,
                    userId: message.author.id,
                };

                fs.readFile('./quotes.json', function (err, content) {
                    if (err) {
                        console.error(err);
                        return;
                    };
                    let parseJson = JSON.parse(content);
                    parseJson.push(data);

                    fs.writeFile('./quotes.json', JSON.stringify(parseJson, null, 4), (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        };
                        message.channel.send("Цитатка успешно добавлена!");
                    })
                })
            })
            .catch(console.error);
    }
    else {
        const adminerr2 = new Discord.MessageEmbed() // Если права нет, то пишем это
            .setColor('#ff5184')
            .setTitle(`${message.author.username}, вы не имеете прав на эту команду!`)
            .setAuthor(message.guild.name)
            .setFooter('Dusty Bot © 2021')
        message.channel.send(adminerr2) // Отправка ошибки
    }
}

module.exports = {getReply};