const Quote = require("./Classes/quote.js");
const quotesList = require('../quotes.json');

function quotes(client, message, args) {
    let quoteId = Math.floor(Math.random() * quotesList.length);

    let user = client.users.fetch(quotesList[quoteId].userId)
        .then(
            function (user) {
                let url = user.avatarURL({ format: 'png', size: 512 });
                // console.log(url);

                let quote = new Quote(quotesList[quoteId].quote, user.username, url);

                quote.sayConsole(message);
                quote.sayEmbeed(message);
            }
        )
}
module.exports = {quotes};