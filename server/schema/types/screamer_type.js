const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Screamer = mongoose.model('screamer');

const ScreamerType = new GraphQLObjectType({
  name:  'ScreamerType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    challenge: {
      type: require('./challenge_type'),
      resolve(parentValue) {
        return Screamer.findById(parentValue).populate('challenge')
          .then(screamer => {
            console.log(screamer)
            return screamer.challenge
          });
      }
    }
  })
});

module.exports = ScreamerType;
