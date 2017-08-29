const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const PlanType = require('./plan_type')
const ScreamerType = require('./screamer_type')
const ActType = require('./act_type')

const Challenge = mongoose.model('challenge')

const ChallengeType = new GraphQLObjectType({
  name: 'ChallengeType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    subject: { type: GraphQLString },
    description: { type: GraphQLString },
    image_url: {type: GraphQLString },
    plans: {
      type: new GraphQLList(PlanType),
      resolve(parentValue){
        return Challenge.findPlans(parentValue.id)
      }
    },
    screamers: {
      type: new GraphQLList(ScreamerType),
      resolve(parentValue){
        return Challenge.findScreamers(parentValue.id)
      }
    },
    acts: {
      type: new GraphQLList(ActType),
      resolve(parentValue){
        return Challenge.findActs(parentValue.id)
      }
    }
  })
})

module.exports = ChallengeType;
