const axios = require('axios');

const catPhoto = ()=> axios.get(process.env.CAT_PHOTO_API)
  .then(response => {
    return (response.data.url)
  })
  .catch(error => {
    return error
}) 

module.exports = {
  
  name:'catPhoto',
  aliases: ['catPhoto'],
  description: 'Send a Randome Cat Photo',
  async run(client, message, args){
    message.channel.send(await catPhoto())
  }
}

