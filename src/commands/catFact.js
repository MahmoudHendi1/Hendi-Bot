const axios = require('axios');

const fact = ()=> axios.get(process.env.CAT_API)
  .then(response => {
    return (response.data)
  })
  .catch(error => {
    return error.response.data
}) 

module.exports = {
  run: async(client, message, args) => {
    message.channel.send((await fact()).fact)
  },
  name:'catfact',
  aliases: ['catFact'],
  description: 'Send a Randome Cat Fact'
}
