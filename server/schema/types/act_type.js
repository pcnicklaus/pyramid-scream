const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Act = mongoose.model('act');

const ActType = new GraphQLObjectType({
  name:  'ActType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    challenge: {
      type: require('./challenge_type'),
      resolve(parentValue) {
        return Act.findById(parentValue).populate('challenge')
          .then(act => {
            console.log(act)
            return act.challenge
          });
      }
    }
  })
});

module.exports = ActType;
