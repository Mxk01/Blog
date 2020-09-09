let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let articleSchema = new Schema(
{
  customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
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
