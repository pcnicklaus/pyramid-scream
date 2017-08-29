const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({

  architect: { type: Schema.Types.ObjectId, ref: 'screamer' },
  timeline: [{ type: Schema.Types.ObjectId, ref: 'act' }],
  needs: [{ type: 'String' }]

})

mongoose.model('plan', PlanSchema);
