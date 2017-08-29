const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Role = mongoose.model('role');

const RoleType = new GraphQLObjectType({
  name:  'RoleType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    challenge: {
      type: require('./challenge_type'),
      resolve(parentValue) {
        return Role.findById(parentValue).populate('challenge')
          .then(role => {
            console.log(role)
            return role.challenge
          });
      }
    }
  })
});

module.exports = RoleType;
