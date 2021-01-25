const rand=(end,start=0)=>{
    return (Math.floor(Math.random() * (end-start+1))+start);
}
module.exports = {
  run: async(client, message, args) => {
    if(args.length===0){
        return message.channel.send(rand(100000))
    }

    const _args = args.split(/\s+/)
    try{
    if(_args[0] && _args[1]){
        if(parseInt(_args[0])>parseInt(_args[1]))throw 'The start can\'t be bigger than end'
        if(Number.isNaN(parseInt(_args[0]))||Number.isNaN(parseInt(_args[1])))throw 'Choose a valid number'
            message.channel.send(rand(parseInt(_args[1]),parseInt(_args[0])))
        }else if(_args[0]){
            message.channel.send(rand(parseInt(_args[0])))
        }
    }catch(e){
        message.channel.send(e)
    }
  },
  name:'number',
  aliases: [],
  description: 'Send a Randome Number'
}

