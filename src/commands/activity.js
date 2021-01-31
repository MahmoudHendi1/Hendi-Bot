const axios = require('axios');

const activity = (type='')=>{
  let url=process.env.ACTIVITY_API
  if(type) url = url+`?type=${type}` 
  return axios.get(`https://www.boredapi.com/api/activity?type=${type}`)
  .then(response => {
    return (response.data.activity)
  })
  .catch(error => {
    return error
})
} 
const activityList=['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']
module.exports = {
  run: async(client, message, args) => {
    try{
        if(args){
            const type=args
            const isValid = activityList.includes(type)
            if(!isValid)return message.channel.send(`Choose a valid type \`${activityList}\``)
            return message.channel.send(await activity(type))
        }
        message.channel.send(await activity())
    }catch(e){
        message.channel.send(e)
    }
  },
  flags: activityList,
  name:'activity',
  aliases: [],
  description: 'Send a Randome Activity'
}

