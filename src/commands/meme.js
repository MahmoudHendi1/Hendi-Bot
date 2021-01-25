const axios = require('axios');

const meme = ()=> axios.get(process.env.MEME_API)
  .then(response => {
    return (response.data.url)
  })
  .catch(error => {
    return error
}) 

module.exports = {
  
  name:'meme',
  aliases: ['meme'],
  description: 'Send a Randome Meme',
  async run(client, message, args){
    message.channel.send(await meme())
  }
}

