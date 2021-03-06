const mongoose = require('mongoose');

// auto generate slug
const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
  name : {type: String, required: true},
  des : {type: String},
  image : {type: String},
  videoid : {type: String, required: true},
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
});

// add plugin
Course.plugin(mongooseDelete,{ 
  deletedAt : true,
  overrideMethods: 'all',
 });
mongoose.plugin(slug);

 module.exports = mongoose.model('Course', Course);