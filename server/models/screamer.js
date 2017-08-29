const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScreamerSchema = new Schema({

  name: { type: String },
  age: { type: String },
  passions: {
    type: Schema.Types.ObjectId,
    ref: 'talent'
  },
  skills: {
    type: Schema.Types.ObjectId,
    ref: 'talent'
  },
  status: { type: Boolean },
  hoursMonthly: { type: Number },
  hoursLeft: { type: Number },
  desiredRoles: {
    type: Schema.Types.ObjectId,
    ref: 'role'
  },
  challenges: {
    type: Schema.Types.ObjectId,
    ref: 'challenge'
  }

})

mongoose.model('screamer', ScreamerSchema);
