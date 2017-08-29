const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({

  name: { type: 'String' },
  descriptors: [{ type: 'String' }]

})

mongoose.model('role', RoleSchema);
