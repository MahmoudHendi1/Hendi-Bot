const coin = ['Head','Tail']

module.exports = {
  run: async(client, message, args) => {
      message.channel.send(coin[ (Math.floor(Math.random() * 2))])
  },
  name:'coinflip',
  aliases: ['coinFlip'],
  description: 'Flip a Coin'
}
