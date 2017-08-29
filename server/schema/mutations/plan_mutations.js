const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Plan = mongoose.model('plan');
const PlanType = require('../types/plan_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    likePlan: {
      type: PlanType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Plan.like(id);
      }
    }
  }
});

module.exports = mutation;
