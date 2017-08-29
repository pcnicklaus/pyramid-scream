const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({

  title: { type: String },
  subject: { type: String },
  description: { type: String },
  image_url: {type: String },
  plan: {
    type: Schema.Types.ObjectId,
    ref: 'plan'
  },
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'screamer'
  }],
  acts: [{
    type: Schema.Types.ObjectId,
    ref: 'act'
  }]

});

// total brainfarting as to why this isnt
// ChallengeSchema.statics.find = function(id, collection) {
//   return this.findById(id, collection)
//     .populate(collection)
//     .then(challenge => challenge.collection);
// }
//

ChallengeSchema.statics.findPlans = function(id) {
  return this.findById(id)
    .populate('acts')
    .then(challenge => challenge.acts);
}
ChallengeSchema.statics.findActs = function(id) {
  return this.findById(id)
    .populate('plans')
    .then(challenge => challenge.plans);
}
ChallengeSchema.statics.findRoles = function(id) {
  return this.findById(id)
    .populate('roles')
    .then(challenge => challenge.roles);
}
ChallengeSchema.statics.findScreamers = function(id) {
  return this.findById(id)
    .populate('screamers')
    .then(challenge => challenge.screamers);
}
ChallengeSchema.statics.findTalents = function(id) {
  return this.findById(id)
    .populate('talents')
    .then(challenge => challenge.talents);
}
mongoose.model('challenge', ChallengeSchema);

// communications: [{
//   type: Schema.Types.ObjectId,
//   ref: 'communications'
// }]
