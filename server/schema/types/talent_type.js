const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Talent = mongoose.model('talent');

const TalentType = new GraphQLObjectType({
  name:  'TalentType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    challenge: {
      type: require('./challenge_type'),
      resolve(parentValue) {
        return Talent.findById(parentValue).populate('challenge')
          .then(talent => {
            console.log(talent)
            return talent.challenge
          });
      }
    }
  })
});

module.exports = TalentType;
