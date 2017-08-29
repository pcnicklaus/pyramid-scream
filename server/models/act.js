const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActSchema = new Schema({

  kind: { type: String },
  challenge: { type: Schema.Types.ObjectId, ref: 'challenge' },
  
});

mongoose.model('act', ActSchema);
