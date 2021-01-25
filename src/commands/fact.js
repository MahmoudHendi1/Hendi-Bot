const axios = require('axios');

const fact = (language='en')=>{
  const url =process.env.FACT_API+`?language=${language}`
  return axios.get(url)
  .then(response => {
    return (response.data)
  })
  .catch(error => {
    return error.response.data
})}

module.exports = {
  run: async(client, message, args) => {
    if(args[0]){
      console.log(args[0])
        const newFact = await fact(args)
        if(newFact.error){
            return message.channel.send("Invalid Language, you can choose `en` or `de`")
        }
        return message.channel.send(newFact.text)
    }
    return message.channel.send((await fact()).text)
  },
  name:'fact',
  aliases: [],
  description: 'Send a Randome Fact'
}
