const axios = require('axios');
const {MessageEmbed}= require('discord.js');
const recipe = ()=> axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => {
    return (response.data.meals[0])
  })
  .catch(error => {
    return error
}) 

module.exports = {
  run: async(client, message, args) => {
    try{
      const commands =await Array.from(await client.commands.keys())
      const commandName=commands[(Math.floor(Math.random() * commands.length))+1]
      client.commands.get(commandName).run(client, message, args);
    }catch(e){
      console.log(e)
    }

  },
  name:'',
  aliases: [],
  description: 'Will do a randome thing'
}
