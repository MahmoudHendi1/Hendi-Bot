const axios = require('axios');
const {MessageEmbed}= require('discord.js');
const recipe = ()=> axios.get(process.env.RECIPE_API)
  .then(response => {
    return (response.data.meals[0])
  })
  .catch(error => {
    return error
}) 

module.exports = {
  run: async(client, message, args) => {
    try{
      let new_recipe =await recipe()
      while(new_recipe.strInstructions.length>2000)new_recipe =await recipe()
      const recipeEmbed = new MessageEmbed().setTitle(new_recipe.strMeal)
      .setImage(new_recipe.strMealThumb)
      .setDescription(new_recipe.strInstructions)
      .setURL(new_recipe.strYoutube)
      message.channel.send(recipeEmbed)
    }catch(e){
      console.log(e)
    }
    
  },
  name:'recipe',
  aliases: [],
  description: 'Send a Randome recipe'
}
