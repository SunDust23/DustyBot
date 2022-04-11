const Discord = require('discord.js'); // Подключаем библиотеку discord.js

function Quote(expression, author, avatarURL){
     
    this.expression = expression;
    this.author = author;
    this.avatarURL = avatarURL;
    this.displayInfo = function(){
         
        console.log(`"${this.expression}" \n  ©️ ${this.author}`);
    }
}
Quote.prototype.sayConsole = function(mess) {
    console.log(`Пользователь ${mess.author.username} запросил цитатку`);
};

Quote.prototype.sayEmbeed = function(mess) {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Цитатки`)
    .setFooter(`©️ ${this.author}`)
    .setThumbnail(this.avatarURL)
    .setDescription(`"*${this.expression}*"`)
    mess.channel.send(embed); // Отсылаем сообщение
};
 
module.exports = Quote;