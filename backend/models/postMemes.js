const mongoose = require('mongoose')
const normalize = require('normalize-mongoose')

const memeSchema = mongoose.Schema(
{
    name: {type:String},
     url : {type:String},
    caption: {type:String}


})

memeSchema.plugin(normalize)

var PostMeme = mongoose.model('PostMeme',memeSchema)



module.exports = { PostMeme}
