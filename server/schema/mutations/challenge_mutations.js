const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Challenge = mongoose.model('challenge');
const ChallengeType = require('../types/challenge_type');

module.exports = {
  addChallenge: () => {
    return {
      type: ChallengeType,
      args: {
        title: { type: GraphQLString },
        subject: { type: GraphQLString },
        description: { type: GraphQLString },
        image_url: { type: GraphQLString },
      },
      resolve(parentValue, { title, subject, description, image_url }) {
        return (new Challenge({ title, subject, description, image_url })).save()
      }
    }
  }
}


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addChallenge: {
      type: ChallengeType,
      args: {
        title: { type: GraphQLString },
        subject: { type: GraphQLString },
        description: { type: GraphQLString },
        image_url: { type: GraphQLString },
      },
      resolve(parentValue, { title, subject, description, image_url }) {
        return (new Challenge({ title, subject, description, image_url })).save()
      }
    },
    addPlanToChallenge: {
      type: ChallengeType,
      args: {
        content: { type: GraphQLString },
        challengeId: { type: GraphQLID }
      },
      resolve(parentValue, { content, challengeId }) {
        return Challenge.addPlan(challengeId, content);
      }
    },
    deleteChallenge: {
      type: ChallengeType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Challenge.remove({ _id: id });
      }
    }
  }
});

// module.exports = mutation;
