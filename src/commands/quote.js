const axios = require('axios');
const {MessageEmbed}= require('discord.js');

const quotes = ()=> axios.get(process.env.QUOTES_API)
  .then(response => {
    return response.data
  })
  .catch(error => {
    return error
})

module.exports = {
    run: async(client, message, args) => {
        try{
        const tmp = await quotes()
        const quote =tmp[Math.floor(Math.random() * tmp.length)]
        const quoteEmbed = new MessageEmbed()
        .setDescription(quote.text)
        .setAuthor(quote.author)
        message.channel.send(quoteEmbed)
        }catch(e){
        console.log(e)
        }
      
    },
    name:'quote',
    aliases: ['quote'],
    description: 'Send a Randome quote'
}