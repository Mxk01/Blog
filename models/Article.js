let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let articleSchema = new Schema(
{
  articleId:
  {

      // This is a relation between two mongoose models
      type:Schema.Types.ObjectId, // ObjectId  is an unique identifier which belongs to the user which has placed this order;
      ref:'User', // Here we specify that we want the  id of that user from the User model
  },
title:
{
  type:String
},
description:
{
  type:String
},
markdown:
{
  type:String
},
createdAt:
{
  type:Date,
  default:Date.now
}

},{timestamps:true}); // Timestamps is helpful on tracking when user was created ,we get 2 fields for that


module.exports = mongoose.model('Article',articleSchema);
