const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Plan = mongoose.model('plan');

const PlanType = new GraphQLObjectType({
  name:  'PlanType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    challenge: {
      type: require('./challenge_type'),
      resolve(parentValue) {
        return Plan.findById(parentValue).populate('challenge')
          .then(plan => {
            console.log(plan)
            return plan.challenge
          });
      }
    }
  })
});

module.exports = PlanType;
