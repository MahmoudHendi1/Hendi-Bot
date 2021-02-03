const axios = require('axios');


module.exports = {
  run: async (client, message, args)=>{
    message.channel.send(await axios.get(process.env.MEME_API)
    .then(response => {
      return (response.data.url)
    })
    .catch(error => {
      return error
  })
  )
  },
  name:'meme',
  aliases: ['meme'],
  description: 'Send a Randome Meme'
}

