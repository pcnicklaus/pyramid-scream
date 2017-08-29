const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TalentSchema = new Schema({

  type: { type: String },
  name: { type: String },
  category: { type: String },
  experience: { type: String },

})

mongoose.model('talent', TalentSchema);
