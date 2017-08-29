const challenge = require('./challenge_mutations');
const plan = require('./plan_mutations');

type RootMutation {
  challenge.addChallenge
  challenge.addPlanToChallenge
  plan.likePlan
}

module.exports = RootMutation;
